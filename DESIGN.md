# Design System

Below is a concrete design system for the portfolio. It is built for a contemporary classical / avant-garde composer: serious, editorial, intimate, and slightly experimental.

## Core Idea

The visual language should feel like a cross between:
- a concert program
- an artist monograph
- a contemporary score cover

It should be elegant, structured, and warm, with a small amount of tension and asymmetry.

## Brand Tone

- Serious, not corporate
- Feminine through sensitivity and refinement, not through cliche
- Contemporary, but not trendy
- Artistic, but still readable and restrained

## Fonts

Primary serif:
- `Cormorant Garamond`

Secondary sans:
- `IBM Plex Sans`

Optional monospace for metadata, dates, and archival labels:
- `IBM Plex Mono`

Usage:
- Composer name, page titles, section headings: `Cormorant Garamond`
- Navigation, paragraphs, buttons, filters, cards: `IBM Plex Sans`
- Dates, year markers, archival labels, footer microcopy: `IBM Plex Mono`

Fallbacks:

```css
--font-serif: "Cormorant Garamond", "Times New Roman", serif;
--font-sans: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
--font-mono: "IBM Plex Mono", "Courier New", monospace;
```

## Color System

Use warm neutrals and muted accents.

```css
:root {
  --color-ink: #16181d;
  --color-midnight: #202735;
  --color-graphite: #2d3442;

  --color-paper: #f4f0e8;
  --color-parchment: #e8e1d4;
  --color-mist: #d8d1c6;

  --color-gold: #b59a5c;
  --color-plum: #6e596d;
  --color-rose-clay: #a67c7a;
  --color-sage-smoke: #7e8a7a;

  --text-primary-dark: #f3eee6;
  --text-secondary-dark: #c9c0b5;

  --text-primary-light: #1b1b1a;
  --text-secondary-light: #5e5a55;

  --border-soft: rgba(94, 90, 85, 0.18);
  --border-strong: rgba(22, 24, 29, 0.3);

  --shadow-soft: 0 12px 30px rgba(14, 16, 20, 0.08);
  --shadow-deep: 0 20px 60px rgba(10, 12, 16, 0.22);
}
```

## Color Roles

- Main background: `--color-ink`
- Main panel background: `--color-paper`
- Dark UI areas: `--color-midnight`
- Borders/dividers: `--border-soft`
- Main accent: `--color-gold`
- Secondary accent: `--color-plum`

## Typography Scale

```css
:root {
  --fs-display: clamp(3rem, 6vw, 5.5rem);
  --fs-h1: clamp(2.2rem, 4vw, 3.6rem);
  --fs-h2: clamp(1.7rem, 2.5vw, 2.4rem);
  --fs-h3: clamp(1.25rem, 2vw, 1.6rem);

  --fs-body-lg: 1.125rem;
  --fs-body: 1rem;
  --fs-sm: 0.925rem;
  --fs-xs: 0.78rem;

  --lh-display: 0.95;
  --lh-heading: 1.05;
  --lh-body: 1.75;
  --lh-tight: 1.35;

  --tracking-wide: 0.08em;
  --tracking-wider: 0.16em;
}
```

Rules:
- Serif headings should have tight line-height
- Body text should be relaxed and airy
- Mono labels should use uppercase or small caps feel with letter-spacing

## Spacing

