# OPDC Redesign v6 QA Checklist

## Scope

This checklist applies only to `/redesign/` and its subroutes. The legacy `/` site must remain untouched.

## Core routes

- [ ] `/redesign/`
- [ ] `/redesign/about/`
- [ ] `/redesign/projects/`
- [ ] all `/redesign/projects/:slug/`
- [ ] `/redesign/community/`
- [ ] `/redesign/leaders/`
- [ ] all `/redesign/leaders/:slug/`
- [ ] `/redesign/blog/`
- [ ] all `/redesign/blog/:slug/`
- [ ] `/redesign/history/`
- [ ] `/redesign/partners/`
- [ ] `/redesign/releases/`
- [ ] `/redesign/compatibility/`

## Responsive

Test at 360, 390, 430, 720, 900 and 1280px+.

- [ ] no horizontal page overflow
- [ ] mobile menu opens, traps focus, closes with Escape
- [ ] touch targets are approximately 44px+
- [ ] long Korean titles wrap without layout breakage
- [ ] code and tables scroll inside content rather than expanding viewport
- [ ] footer remains usable on mobile
- [ ] People cards remain two-column on normal mobile widths
- [ ] People photos fill 4:5 frame without letterbox whitespace
- [ ] adjacent navigation cards stack on narrow screens

## Content flows

- [ ] Home → About / Projects / Community / People links stay inside redesign
- [ ] Leader detail previous/next links resolve
- [ ] Project detail previous/next links resolve
- [ ] Blog detail previous/next links resolve
- [ ] Community external links clearly open original source
- [ ] Compatibility PDF links resolve
- [ ] Partner external links use safe rel attributes

## Visual system

- [ ] cool-neutral background and white surfaces are consistent
- [ ] orange remains an accent rather than a large-area fill
- [ ] inverse sections use charcoal, not pure black
- [ ] card radius and elevation are consistent
- [ ] hover state never causes layout shift beyond intentional translate
- [ ] focus ring is visible on all keyboard controls
- [ ] image wells do not use legacy warm beige

## SEO / accessibility

- [ ] canonical URL present
- [ ] Open Graph metadata present
- [ ] Twitter card metadata present
- [ ] Organization JSON-LD present
- [ ] one meaningful page-level h1
- [ ] images have useful alt text, decorative duplicates use empty alt
- [ ] primary nav has aria label
- [ ] detail navigation has descriptive aria label
- [ ] reduced-motion preference disables non-essential movement

## Build / deploy

- [ ] Astro build succeeds
- [ ] `/redesign/index.html` exists in Pages artifact
- [ ] all generated redesign detail routes exist in artifact
- [ ] GitHub Pages deploy succeeds
- [ ] live `https://opdc.kr/redesign/` serves the new artifact
- [ ] live mobile People page visually verified after cache refresh
