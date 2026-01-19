/**
 * YouTube Data API를 사용하여 채널 콘텐츠를 가져오는 유틸리티
 */

// 환경변수에서 API 키와 채널 ID 가져오기
const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY || ''
const YOUTUBE_CHANNEL_ID = import.meta.env.YOUTUBE_CHANNEL_ID || 'UC채널ID' // @open-egovframe 채널 ID로 교체 필요

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  type: 'video' | 'shorts' | 'playlist'
}

export interface YouTubePlaylist {
  id: string
  title: string
  description: string
  thumbnail: string
  itemCount: number
}

// 채널의 업로드된 영상 목록 가져오기
export async function fetchChannelVideos(maxResults = 50): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn('YOUTUBE_API_KEY가 설정되지 않았습니다.')
    return []
  }

  try {
    // 1. 채널의 uploads playlist ID 가져오기
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    )
    const channelData = await channelRes.json()

    if (!channelData.items?.[0]) {
      console.error('채널을 찾을 수 없습니다.')
      return []
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

    // 2. uploads playlist에서 영상 목록 가져오기
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    )
    const videosData = await videosRes.json()

    if (!videosData.items) {
      return []
    }

    // 3. 영상 상세 정보 가져오기 (Shorts 구분을 위해)
    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',')
    const detailsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    )
    const detailsData = await detailsRes.json()

    const videoDetailsMap = new Map()
    detailsData.items?.forEach((item: any) => {
      videoDetailsMap.set(item.id, item)
    })

    return videosData.items.map((item: any) => {
      const videoId = item.snippet.resourceId.videoId
      const details = videoDetailsMap.get(videoId)

      // Shorts 판별: 60초 이하 세로 영상
      let type: 'video' | 'shorts' = 'video'
      if (details?.contentDetails?.duration) {
        const duration = parseDuration(details.contentDetails.duration)
        if (duration <= 60) {
          type = 'shorts'
        }
      }

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description || '',
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url || '',
        publishedAt: item.snippet.publishedAt,
        type,
      }
    })
  } catch (error) {
    console.error('YouTube API 오류:', error)
    return []
  }
}

// 채널의 재생목록 가져오기
export async function fetchChannelPlaylists(maxResults = 25): Promise<YouTubePlaylist[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn('YOUTUBE_API_KEY가 설정되지 않았습니다.')
    return []
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    )
    const data = await res.json()

    if (!data.items) {
      return []
    }

    return data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description || '',
      thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url || '',
      itemCount: item.contentDetails.itemCount,
    }))
  } catch (error) {
    console.error('YouTube API 오류:', error)
    return []
  }
}

// ISO 8601 duration을 초로 변환
function parseDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return 0

  const hours = parseInt(match[1] || '0', 10)
  const minutes = parseInt(match[2] || '0', 10)
  const seconds = parseInt(match[3] || '0', 10)

  return hours * 3600 + minutes * 60 + seconds
}

// 모든 콘텐츠 가져오기 (영상 + 재생목록)
export async function fetchAllYouTubeContent() {
  const [videos, playlists] = await Promise.all([
    fetchChannelVideos(),
    fetchChannelPlaylists(),
  ])

  return { videos, playlists }
}