Use a restrained editorial rhythm.

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
}
```

Layout widths:

```css
:root {
  --content-narrow: 42rem;
  --content-body: 58rem;
  --content-wide: 74rem;
  --sidebar-width: 16rem;
}
```

## Radii and Borders

Avoid overly soft UI.

```css
:root {
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}
```

Use:
- cards: `0.25rem` or `0.5rem`
- pills only where needed
- thin borders everywhere, not heavy fills

## Textures and Surfaces

- Dark sections should feel velvety, not flat black
- Light sections should feel like paper, not app-white
- Use subtle gradients sparingly

Suggested backgrounds:

```css
--bg-dark-surface: linear-gradient(180deg, #202735 0%, #181c24 100%);
--bg-paper-surface: linear-gradient(180deg, #f4f0e8 0%, #efe8dc 100%);
```

## Motion

Motion should be slow and quiet.
- Fade/slide: `220ms` to `320ms`
- No bounce
- Hover transitions only on color, border, and transform of 1-2px max

```css
:root {
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 180ms;
  --dur-med: 260ms;
  --dur-slow: 360ms;
}
```

## Component Rules

## Navbar

- Background: `--color-midnight`
- Title in serif, larger than nav items
- Nav links in sans or mono small caps
- Hover state: underline or thin bottom rule in gold
- Active link: slightly brighter text plus gold underline

Recommended feel:
- no chunky rounded selected pills
- no heavy button-style nav

## Hero / Home Page

- Full dark background
- Portrait remains monochrome and dominant
- Intro text sits in a parchment or translucent midnight panel
- Use one thin vertical gold rule near the text
- Large nameplate, generous margins

Composition:
- image occupies 55-65%
- text panel occupies 30-35%
- allow asymmetry

## Sidebar

- Dark midnight background
- Section title in serif
- Year list in mono
- Hover state: soft gold text or left rule
- Active year: gold marker or slim plum background wash

Avoid large flat hover blocks.

## Works Page

- Main background: `--color-paper`
- Intro text narrower and more editorial
- Filters arranged like tags from a printed catalogue
- Timeline dividers feel like score systems
- Work cards should look like archival sheets

## Work Cards

- Background: slightly warmer than page or same paper with subtle shadow
- Border: thin and quiet
- Title in serif
- Metadata in mono
- Instrumentation and description in sans
- Increase spacing between sections
- Video/button row should be subdued, not CTA-heavy

## Filter Pills

Inactive:
- paper/plaster tone
- text in `--text-secondary-light`
- border in `--border-soft`

Active:
- `--color-plum` background
- light text
- slight shadow

Hover:
- border darkens or gold tint appears

## Buttons

Primary:
- dark ink background
- light text
- thin gold border on hover

Secondary:
- transparent/paper background
- dark border
- dark text

Avoid generic gray button styling.

## Footer

- Dark background, consistent with navbar
- Typography smaller and more monographic
- Labels in mono
- Links understated
- Can use subtle column dividers or score lines

## Iconography

- Thin, quiet icons
- Avoid bright brand-color icon fills
- Social icons should be monochrome or muted ivory/gold

## Decorative Language

Use a few recurring motifs:
- thin score-like horizontal rules
- small mono labels
- occasional offset blocks
- subtle linework
- asymmetry in layout, symmetry in typography

Avoid:
- ornamental flourishes
- loud gradients
- oversized rounded shapes
- default Tailwind look

## Tailwind Token Mapping

If you want this codified cleanly, use CSS variables and map Tailwind utilities around them.

Example base styles:

```css
body {
  font-family: var(--font-sans);
  background: var(--color-ink);
  color: var(--text-primary-dark);
}

h1, h2, h3, .font-display {
  font-family: var(--font-serif);
  color: inherit;
}

.mono-label {
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
}
```

## Page-by-Page Application

## Home

- Background: ink
- Hero text panel: midnight or parchment, depending on contrast with photo
- Large serif title
- Quote or intro in narrower measure
- Footer retained dark, but refined

## Works

- Background: paper
- Sidebar: midnight
- Main text: light-surface text colors
- Cards: paper with soft border
- Filters: muted plum / parchment system
- Year marker: mono with gold-outlined capsule or score marker

## Practical Theme Summary

If implemented well, the site should read as:
- `midnight + paper + gold`
- `serif + mono + clean sans`
- `editorial composition + archival structure`
- `minimal but not sterile`

## Implementation Order

1. Add global CSS variables for fonts, colors, spacing, shadows.
2. Update navbar and footer to the new dark theme.
3. Restyle home hero and text panel.
4. Restyle works page background, sidebar, filters, and cards.
5. Add shared utility classes for labels, dividers, and buttons.
6. Polish hover/motion states last.

If you want, I can take the next step and implement this design system in the codebase, starting with global tokens and then applying it to `Home` and `Works`.
