import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('웹접근성 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('색상 대비 검사', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .exclude('pre')  // 코드 블록 제외
      .exclude('code') // 인라인 코드 제외
      .exclude('[style*="--astro-code"]') // Astro 코드 하이라이팅 제외
      .analyze()

    const colorContrastViolations = accessibilityScanResults.violations.filter(
      (v) => v.id === 'color-contrast'
    )

    // 코드 하이라이팅 관련 위반 제외
    const filteredViolations = colorContrastViolations.map(v => ({
      ...v,
      nodes: v.nodes.filter(node => !node.html.includes('astro-code'))
    })).filter(v => v.nodes.length > 0)

    console.log('\n=== 색상 대비 검사 결과 ===')
    if (filteredViolations.length === 0) {
      console.log('✅ 색상 대비 문제 없음 (코드 하이라이팅 제외)')
    } else {
      console.log(`⚠️ 색상 대비 위반: ${filteredViolations.length}개`)
      filteredViolations.forEach((v) => {
        console.log(`  - ${v.help}`)
        v.nodes.forEach((node) => {
          console.log(`    요소: ${node.html.substring(0, 100)}...`)
          console.log(`    영향 범위: ${node.impact}`)
        })
      })
    }

    expect(filteredViolations.length).toBe(0)
  })

  test('ARIA 속성 검사', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .analyze()

    const ariaViolations = accessibilityScanResults.violations.filter(
      (v) => v.id.startsWith('aria')
    )

    console.log('\n=== ARIA 속성 검사 결과 ===')
    if (ariaViolations.length === 0) {
      console.log('✅ ARIA 속성 문제 없음')
    } else {
      console.log(`⚠️ ARIA 위반: ${ariaViolations.length}개`)
      ariaViolations.forEach((v) => {
        console.log(`  - ${v.id}: ${v.help}`)
        v.nodes.forEach((node) => {
          console.log(`    요소: ${node.html.substring(0, 100)}...`)
        })
      })
    }

    expect(ariaViolations.length).toBe(0)
  })

  test('건너뛰기 링크 존재 확인', async ({ page }) => {
    const skipLinks = await page.locator('.skip-link').all()

    console.log('\n=== 건너뛰기 링크 검사 ===')
    console.log(`건너뛰기 링크 개수: ${skipLinks.length}`)

    expect(skipLinks.length).toBeGreaterThanOrEqual(1)

    // 첫 번째 건너뛰기 링크 테스트
    const skipLink = page.locator('.skip-link').first()
    await skipLink.focus()

    // 포커스 시 화면에 보이는지 확인
    const box = await skipLink.boundingBox()
    expect(box).not.toBeNull()
    expect(box!.y).toBeGreaterThanOrEqual(0)

    console.log('✅ 건너뛰기 링크 정상 동작')
  })

  test('H1 태그 존재 확인', async ({ page }) => {
    const h1Tags = await page.locator('h1').all()

    console.log('\n=== H1 태그 검사 ===')
    console.log(`H1 태그 개수: ${h1Tags.length}`)

    expect(h1Tags.length).toBeGreaterThanOrEqual(1)

    const h1Text = await page.locator('h1').first().textContent()
    console.log(`H1 내용: ${h1Text}`)
    console.log('✅ H1 태그 존재')
  })

  test('키보드 네비게이션 테스트', async ({ page }) => {
    console.log('\n=== 키보드 네비게이션 검사 ===')

    // Tab 키로 첫 번째 포커스 가능 요소로 이동
    await page.keyboard.press('Tab')

    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement
      return el ? el.tagName.toLowerCase() : null
    })

    expect(focusedElement).not.toBeNull()
    console.log(`첫 번째 포커스 요소: ${focusedElement}`)
    console.log('✅ 키보드 네비게이션 정상')
  })

  test('전체 접근성 스캔', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    console.log('\n=== 전체 접근성 검사 결과 ===')
    console.log(`✓ 통과: ${accessibilityScanResults.passes.length}개 규칙`)
    console.log(`✗ 위반: ${accessibilityScanResults.violations.length}개 규칙`)
    console.log(`? 불완전: ${accessibilityScanResults.incomplete.length}개 규칙`)

    if (accessibilityScanResults.violations.length > 0) {
      console.log('\n위반 상세:')
      accessibilityScanResults.violations.forEach((v) => {
        console.log(`  [${v.impact?.toUpperCase()}] ${v.id}: ${v.help}`)
        console.log(`    영향 요소: ${v.nodes.length}개`)
      })
    }

    // 심각도별 분류
    const critical = accessibilityScanResults.violations.filter(v => v.impact === 'critical')
    const serious = accessibilityScanResults.violations.filter(v => v.impact === 'serious')
    const moderate = accessibilityScanResults.violations.filter(v => v.impact === 'moderate')
    const minor = accessibilityScanResults.violations.filter(v => v.impact === 'minor')

    console.log('\n심각도별 위반 사항:')
    console.log(`  Critical: ${critical.length}개`)
    console.log(`  Serious: ${serious.length}개`)
    console.log(`  Moderate: ${moderate.length}개`)
    console.log(`  Minor: ${minor.length}개`)

    const totalViolations = accessibilityScanResults.violations.length
    const totalPasses = accessibilityScanResults.passes.length
    const score = Math.round((totalPasses / (totalPasses + totalViolations)) * 100 * 10) / 10

    console.log(`\n접근성 점수: ${score}%`)

    // Critical 위반이 없어야 통과
    expect(critical.length).toBe(0)
  })

  test('메타 태그 검사', async ({ page }) => {
    console.log('\n=== 메타 태그 검사 ===')

    const description = await page.locator('meta[name="description"]').getAttribute('content')
    const title = await page.title()
    const lang = await page.locator('html').getAttribute('lang')

    console.log(`Title: ${title}`)
    console.log(`Description: ${description}`)
    console.log(`Description 길이: ${description?.length || 0}자`)
    console.log(`Language: ${lang}`)

    expect(title).toBeTruthy()
    expect(description).toBeTruthy()
    expect(description!.length).toBeGreaterThan(50)
    expect(lang).toBe('ko')

    console.log('✅ 메타 태그 정상')
  })

  test('시맨틱 구조 검사', async ({ page }) => {
    console.log('\n=== 시맨틱 구조 검사 ===')

    // 전체 HTML 소스 가져오기 (렌더링된 HTML이 아닌 서버 응답)
    const response = await page.request.get('/')
    const htmlSource = await response.text()

    const hasMain = htmlSource.includes('<main')
    const hasNav = htmlSource.includes('<nav')
    const hasHeader = htmlSource.includes('<header')
    const hasFooter = htmlSource.includes('<footer')

    console.log(`<main>: ${hasMain ? '✅' : '❌'}`)
    console.log(`<nav>: ${hasNav ? '✅' : '❌'}`)
    console.log(`<header>: ${hasHeader ? '✅' : '❌'}`)
    console.log(`<footer>: ${hasFooter ? '✅' : '❌'}`)

    expect(hasMain).toBe(true)
    expect(hasNav).toBe(true)
    expect(hasHeader).toBe(true)
    expect(hasFooter).toBe(true)

    // DOM에서 id 확인
    const mainId = await page.locator('main').getAttribute('id')
    console.log(`<main id>: ${mainId || '없음'}`)
    expect(mainId).toBe('main-content')

    const navId = await page.locator('nav').first().getAttribute('id')
    console.log(`<nav id>: ${navId || '없음'}`)
    expect(navId).toBe('navigation')

    console.log('✅ 시맨틱 구조 정상')
  })
})
