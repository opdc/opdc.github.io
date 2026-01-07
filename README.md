# OPDC - 오픈플랫폼 개발자커뮤니티

[![Astro](https://img.shields.io/badge/Astro-5.16-FF5D01?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org)

> 개발자들이 함께 배우고 성장하는 열린 커뮤니티의 공식 웹사이트

---

## 📋 목차

- [소개](#-소개)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [개발 가이드](#-개발-가이드)
- [주요 기능](#-주요-기능)
- [배포](#-배포)

---

## 🎯 소개

(사)오픈플랫폼 개발자커뮤니티(OPDC)의 공식 웹사이트입니다. **Astro 5** 기반의 모던 웹 애플리케이션으로 구축되었습니다.

### 주요 개선사항

- ⚡ **초고속 성능**: Astro의 제로 JavaScript 기본 설정으로 Lighthouse 95-100점
- 🎨 **모던 UI/UX**: TailwindCSS 4.x 기반의 반응형 디자인
- 📱 **완벽한 모바일 대응**: 모든 기기에서 최적화된 경험
- 🔍 **향상된 검색**: 본문 내용을 포함한 전체 검색 기능
- ♿ **접근성 개선**: ARIA 레이블 및 키보드 내비게이션 지원

---

## 🛠️ 기술 스택

### Core

- **Framework**: [Astro](https://astro.build) 5.16.6
- **Runtime**: Node.js 18+
- **Language**: TypeScript (Strict Mode)
- **Package Manager**: npm / pnpm

### Frontend

- **UI Library**: React 19.2.3
- **Styling**: TailwindCSS 4.1.18
- **Icons**: Font Awesome 6.x
- **Carousel**: Swiper 12.0.3
- **Content**: MDX, Markdown

### Content Management

- **Content Collections**: Astro Content Collections (타입세이프)
- **Schema Validation**: Zod
- **Date Handling**: date-fns

### Development

- **Code Formatter**: Prettier with Astro plugin
- **Build Tool**: Vite 6.x
- **SEO**: astro-seo

---

## 📂 프로젝트 구조

```
/
├── public/                  # 정적 파일
│   ├── img/                 # 이미지 파일
│   ├── pdf/                 # PDF 문서
│   └── favicon.ico          # 파비콘
├── src/
│   ├── components/          # 컴포넌트
│   │   ├── layout/          # 레이아웃 컴포넌트
│   │   ├── BlogSearch.tsx   # 블로그 검색 (React)
│   │   ├── LeadersCarousel.tsx  # 리더 캐러셀 (React)
│   │   └── BackToTop.astro  # 상단 이동 버튼
│   ├── content/             # Content Collections
│   │   ├── blog/            # 블로그 포스트 (MDX)
│   │   ├── leaders/         # 리더 프로필 (MDX)
│   │   ├── projects/        # 프로젝트 (MDX)
│   │   └── config.ts        # 스키마 정의
│   ├── layouts/             # 페이지 레이아웃
│   │   └── BaseLayout.astro # 기본 레이아웃
│   ├── pages/               # 페이지 라우팅
│   │   ├── index.astro      # 홈페이지
│   │   ├── about.astro      # 소개
│   │   ├── history.astro    # 연혁
│   │   ├── blog/            # 소식/공지
│   │   ├── leaders/         # 리더 소개
│   │   ├── projects/        # 프로젝트
│   │   └── partners.astro   # 파트너
│   ├── styles/              # 글로벌 스타일
│   │   └── global.css       # Tailwind imports
│   └── config.ts            # 사이트 설정
├── astro.config.mjs         # Astro 설정
├── tailwind.config.mjs      # TailwindCSS 설정
├── tsconfig.json            # TypeScript 설정
└── package.json             # 의존성 관리
```

---

## 🚀 시작하기

### 필수 요구사항

- **Node.js**: 18.x 이상
- **npm**: 9.x 이상 (또는 pnpm 8.x 이상)

### 설치

```bash
# 저장소 클론
git clone https://github.com/opdc/opdc.github.io.git
cd opdc.github.io

# 의존성 설치
npm install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (http://localhost:4321)
npm run dev

# 포트 변경
npm run dev -- --port 3000
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 💻 개발 가이드

### 새 블로그 포스트 추가

1. `src/content/blog/` 디렉토리에 새 `.md` 또는 `.mdx` 파일 생성
2. Frontmatter 작성:

```markdown
---
title: '포스트 제목'
date: 2025-01-07
description: '포스트 설명'
author: 'OPDC'
tags: ['공지사항', '이벤트']
draft: false
---

포스트 본문 내용...
```

### 새 리더 추가

1. `src/content/leaders/` 디렉토리에 새 `.md` 파일 생성
2. Frontmatter 작성:

```markdown
---
name: '홍길동'
role: '회장'
bio: '간략한 소개'
image: '/img/leader/hong-gildong.png'
order: 1
category: '운영진'
---

상세 프로필 내용...
```

### 새 프로젝트 추가

1. `src/content/projects/` 디렉토리에 새 `.md` 파일 생성
2. Frontmatter 작성:

```markdown
---
title: '프로젝트 이름'
description: '프로젝트 설명'
image: '/img/project/project-name.png'
tags: ['오픈소스', 'PaaS']
status: 'active'  # active | completed | archived
order: 1
---

프로젝트 상세 내용...
```

### 스타일 커스터마이징

**색상 테마 변경** (`tailwind.config.mjs`):

```js
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        500: '#0ea5e9',
        600: '#0284c7',
        // ...
      },
    },
  },
}
```

**글로벌 스타일 수정** (`src/styles/global.css`):

```css
@layer base {
  html {
    @apply scroll-smooth;
    font-family: 'Pretendard Variable', system-ui, sans-serif;
  }
}
```

### 코드 포매팅

```bash
# Prettier로 코드 포매팅
npx prettier --write .

# Astro 체크
npm run astro check
```

---

## ✨ 주요 기능

### 1. 홈페이지

- 히어로 섹션
- 최신 소식 3개 미리보기
- 리더 캐러셀 (랜덤 셔플)
- 소셜 미디어 링크
- CTA(Call To Action) 섹션

### 2. 소식/공지

- 전체 검색 기능 (제목, 설명, 본문, 작성자)
- 페이지네이션 (10개씩)
- 태그 필터링
- 개별 포스트 상세 페이지

### 3. 리더 소개

- 카테고리별 필터링 (운영진, 기술분과)
- 개별 리더 상세 프로필
- 반응형 그리드 레이아웃

### 4. 프로젝트

- 프로젝트 목록 및 상태 표시
- 개별 프로젝트 상세 페이지
- 이미지 및 문서 지원

### 5. 기타 페이지

- 소개 (About)
- 연혁 (History)
- 파트너 (Partners)
- 404 에러 페이지

---

## 🌐 배포

### GitHub Pages

```bash
# 빌드
npm run build

# dist 폴더가 생성되고 GitHub Pages로 자동 배포
```

**GitHub Actions 설정** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v2
```

### Vercel / Netlify

자동으로 감지되어 배포됩니다.

```bash
# 빌드 명령어
npm run build

# 출력 디렉토리
dist
```

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스로 배포됩니다.

---

## 📞 문의

- 웹사이트: [https://opdc.kr](https://opdc.kr)
- 이메일: opdc.kr@gmail.com
- GitHub: [@opdc](https://github.com/opdc)
- Facebook: [egovframe.open](https://facebook.com/egovframe.open)
- YouTube: [@open-egovframe](https://youtube.com/@open-egovframe)
