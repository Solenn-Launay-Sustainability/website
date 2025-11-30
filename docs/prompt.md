You are a frontend generator.

I have provided you with a complete documentation file that describes every section, layout rule, behavior, content block, and UI requirement of a one-page website for a sustainability consultant.

Your task is to read the documentation carefully and use it as the *single source of truth* to generate the entire frontend implementation.

## TECH STACK REQUIREMENTS

You must build the project using:

* **Next.js (App Router)**
* **React + TypeScript**
* **Tailwind CSS**
* **shadcn/ui** (required)

**Important:**
Use shadcn/ui components whenever possible (Button, Card, Carousel, Accordion, Separator, Input, Textarea, Badge, etc.).

---

## DESIGN SYSTEM REQUIREMENTS

From the documentation file, you must:

* Extend the **shadcn theme** with:

  * my **custom color palette**
  * my **radius scale**
  * my **font variables** (`--font-sans`, `--font-serif`, `--font-mono`)
* Use Tailwind custom properties for:

  * colors
  * backgrounds
  * radii
  * shadows
  * typography

All sections must follow the design style:

> **“Calm, professional, modern, soft-rounded, ecological, elegant.”**

This means:

* soft but not childish corners,
* clean spacing,
* pastel ecological colors,
* minimal & calm layout,
* modern shadcn components.

### Responsive behavior

Implement ALL responsive rules described in the documentation:

* desktop grids
* mobile carousels (use `shadcn/ui` carousel)
* zoomable diagrams
* stacked layouts on mobile
* 2-column → 1-column transitions
* proper spacing and semantic headings

### Placeholder content

Use images placeholder for images, icons, and logos.
I will replace them later.

### Accessibility

Ensure semantic HTML:

* `<section>`, `<header>`, `<footer>`, `<nav>`, `<main>`
* alt texts
* correct heading hierarchy
* ARIA where relevant
