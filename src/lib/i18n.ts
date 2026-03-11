/** 영문 slug에서 -en 접미사 제거 → 한국어 slug 반환 */
export function toKoSlug(enSlug: string): string {
  return enSlug.replace(/-en$/, '')
}

/** 한국어 slug에 -en 접미사 추가 → 영문 slug 반환 */
export function toEnSlug(koSlug: string): string {
  return `${koSlug}-en`
}
