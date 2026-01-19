import { useState } from 'react'

interface Video {
  slug: string
  title: string
  videoId: string
  date: string
  description?: string
  type: 'video' | 'shorts' | 'playlist'
}

interface VideoFilterProps {
  videos: Video[]
  locale?: 'ko' | 'en'
}

const translations = {
  ko: {
    all: '전체',
    video: '동영상',
    shorts: 'Shorts',
    playlist: '재생목록',
    noVideos: '아직 등록된 영상이 없습니다.',
  },
  en: {
    all: 'All',
    video: 'Videos',
    shorts: 'Shorts',
    playlist: 'Playlists',
    noVideos: 'No videos registered yet.',
  },
}

export default function VideoFilter({ videos, locale = 'ko' }: VideoFilterProps) {
  const t = translations[locale]
  const [filter, setFilter] = useState<'all' | 'video' | 'shorts' | 'playlist'>('all')

  const filteredVideos = filter === 'all'
    ? videos
    : videos.filter(v => v.type === filter)

  const videoCount = videos.filter(v => v.type === 'video').length
  const shortsCount = videos.filter(v => v.type === 'shorts').length
  const playlistCount = videos.filter(v => v.type === 'playlist').length

  const filters = [
    { id: 'all' as const, label: t.all, count: videos.length },
    { id: 'video' as const, label: t.video, count: videoCount },
    { id: 'shorts' as const, label: t.shorts, count: shortsCount },
    { id: 'playlist' as const, label: t.playlist, count: playlistCount },
  ]

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f.id
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {/* Videos grid */}
      {filteredVideos.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.noVideos}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <article
              key={video.slug}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div
                className={`relative w-full ${
                  video.type === 'shorts' ? 'aspect-[9/16] max-h-80' : 'aspect-video'
                }`}
              >
                <iframe
                  src={
                    video.type === 'playlist'
                      ? `https://www.youtube.com/embed/videoseries?list=${video.videoId}`
                      : `https://www.youtube.com/embed/${video.videoId}`
                  }
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      video.type === 'shorts'
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                        : video.type === 'playlist'
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    }`}
                  >
                    {video.type === 'shorts'
                      ? 'Shorts'
                      : video.type === 'playlist'
                        ? locale === 'ko' ? '재생목록' : 'Playlist'
                        : locale === 'ko' ? '동영상' : 'Video'}
                  </span>
                  <time className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(video.date).toLocaleDateString(
                      locale === 'ko' ? 'ko-KR' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </time>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                    {video.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
