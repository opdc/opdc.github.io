# OPDC Redesign Design System v6

## Product direction

OPDC 리뉴얼 v6의 핵심은 `community + open technology + public trust + continuity`다. 화면마다 다른 장식을 추가하는 방식보다, **사람 → 프로젝트 → 기록 → 다시 참여**로 이어지는 탐색 흐름을 하나의 제품 경험으로 만든다.

## Visual language

- Canvas: `#F7F8FA`
- Surface: `#FFFFFF`
- Surface soft: `#F3F5F7`
- Ink: `#17191C`
- Muted: `#667085`
- Border: `#DCE1E7`
- Brand orange: `#F15A24`
- Inverse: `#14181F`
- Success/status: `#217A4B`

Orange는 브랜드 신호이며 넓은 배경색의 기본값이 아니다. 큰 면적은 neutral surface를 사용하고, orange는 kicker, current state, CTA edge, small emphasis에 사용한다.

## Typography

Pretendard Variable을 기본으로 한다. Hero는 강한 크기 대비를 허용하지만 작은 텍스트는 가독성을 우선한다.

- Hero: `clamp(44px, 6~7vw, 88px)`
- Section heading: 30~40px
- Card title: 18~24px
- Body: 15~17px / 1.65~1.82
- Metadata: 9~11px
- Korean heading: `word-break: keep-all`

## Spacing & shape

- Desktop section: 88px
- Mobile section: 56px, narrow 390px: 48px
- Radius: 10 / 14 / 18 / 22 / pill
- Shadow는 기본적으로 얕게, hover와 중요한 floating panel에만 강화한다.
- Border와 shadow를 동시에 과도하게 강조하지 않는다.

## V6 information architecture

### Home

`About → Community Pulse → Projects → Watch & Learn → People` 순서로 OPDC를 처음 방문한 사람이 정체성, 현재 활동, 결과물, 학습 자료와 사람까지 자연스럽게 이해하게 한다.

### People

목록은 얼굴과 역할을 빠르게 스캔할 수 있어야 하며, 상세에서는 프로필 → 역할 → 본문 → 이전/다음 리더로 이어진다. 인물 사진은 `4:5 + cover`를 기본으로 하여 불필요한 letterbox를 만들지 않는다.

### Projects

상태와 기술 맥락이 첫 화면에서 보이고, 상세에서 설명 → 대표 이미지 → 본문 → 인접 프로젝트로 탐색한다.

### Blog

목록에서 최신 글을 강조하고, 상세는 metadata → title → reading content → 이전/다음 글 순으로 읽기 흐름을 유지한다.

### Community

공지/세미나/자료실을 별개의 페이지처럼 느끼지 않도록 하나의 live index로 제공한다. 외부 원문 링크임을 명확히 표현한다.

### Archive pages

History, Partners, Releases, Compatibility는 단순 나열이 아니라 현재 활동과 다음 행동으로 연결해야 한다.

## Component rules

1. Orange is an accent, not a default section background.
2. Cards stay white on light neutral canvas.
3. Image wells use `surface-soft`.
4. Dark areas use charcoal inverse, not pure black.
5. Every major card or list item should expose a clear next action.
6. Detail pages provide adjacent-content navigation when meaningful.
7. Touch targets should be approximately 44px or larger.
8. Keyboard focus must remain visible.
9. Long Korean titles wrap by phrase; code/tables scroll horizontally on narrow screens.
10. Reduced-motion preference disables non-essential animation.

## Responsive checkpoints

Mandatory review widths:

- 360px
- 390px
- 430px
- 720px
- 900px
- 1280px+

Verify People photo crop, mobile menu, long titles, cards, tables/code, footer, and detail navigation at these widths.

## SEO / semantics

- Every page uses canonical, Open Graph and Twitter metadata.
- The shared layout exposes Organization JSON-LD.
- Main navigation uses semantic `nav`, detail navigation uses descriptive aria labels.
- External links open with safe `rel` attributes.

## Implementation hierarchy

`redesign.css` is the historical base. `color-system-v4.css` owns the neutral palette. `design-system-v5.css` now contains the global v6 token/polish layer for compatibility with existing imports. `section-v3.css` and `detail-v3.css` contain v6 page patterns while file names remain stable to avoid unnecessary migration risk.

## License / asset policy

External community sites may be researched for information architecture and common UX patterns only. Do not copy proprietary illustrations, photographs, icons, CSS, component source, or brand assets. Reuse OPDC-owned repository assets or verified compatible-license assets only, and record attribution when required.
