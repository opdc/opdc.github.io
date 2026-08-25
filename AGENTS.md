# AI / Coding Agent Project Guidelines

## Purpose

This repository is the OPDC public website. AI-assisted work may be performed with free GPT, ChatGPT/Codex, or other available coding agents, but changes must be conservative and reviewable.

## Production safety

- Do not modify the existing production homepage or existing routes when working on the 2026 redesign.
- Keep redesign work isolated under `src/components/hero/`, `src/styles/redesign-2026.css`, `src/pages/redesign.astro`, and `docs/design/` until the redesign is explicitly approved.
- The current site and `/redesign` preview must coexist during the review period.
- Do not replace `/` with the redesign until a separate migration change is approved.
- Do not delete, rename, or mass-reformat unrelated files.

## Design direction

- Treat `src/styles/global.css` as the existing design foundation; extend rather than duplicate its brand tokens.
- Prefer reusable Astro components and shared layout tokens over page-specific styling.
- Maintain responsive behavior, dark mode, keyboard navigation, skip links, focus states, and semantic HTML.
- Prefer original CSS/SVG geometry for decorative graphics.
- Reuse OPDC-owned assets before introducing external assets.

## AI-friendly workflow

- Start by inspecting the current implementation before editing it.
- Make small, logically grouped commits.
- Do not assume an unfamiliar dependency, API, asset, or license is safe; verify it before adding it.
- Avoid introducing large generated files or unnecessary dependencies.
- When context or token limits are tight, preserve correctness and scope isolation rather than attempting broad refactors.
- Free GPT usage is expected to be sufficient for documentation, design exploration, small UI components, and incremental fixes; split larger work into independently reviewable changes.
- Never claim a build, test, deployment, or visual review was performed unless it actually was.

## Licensing and third-party assets

- Competitor/community sites may be used for information architecture and UX research, not copied source code or artwork.
- Do not copy external HTML, CSS, JavaScript, illustrations, screenshots, photos, icons, or branded graphics without explicit reuse rights.
- For every new third-party asset, record source, license, copyright holder, and attribution requirements in `docs/design/asset-attribution.md`.
- Treat software licenses and trademark/brand permissions as separate concerns.
- Prefer dependencies already present in `package.json`.

## Validation

Before proposing a redesign change:

1. Check that the existing production routes remain untouched unless the task explicitly calls for a migration.
2. Check changed-file scope with the git diff/PR file list.
3. Run the available build/test/lint commands when the environment allows it.
4. If validation cannot be run because of environment limitations, state the limitation explicitly.
5. Check mobile and dark-mode implications for UI changes.

## Review / merge policy

- Redesign preview work should land behind `/redesign` first.
- Production migration happens only after the new design has been reviewed and approved.
- Prefer a separate PR for the final switch from the existing homepage to the redesign.
