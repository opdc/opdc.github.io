export const SITE = {
  name: 'OPDC',
  title: 'OPDC - 오픈플랫폼 개발자커뮤니티',
  description: '개발자들이 함께 배우고 성장하는 열린 커뮤니티',
  url: 'https://opdc.kr',
  phone: '070-4448-2673',
} as const

export const NAV_ITEMS = [
  { name: '소개', href: '/about' },
  { name: '연혁', href: '/history' },
  { name: '소식/공지', href: '/blog' },
  { name: '리더', href: '/leaders' },
  { name: '프로젝트', href: '/projects' },
  { name: '협력기관', href: '/partners' },
] as const
