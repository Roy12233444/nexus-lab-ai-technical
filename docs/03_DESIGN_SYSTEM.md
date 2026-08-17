# 🏛️ NEXUS LAB AI — CANONICAL DESIGN SYSTEM SPECIFICATION (v1.0.0)

> **Status:** 🟢 LOCKED (Phase 02 Freeze Checkpoint)  
> **Philosophy:** Research Lab + Systems Architecture + Epistemic Honesty  
> **Rule:** _Components consume the design system; they never invent their own geometry, palette, or timing._

---

## 1. System Taxonomy & Architectural Layers

The Nexus Design System is structured into six mutually enforcing layers:

```text
                    NEXUS DESIGN SYSTEM
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
     VISUAL              SPATIAL             TEMPORAL
  (02A Tokens)        (02C Layout)        (02F Motion)
       │                   │                   │
       ├──────────────┬────┴──────┬────────────┤
       ▼              ▼           ▼            ▼
  (02B Type)       (02D UI)    (02E Evidence) ...
                  Primitives     Language
```

---

## 2. Visual Atoms & Tokens (`src/styles/variables.css`)

### Surfaces & Neutral Contrast

- `--nexus-bg-primary`: `#ffffff` (Clean technical base)
- `--nexus-bg-secondary`: `#f8fafc` (Subtle container / code block)
- `--nexus-bg-tertiary`: `#f1f5f9` (Neutral chip / pill track)
- `--nexus-text-primary`: `#0f172a` (Deep slate heading & high-contrast text)
- `--nexus-text-secondary`: `#334155` (Balanced body reading text)
- `--nexus-text-muted`: `#64748b` (Technical labels, overlines, metadata)
- `--nexus-border-default`: `#e2e8f0` (Precise geometric structural hairline)

### Geometry & Elevation

- Radii: `none` (0px), `sm` (4px), `md` (6px), `lg` (8px), `xl` (12px), `2xl` (16px), `full` (9999px)
- Shadows: Minimal elevations (`subtle`, `raised`, `floating`, `modal`)
- Stacking Layers (`z-index`): `base` (0) → `content` (10) → `sticky` (20) → `header` (30) → `navigation` (40) → `overlay` (50) → `modal` (60) → `tooltip` (70)

---

## 3. Typographic Hierarchy (`src/styles/typography.css`)

| Level          | Size / Fluid Scale                        | Line Height | Tracking  | Weight | Semantic Role                         |
| -------------- | ----------------------------------------- | ----------- | --------- | ------ | ------------------------------------- |
| **Display**    | `clamp(2.5rem, 5vw + 1rem, 3.75rem)`      | 1.05        | `-0.04em` | 600    | High-impact thesis statements         |
| **H1**         | `clamp(2rem, 4vw + 0.5rem, 3rem)`         | 1.10        | `-0.02em` | 600    | Page identity & primary headers       |
| **H2**         | `clamp(1.5rem, 2.5vw + 0.5rem, 1.875rem)` | 1.20        | `-0.02em` | 600    | Major research & engineering sections |
| **H3**         | `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)`  | 1.33        | `-0.02em` | 600    | Subsections & card headers            |
| **H4**         | `1.25rem` (20px)                          | 1.40        | `0em`     | 500    | Component titles & metric headers     |
| **Body Large** | `1.125rem` (18px)                         | 1.55        | `0em`     | 400    | Lead paragraphs & abstracts           |
| **Body**       | `1.000rem` (16px)                         | 1.50        | `0em`     | 400    | Standard technical reading prose      |
| **Body Small** | `0.875rem` (14px)                         | 1.42        | `0em`     | 400    | Compact annotations & descriptions    |
| **Meta Label** | `0.750rem` (12px)                         | 1.33        | `+0.25em` | 600    | Uppercase technical metadata          |
| **Code**       | `0.875rem` (14px Mono)                    | 1.42        | `0em`     | 400    | Monospace identifiers & snippets      |

---

## 4. Spatial Grammar & Layout Primitives (`src/styles/layout.css`)

### Canonical Container Hierarchy

1. **`.nexus-container-reading`**: `48rem` (768px) — Optimal line length for dense technical prose.
2. **`.nexus-container-narrow`**: `36rem` (576px) — Focused modal dialogs and briefing cards.
3. **`.nexus-container`**: `80rem` (1280px) — Standard structured content container.
4. **`.nexus-container-wide`**: `90rem` (1440px) — Expansive view for Architecture graphs & visualizers.

### Responsive Viewport Gutters

- Mobile: `16px` (`var(--nexus-space-4)`)
- Tablet (≥768px): `24px` (`var(--nexus-space-6)`)
- Desktop (≥1024px): `32px` (`var(--nexus-space-8)`)

### Grid & Vertical Rhythm

- Section rhythm: `.nexus-section-sm` (48px), `.nexus-section` (80px), `.nexus-section-lg` (112px).
- Grids: `.nexus-grid-2` (1 → 2 cols), `.nexus-grid-3` (1 → 2 → 3 cols), `.nexus-grid-4` (1 → 2 → 4 cols).

