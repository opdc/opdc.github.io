# OPDC Community Website Redesign — 2026

## Objective

Refresh `opdc.kr` around community activity, open platforms, projects, events, and participation rather than treating the site primarily as an organizational brochure.

## Current-state findings

- Stack: Astro 5, React 19, Tailwind CSS 4.
- Existing style foundation: `src/styles/global.css` already defines OPDC orange brand tokens (`brand-50` through `brand-900`), typography base rules, prose utilities, dark-mode pagination, and accessibility helpers.
- Existing layout components: `Header.astro`, `Footer.astro`, `BackToTop.astro`.
- Existing reusable UI: blog search, leaders carousel, video filtering, blog components.
- Current home page mixes an organization image, mission/hero copy, latest news, community feeds, videos, and leaders. The new structure should make community activity and contribution pathways the primary visual hierarchy.

## Recommended information architecture

1. Home
2. Community
   - Events
   - Leaders / Contributors
   - How to participate
3. Projects
   - Project directory
   - Project detail
4. Knowledge
   - Blog / News
   - Videos
   - Resources
5. OPDC
   - About
   - History
   - Partners
6. Compatibility / ecosystem tools

## Home page skeleton

### 01 — Hero / Hero 16

Headline concept:

> OPEN PLATFORMS. OPEN PEOPLE. OPEN FUTURE.

Composition:

- oversized editorial headline
- short Korean mission statement
- two primary actions: `프로젝트 탐색`, `커뮤니티 참여`
- right-side abstract network graphic generated with CSS/SVG only
- small live signal row: projects / events / contributors / releases

Avoid stock photos and externally sourced hero artwork.

### 02 — Community Pulse

A compact activity rail showing the latest:

- event
- project update
- article
- video
- announcement

The goal is to make the site feel alive immediately after the hero.

### 03 — Projects

Feature 3–6 OPDC projects using a grid with status, short purpose, repository link, and technology tags.

Prefer project-owned logos or text marks. Do not redraw third-party trademarks.

### 04 — Events

Upcoming event cards with date, format, location, topic, and CTA. A secondary archive link can expose previous community activities.

### 05 — Why OPDC

Three principles:

- Open Platform
- Open Source
- Open Community

This replaces long institutional copy with concise evidence-driven messaging.

### 06 — Community / People

Use contributor/leader photos already owned by OPDC. Add contribution themes instead of a purely ceremonial leadership presentation.

### 07 — Knowledge

Split latest technical writing, videos, and useful resources into a source-oriented layout.

### 08 — Join

Final CTA: participate in a project, attend an event, contribute content, or contact the community.

## Hero 16 design directions

### A. Signal Grid — recommended

A 16-column responsive grid. The headline spans 9 columns; a generated SVG network motif spans 7. Accent lines animate subtly based on scroll/hover.

### B. Open Stack

Layered cards represent people, projects, events, and knowledge. Cards overlap on desktop and flatten into a vertical sequence on mobile.

### C. Community Orbit

A central OPDC mark with contributor/project/event nodes orbiting it. Use deterministic CSS/SVG geometry, not an external illustration.

### D. Editorial Split

Large typographic statement on the left, a live “community signal” feed on the right. Best choice if the project wants a more institutional/credible visual tone.

## Design system direction

### Tokens

- Brand: existing OPDC orange scale remains the source of truth.
- Ink: neutral gray scale for text/backgrounds.
- Accent: use one supporting cool accent sparingly for technical/network motifs.
- Radius: medium cards, small controls, minimal decorative rounding.
- Motion: 150–250ms interaction transitions; avoid continuous decorative motion by default.

### Components to standardize

- `Button`
- `Badge`
- `SectionHeader`
- `Metric`
- `ProjectCard`
- `EventCard`
- `ActivityCard`
- `PersonCard`
- `LogoLockup`
- `Container`
- `Hero16`

### Layout rules

- Use a shared max-width container.
- Prefer 12/16-column grids over ad-hoc widths.
- Maintain consistent section spacing tokens.
- Keep interactive controls keyboard accessible and preserve the existing skip-link pattern.
- Support dark mode without creating a separate visual language.

## Community-site research

### Apache Software Foundation

ASF places mission first, then measurable impact, projects, incubating projects, participation, events, sponsors, and fresh content. This is a useful model for OPDC because it turns an organizational home page into a community entry point. ASF explicitly frames contribution as broader than code and highlights upcoming events and recent posts. Source: Apache homepage and events site.

### CNCF

CNCF treats the foundation site as an ecosystem hub with projects, events, blog, case studies, jobs, and community resources. Its site index also points users to a wider family of project/community sites. The important pattern for OPDC is strong cross-linking between projects, people, content, and events rather than isolated sections.

### Linux Foundation

Linux Foundation surfaces a project directory as a primary destination and maintains a dedicated community events layer. The useful pattern is a clear “trusted home” proposition followed by project discovery and a searchable/filterable event experience.

### OpenTelemetry

OpenTelemetry is a useful reference for technical-community communication: concise positioning, strong documentation/project discovery, and a content/news stream. The design lesson is to keep technical value visible without making the landing page read like a corporate brochure.

## Licensing / rights policy

1. Reference competitor sites for information architecture, hierarchy, interaction patterns, and visual principles only.
2. Do not copy competitor CSS, HTML, component code, icons, illustrations, photographs, logos, or branded graphics unless their license explicitly permits reuse and the required notices are preserved.
3. New decorative artwork for OPDC should be created in-house with CSS/SVG or generated from OPDC-owned assets.
4. Use the project's existing Pretendard setup. Pretendard is distributed under the SIL Open Font License 1.1.
5. Tailwind CSS is MIT licensed.
6. Lucide is ISC licensed. Use it for generic UI icons; do not use it as a source of brand marks.
7. Third-party project/company logos are treated as trademarks even when the surrounding project is open source. Keep them only where OPDC has a valid source/permission or where existing OPDC-owned assets already contain them.
8. When adding a new third-party asset, record its source URL, license, copyright holder, and whether attribution is required in `docs/design/asset-attribution.md`.
9. Prefer existing OPDC-owned assets in `public/img` for people, organization imagery, and community history.
10. Do not add stock images to the redesigned hero.

## Reference sources

- Apache Software Foundation: https://www.apache.org/
- Apache Events: https://events.apache.org/
- CNCF site index: https://www.cncf.io/all-cncf/
- CNCF blog: https://www.cncf.io/blog/
- Linux Foundation projects: https://www.linuxfoundation.org/projects
- Linux Foundation events: https://events.linuxfoundation.org/
- Linux Foundation community: https://community.linuxfoundation.org/
- OpenTelemetry: https://opentelemetry.io/
- Pretendard license: https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/dist/LICENSE.txt
- Tailwind CSS license: https://github.com/tailwindlabs/tailwindcss
- Lucide license: https://github.com/lucide-icons/lucide/blob/main/LICENSE
