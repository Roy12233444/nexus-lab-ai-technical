# 🏛️ NEXUS LAB AI — CANONICAL WEBSITE SHELL SPECIFICATION (v1.0.0)

> **Status:** 🟢 LOCKED (Phase 03 Freeze Checkpoint)  
> **Architecture:** Head (03A Header) + Tail (03B Footer) + Body Frame (03C PageShell) + Adaptive Layer (03D Responsive System)  
> **Rule:** _The Shell provides the physics, landmarks, and spatial geometry; individual domain pages provide only content payload._

---

## 1. System Anatomy & Shell Boundary

The Website Shell establishes the persistent frame and navigation nervous system of the Nexus LAB AI technical website:

```text
                    GLOBAL APPLICATION (App.tsx)
                                 │
                   ┌─────────────┴─────────────┐
                   ▼                           ▼
            GLOBAL HEADER (03A)         GLOBAL FOOTER (03B)
             • Brand Identity            • Compressed Identity
             • Desktop Navigation        • Grouped Navigation
             • Mobile Drawer             • Legal & Milestones
             • Status Indicator          • System Metadata
                   │                           ▲
                   └─────────────┬─────────────┘
                                 ▼
                         PAGE SHELL (03C)
                   ┌───────────────────────────┐
                   │  • Skip-to-content Link   │
                   │  • <main id="main-content"│
                   │  • Breadcrumbs Component  │
                   │  • Composable PageHeader  │
                   │  • Container Modes        │
                   │  • <Section> Primitives   │
                   └─────────────┬─────────────┘
                                 ▼
                         PAGE CONTENT SLOT
                  (Future Domain Pages: Phase 04+)
```

---

## 2. Component Contracts & APIs

### 2.1 Header & Navigation (`src/components/layout/Header.tsx`, `Navigation.tsx`)

- **Landmark:** `<header role="banner">`
- **Stacking Layer:** Sticky `top-0`, `z-[var(--nexus-z-header)]` (30) with `backdrop-blur-md`
- **State Highlighting:** Active link state denoted via `aria-current="page"` and `--nexus-bg-tertiary`
- **Mobile Drawer:** Accessible `<div role="dialog" aria-modal="true">` with Escape key listeners, backdrop dismissal, and `z-[var(--nexus-z-navigation)]` (40).

### 2.2 PageShell Engine (`src/components/layout/PageShell.tsx`)

- **Landmark:** `<main id="main-content" role="main">`
- **Skip Navigation:** Accessible anchor `<a href="#main-content">` visible on keyboard focus
- **Container Modes:**
  - `reading`: `max-width: 768px` (`--nexus-max-width-reading`) for technical prose and monographs
  - `narrow`: `max-width: 576px` (`--nexus-max-width-narrow`) for focused panels and dialogs
  - `content`: `max-width: 1280px` (`--nexus-max-width-content`) for standard exploratory pages
  - `wide`: `max-width: 1440px` (`--nexus-max-width-wide`) for architectural graphs and canvas visualizers
  - `full`: `width: 100%` with fluid `--nexus-gutter` margins
- **Header Slot:** Composable `title`, `description`, `eyebrow`, `breadcrumbs`, `badge`, and `actions`.

### 2.3 Section Rhythm (`src/components/layout/Section.tsx`)

- **Spacing Modes:**
  - `none`: `py-0`
  - `sm`: 32px (mobile) → 48px (tablet/desktop)
  - `md`: 48px (mobile) → 64px (tablet) → 80px (desktop)
  - `lg`: 64px (mobile) → 88px (tablet) → 112px (desktop)
- **Surfaces:** `primary` (white), `secondary` (`#f8fafc`), `tertiary` (`#f1f5f9`).

### 2.4 Breadcrumbs Engine (`src/components/layout/Breadcrumbs.tsx`)

- **Landmark:** `<nav aria-label="Breadcrumb">`
- **Structure:** Ordered list (`<ol>`) with chevrons and wrapping protection (`flex-wrap`)
- **Terminal Node:** Explicit `aria-current="page"` on current route.

### 2.5 Footer & Legal/Meta (`src/components/layout/Footer.tsx`)

- **Landmark:** `<footer role="contentinfo" aria-label="Nexus LAB AI Footer">`
- **Grouped Categories:** Explore, Research Programs, Systems & Architecture (derived from `FOOTER_NAV_GROUPS`)
- **System Metadata:** Copyright year (2026), Technical License ("Nexus Technical Dossier"), Milestone Indicators (`01 LOCKED`, `02 LOCKED`, `03 LOCKED`).

---

## 3. Responsive & Overflow Defense Contracts (`src/styles/layout.css`, `globals.css`)

| Viewport Tier | Breakpoint        | Page Gutter                | Navigation Behavior     | Footer Layout            |
| :------------ | :---------------- | :------------------------- | :---------------------- | :----------------------- |
| **Mobile**    | `< 768px`         | `16px` (`--nexus-space-4`) | Mobile Hamburger Drawer | Stacked Single Column    |
| **Tablet**    | `768px – 1023px`  | `24px` (`--nexus-space-6`) | Compressed Desktop Nav  | 3-Column Navigation Grid |
| **Desktop**   | `1024px – 1439px` | `32px` (`--nexus-space-8`) | Full Nav + Status Chip  | 5-Column Navigation Grid |
| **Wide**      | `≥ 1440px`        | `32px` (`--nexus-space-8`) | Full Nav + Status Chip  | 5-Column Navigation Grid |

- **Overflow Defenses:**
  - `html, body { overflow-x: hidden; width: 100%; }`
  - `overflow-wrap: break-word;` for technical IDs, tokens, and URIs.
  - Zero horizontal scroll leakage tested from 320px to 1440px+.

---

## 4. Single Source of Truth for Routing (`src/lib/routes.ts`)

All shell navigation components (`Header`, `Navigation`, `MobileNavigation`, `Breadcrumbs`, `Footer`) derive their destinations from `src/lib/routes.ts`:

- `ROUTES`: Canonical URL path constants.
- `PRIMARY_NAV_ITEMS`: Global primary header destinations.
- `FOOTER_NAV_GROUPS`: Multi-column hierarchical pathways.

---

## 5. Freeze Rules & Extension Policy

### 🔒 Strictly Frozen (Do Not Modify for Domain Pages)

1. Do not introduce ad-hoc headers or footers inside page routes.
2. Do not invent custom maximum container widths outside the 5 canonical modes.
3. Do not bypass `src/lib/routes.ts` by hardcoding URLs.
4. Do not introduce alternative CSS frameworks or responsive engines.

### 🟢 Extensible (Phase 04+ Feature Growth)

1. Add new domain pages inside `src/pages/` consuming `<PageShell>`.
2. Assemble rich content sections inside `<Section>`.
3. Register new routes in `ROUTES` and update `PRIMARY_NAV_ITEMS` or `FOOTER_NAV_GROUPS` if global IA expands.
