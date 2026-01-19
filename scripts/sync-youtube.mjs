#!/usr/bin/env node

/**
 * YouTube 채널 콘텐츠 자동 동기화 스크립트
 * yt-dlp를 사용하여 API 키 없이 채널 영상 목록을 가져옴
 *
 * 사용법:
 *   npm run sync-youtube
 *   npm run sync-youtube -- --channel "https://www.youtube.com/@open-egovframe"
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const VIDEOS_DIR = path.join(__dirname, '../src/content/videos')

// 기본 채널 URL (환경변수 또는 인자로 오버라이드 가능)
const DEFAULT_CHANNEL_URL = process.env.YOUTUBE_CHANNEL_URL || 'https://www.youtube.com/@open-egovframe'

// 파일명 생성 (안전한 문자만 사용)
function generateFilename(videoId, title, date) {
  const dateStr = date.split('T')[0]
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s가-힣-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 40) || videoId
  return `${dateStr}-${slug}-${videoId}.md`
}

// yt-dlp로 채널 영상 목록 가져오기
function fetchChannelVideos(channelUrl) {
  console.log(`채널 영상 목록 가져오는 중: ${channelUrl}`)

  try {
    // yt-dlp로 JSON 형식으로 영상 정보 추출 (다운로드 없이)
    const result = execSync(
      `yt-dlp --flat-playlist --dump-json "${channelUrl}/videos"`,
      { encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
    )

    const videos = result
      .trim()
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          return JSON.parse(line)
        } catch {
          return null
        }
      })
      .filter(Boolean)

    console.log(`영상 ${videos.length}개 발견`)
    return videos.map(v => ({
      id: v.id,
      title: v.title || `영상 ${v.id}`,
      description: v.description || '',
      uploadDate: v.upload_date || new Date().toISOString().split('T')[0].replace(/-/g, ''),
      duration: v.duration || 0,
      type: v.duration && v.duration <= 60 ? 'shorts' : 'video',
    }))
  } catch (error) {
    console.error('yt-dlp 오류:', error.message)
    return []
  }
}

// yt-dlp로 Shorts 목록 가져오기
function fetchChannelShorts(channelUrl) {
  console.log(`Shorts 목록 가져오는 중: ${channelUrl}`)

  try {
    const result = execSync(
      `yt-dlp --flat-playlist --dump-json "${channelUrl}/shorts"`,
      { encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
    )

    const shorts = result
      .trim()
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          return JSON.parse(line)
        } catch {
          return null
        }
      })
      .filter(Boolean)

    console.log(`Shorts ${shorts.length}개 발견`)
    return shorts.map(v => ({
      id: v.id,
      title: v.title || `Shorts ${v.id}`,
      description: v.description || '',
      uploadDate: v.upload_date || new Date().toISOString().split('T')[0].replace(/-/g, ''),
      duration: v.duration || 0,
      type: 'shorts',
    }))
  } catch (error) {
    console.error('Shorts 가져오기 실패 (없을 수 있음):', error.message)
    return []
  }
}

// yt-dlp로 재생목록 목록 가져오기
function fetchChannelPlaylists(channelUrl) {
  console.log(`재생목록 가져오는 중: ${channelUrl}`)

  try {
    const result = execSync(
      `yt-dlp --flat-playlist --dump-json "${channelUrl}/playlists"`,
      { encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
    )

    const playlists = result
      .trim()
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          return JSON.parse(line)
        } catch {
          return null
        }
      })
      .filter(Boolean)

    console.log(`재생목록 ${playlists.length}개 발견`)
    return playlists.map(p => ({
      id: p.id,
      title: p.title || `재생목록 ${p.id}`,
      description: p.description || '',
      uploadDate: new Date().toISOString().split('T')[0].replace(/-/g, ''),
      type: 'playlist',
    }))
  } catch (error) {
    console.error('재생목록 가져오기 실패 (없을 수 있음):', error.message)
    return []
  }
}

// 기존 파일에서 videoId 목록 추출
function getExistingVideoIds() {
  if (!fs.existsSync(VIDEOS_DIR)) {
    fs.mkdirSync(VIDEOS_DIR, { recursive: true })
    return new Set()
  }

  const files = fs.readdirSync(VIDEOS_DIR).filter(f => f.endsWith('.md'))
  const ids = new Set()

  for (const file of files) {
    const content = fs.readFileSync(path.join(VIDEOS_DIR, file), 'utf-8')
    const match = content.match(/videoId:\s*["']?([a-zA-Z0-9_-]+)["']?/)
    if (match) {
      ids.add(match[1])
    }
  }

  return ids
}

// 날짜 포맷 변환 (YYYYMMDD -> YYYY-MM-DD)
function formatDate(dateStr) {
  if (!dateStr || dateStr.length !== 8) {
    return new Date().toISOString().split('T')[0]
  }
  return `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`
}

// MDX 파일 생성
function createContentFile(item) {
  const date = formatDate(item.uploadDate)
  const filename = generateFilename(item.id, item.title, date)
  const filepath = path.join(VIDEOS_DIR, filename)

  // 이미 존재하면 스킵
  if (fs.existsSync(filepath)) {
    return null
  }

  const content = `---
title: "${item.title.replace(/"/g, '\\"')}"
videoId: "${item.id}"
date: ${date}
description: "${(item.description || '').split('\n')[0].substring(0, 200).replace(/"/g, '\\"')}"
type: ${item.type}
---
`

  fs.writeFileSync(filepath, content, 'utf-8')
  return filename
}

// 메인 함수
async function main() {
  // 인자에서 채널 URL 가져오기
  const args = process.argv.slice(2)
  let channelUrl = DEFAULT_CHANNEL_URL

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--channel' && args[i + 1]) {
      channelUrl = args[i + 1]
      break
    }
  }

  console.log('========================================')
  console.log('YouTube 동기화 시작')
  console.log(`채널: ${channelUrl}`)
  console.log('========================================\n')

  // yt-dlp 설치 확인
  try {
    execSync('yt-dlp --version', { encoding: 'utf-8' })
  } catch {
    console.error('yt-dlp가 설치되어 있지 않습니다.')
    console.error('설치: pip install yt-dlp 또는 brew install yt-dlp')
    process.exit(1)
  }

  const existingIds = getExistingVideoIds()
  console.log(`기존 콘텐츠: ${existingIds.size}개\n`)

  // 영상, Shorts, 재생목록 가져오기
  const videos = fetchChannelVideos(channelUrl)
  const shorts = fetchChannelShorts(channelUrl)
  const playlists = fetchChannelPlaylists(channelUrl)

  // 모든 콘텐츠 합치기 (중복 제거)
  const allContent = [...videos, ...shorts, ...playlists]
  const uniqueContent = allContent.filter((item, index, self) =>
    index === self.findIndex(t => t.id === item.id)
  )

  console.log(`\n총 콘텐츠: ${uniqueContent.length}개`)

  // 새 콘텐츠만 파일 생성
  let newCount = 0
  for (const item of uniqueContent) {
    if (!existingIds.has(item.id)) {
      const filename = createContentFile(item)
      if (filename) {
        console.log(`  + ${filename}`)
        newCount++
      }
    }
  }

  console.log(`\n========================================`)
  console.log(`동기화 완료! 새로 추가: ${newCount}개`)
  console.log('========================================')

  // GitHub Actions output
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `new_count=${newCount}\n`)
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `has_changes=${newCount > 0}\n`)
  }
}

main().catch(error => {
  console.error('오류 발생:', error.message)
  process.exit(1)
})
