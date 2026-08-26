# OPDC Redesign Design System v4

## Direction

The redesign keeps OPDC orange as the brand signal, but removes the heavy beige/black editorial cast that made the UI feel muddy. The new system uses cool neutral surfaces, softer borders, and charcoal text so content, photos, and partner logos read more naturally.

## Core colors

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

## Usage rules

1. Orange is an accent, not a background default. Reserve it for kickers, active state, CTA, status dots, and small emphasis.
2. Main page backgrounds use cool neutral canvas; cards stay white.
3. Avoid warm beige fills in cards and image frames. Use `surface-soft` instead.
4. Dark sections use charcoal, not pure black, to reduce visual harshness.
5. Body text uses `ink`; supporting text uses `muted`.
6. Border colors should stay neutral and consistent across cards, navigation, and detail panels.
7. Preserve WCAG-friendly contrast for body text and interactive elements.

## Token hierarchy

Use CSS variables from `redesign.css` instead of page-local hex colors whenever possible. Section/detail styles should reference tokens such as `--paper`, `--paper-2`, `--surface`, `--surface-soft`, `--ink`, `--muted`, `--line`, `--line-dark`, `--orange`, `--orange-dark`, `--orange-soft`, and `--inverse`.
