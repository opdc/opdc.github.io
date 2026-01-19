#!/usr/bin/env node

/**
 * YouTube 영상 추가 스크립트
 * 사용법: npm run add-video "https://youtube.com/watch?v=VIDEO_ID"
 *         npm run add-video "https://youtube.com/shorts/VIDEO_ID"
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const VIDEOS_DIR = path.join(__dirname, '../src/content/videos')

// YouTube URL에서 video ID 추출
function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

// Shorts 여부 확인
function isShorts(url) {
  return url.includes('/shorts/')
}

// YouTube oEmbed API로 영상 정보 가져오기
async function fetchVideoInfo(videoId) {
  const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`

  try {
    const response = await fetch(oembedUrl)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const data = await response.json()
    return {
      title: data.title,
      thumbnail: data.thumbnail_url,
    }
  } catch (error) {
    console.warn(`영상 정보를 가져오지 못했습니다: ${error.message}`)
    return null
  }
}

// 파일명 생성 (한글 포함 가능, 특수문자 제거)
function generateSlug(title, videoId) {
  const sanitized = title
    .toLowerCase()
    .replace(/[^\w\s가-힣-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50)

  return sanitized || videoId
}

// MDX 파일 생성
function createVideoFile(videoId, title, type, description = '') {
  const today = new Date().toISOString().split('T')[0]
  const slug = generateSlug(title, videoId)
  const filename = `${today}-${slug}.md`
  const filepath = path.join(VIDEOS_DIR, filename)

  // 이미 존재하는지 확인
  if (fs.existsSync(filepath)) {
    console.error(`파일이 이미 존재합니다: ${filename}`)
    process.exit(1)
  }

  const content = `---
title: "${title.replace(/"/g, '\\"')}"
videoId: "${videoId}"
date: ${today}
description: "${description}"
type: ${type}
---
`

  fs.writeFileSync(filepath, content, 'utf-8')
  return filename
}

// 메인 함수
async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log(`
사용법:
  npm run add-video "<YouTube URL>"
  npm run add-video "<YouTube URL>" -- --title "제목" --description "설명"

예시:
  npm run add-video "https://youtube.com/watch?v=dQw4w9WgXcQ"
  npm run add-video "https://youtube.com/shorts/abcd1234567"
  npm run add-video "https://youtu.be/dQw4w9WgXcQ" -- --title "커스텀 제목"
`)
    process.exit(0)
  }

  const url = args[0]
  const videoId = extractVideoId(url)

  if (!videoId) {
    console.error('유효한 YouTube URL이 아닙니다.')
    process.exit(1)
  }

  const type = isShorts(url) ? 'shorts' : 'video'

  // 옵션 파싱
  let customTitle = null
  let description = ''

  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--title' && args[i + 1]) {
      customTitle = args[i + 1]
      i++
    } else if (args[i] === '--description' && args[i + 1]) {
      description = args[i + 1]
      i++
    }
  }

  console.log(`영상 ID: ${videoId}`)
  console.log(`타입: ${type === 'shorts' ? 'Shorts' : '동영상'}`)

  // 영상 정보 가져오기
  let title = customTitle
  if (!title) {
    console.log('영상 정보를 가져오는 중...')
    const info = await fetchVideoInfo(videoId)
    if (info) {
      title = info.title
      console.log(`제목: ${title}`)
    } else {
      title = `영상 ${videoId}`
      console.log(`제목을 가져오지 못해 기본값 사용: ${title}`)
    }
  }

  // 디렉토리 확인
  if (!fs.existsSync(VIDEOS_DIR)) {
    fs.mkdirSync(VIDEOS_DIR, { recursive: true })
  }

  // 파일 생성
  const filename = createVideoFile(videoId, title, type, description)

  console.log(`\n파일 생성 완료: src/content/videos/${filename}`)
  console.log('\n다음 단계:')
  console.log('1. 필요시 파일을 열어 description을 수정하세요')
  console.log('2. git add && git commit && git push')
}

main().catch(console.error)
