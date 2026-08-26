# OPDC Redesign Design System v5

## Direction

OPDC의 리뉴얼은 `community + open technology + public trust`를 핵심 인상으로 둔다. 기존의 warm beige / pure black editorial 조합은 제거하고 cool neutral canvas, white surface, charcoal typography를 기본으로 사용한다. OPDC Orange는 브랜드 신호로 남기되 큰 면적을 채우는 색이 아니라 CTA, kicker, active state와 작은 강조에만 사용한다.

## Color tokens

- Canvas: `#F7F8FA`
- Subtle canvas: `#EEF1F4`
- Surface: `#FFFFFF`
- Surface soft: `#F3F5F7`
- Ink: `#17191C`
- Muted: `#667085`
- Border: `#DCE1E7`
- Border strong: `#C7CED8`
- Brand orange: `#F15A24`
- Brand orange hover: `#D94A17`
- Brand soft: `#FFF0E9`
- Inverse: `#14181F`
- Inverse muted: `#AAB2BD`
- Success/status: `#217A4B`

## Typography

Pretendard Variable을 한국어/영문 공통 기본 서체로 사용한다. 큰 Hero는 강한 크기 대비를 허용하지만 본문과 상세 페이지에서는 읽기 흐름을 우선한다. 제목은 `word-break: keep-all`, 본문은 1.7~1.85 line-height를 기준으로 한다. 과도한 900+ weight와 지나친 negative tracking은 작은 UI 텍스트에서 피한다.

## Shape and elevation

- Small radius: 10px
- Default card radius: 14px
- Large panel radius: 18px
- Pills: 999px
- 일반 카드는 얕은 shadow만 사용하고 hover 시에만 elevation을 높인다.
- Border와 shadow를 동시에 과도하게 강조하지 않는다.

## Spacing

- Desktop section spacing: 88px
- Mobile section spacing: 56px
- 콘텐츠 그룹 내부 간격은 8/12/16/24/32 계열을 우선한다.
- 모바일에서 데스크톱의 큰 여백을 단순 축소하지 말고 콘텐츠 우선순위에 맞춰 재배치한다.

## Component rules

1. Orange is an accent, not a default section background.
2. Main canvas uses cool neutral; content cards remain white.
3. Image frames and partner/logo wells use `surface-soft`, never warm beige.
4. Dark sections use charcoal `inverse`, not pure black.
5. Body text uses `ink`; supporting copy uses `muted`.
6. Primary CTA may use orange. Secondary CTA uses white/neutral surface with border.
7. Community join/promotional blocks use inverse charcoal to avoid excessive orange.
8. Project cards remain light on mobile as well as desktop; mobile must not switch arbitrarily to black cards.
9. Status indicators use semantic colors where possible rather than brand orange.
10. Focus rings remain clearly visible and keyboard navigation must be preserved.

## Responsive rules

- Breakpoints currently follow existing redesign CSS: 900/720px with narrow-device adjustments around 390px.
- People images use contained portrait frames on mobile so faces are not cropped.
- Long Korean titles should wrap by phrase (`keep-all`) and list titles may clamp only where the surrounding component provides another path to the full content.
- Touch targets should remain approximately 44px or larger for primary controls.

## Implementation hierarchy

`redesign.css` provides the historical base component structure. `color-system-v4.css` owns the neutral color palette. `design-system-v5.css` is the final global polish layer for typography, spacing, shape, elevation and cross-page consistency. New redesign work should use tokens rather than introduce page-local hex colors.

## License / asset policy

Design references from other communities are for pattern research only. Do not copy proprietary illustrations, photographs, icons, CSS, component source, or brand assets. Reuse only OPDC-owned/repository assets or assets with a verified compatible license, and record attribution when the license requires it.