---

## 5. Core UI Primitives (`src/components/ui/`)

| Primitive           | Semantic Variants                                                                                  | Interactive / Accessibility Contracts                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Button**          | `primary`, `secondary`, `ghost`, `danger`                                                          | Focus rings, `disabled`, `isLoading` with `aria-busy` and spin indicator                 |
| **Card**            | `default`, `elevated`, `bordered`, `interactive`                                                   | Subcomponents: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| **Badge**           | `verified`, `implemented`, `experimental`, `hypothesis`, `default`, `outline`                      | Upper-case metadata tracking, high contrast, non-interactive tag                         |
| **StatusIndicator** | `verified`, `implemented`, `experimental`, `hypothesis`, `active`, `offline`, `paused`, `research` | `role="status"`, accessible `aria-label`, optional pulse animation                       |
| **Divider**         | `horizontal`, `vertical`, labeled separator                                                        | `role="separator"`, `aria-orientation`                                                   |
| **Loading**         | `sm`, `md`, `lg`, `fullscreen`                                                                     | `role="status"`, `aria-live="polite"`, `sr-only` fallback text                           |
| **Modal**           | `sm`, `md`, `lg`, `wide`                                                                           | `role="dialog"`, `aria-modal="true"`, Escape key listener, scroll lock, backdrop click   |
| **Tabs**            | `underline`, `pills`                                                                               | `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `role="tabpanel"`      |
| **Accordion**       | Single or multi-expand                                                                             | Button semantics, `aria-expanded`, `aria-controls`, `role="region"`                      |
| **Tooltip**         | `top`, `bottom`, `left`, `right`                                                                   | `role="tooltip"`, hover & focus triggers, layer token `--nexus-z-tooltip`                |

---

## 6. Epistemic Evidence Language (`src/types/evidence.ts`, `src/data/evidenceRegistry.ts`)

| Epistemic State    | Semantic Definition                                                  | Multi-Signal Icon | Visual Token                            |
| ------------------ | -------------------------------------------------------------------- | ----------------- | --------------------------------------- |
| **`VERIFIED`**     | Claim supported by documented proof and tests within defined scope.  | `CheckCircle2`    | Green (`--nexus-evidence-verified`)     |
| **`IMPLEMENTED`**  | Working engineering artifact demonstrated; pending broad validation. | `Wrench`          | Blue (`--nexus-evidence-implemented`)   |
| **`EXPERIMENTAL`** | Active research subject to measurement, tests, and refinement.       | `FlaskConical`    | Amber (`--nexus-evidence-experimental`) |
| **`HYPOTHESIS`**   | Theoretical conceptual model; explicit boundary of uncertainty.      | `HelpCircle`      | Purple (`--nexus-evidence-hypothesis`)  |

> **CRITICAL RULE:** Epistemic Evidence State (`EvidenceStatus`) is strictly decoupled from Runtime Operational State (`RuntimeStatus`). A capability can be `VERIFIED` while `OFFLINE`, or `ACTIVE` while `HYPOTHESIS`.

---

## 7. Temporal Motion System (`src/styles/animations.css`, `src/lib/motion.ts`)

- **Durations:** `instant` (75ms) → `fast` (150ms) → `normal` (250ms) → `slow` (400ms) → `deliberate` (600ms).
- **Easings:** `standard` `(0.4, 0, 0.2, 1)`, `emphasized` `(0.2, 0, 0, 1)`.
- **Framer Motion Token Variants:** `fadeInVariants`, `fadeUpVariants`, `fadeDownVariants`, `scaleInVariants`, `staggerContainerVariants`.
- **Reduced-Motion Mandate:** Comprehensive `@media (prefers-reduced-motion: reduce)` block overrides all animations and transitions to instantaneous.

---

## 8. Prohibited Patterns (Anti-Patterns)

1. ❌ **Arbitrary Geometry:** Never write hardcoded `px` or arbitrary `rem` values for margins, paddings, or widths when a `--nexus-space-*` or container class exists.
2. ❌ **Color-Only Cues:** Never communicate state solely via color; always pair with text labels, icons, and ARIA attributes.
3. ❌ **Animation Without Meaning:** Never animate purely for decorative flash. Animations must communicate state transitions or structural hierarchy.
4. ❌ **Layout Thrashing:** Animate only `opacity` and `transform` properties for transitions and reveals.
5. ❌ **Domain Coupling in Primitives:** UI primitives must never contain hardcoded domain knowledge about NALA, COSMOS, AMP, or RTA-GUARD.

---

## 9. Governance & Lock Boundary

The Phase 02 Design System is **LOCKED and FROZEN**.  
Subsequent phases (Phase 03 Website Shell, Phase 04 Homepage, Phase 06 Research, Phase 07 Evidence) must consume these contracts without modifying foundation tokens unless an explicit defect correction is approved through the audit protocol.
