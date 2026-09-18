# Athenisec Compliance Website

## Brand
- Company: Athenisec LLC — cybersecurity compliance solutions for SMBs in regulated industries (helps businesses manage cybersecurity governance and meet regulatory requirements without building expensive in-house teams).
- Primary color: `#002881` (deep navy blue) — used for all buttons, links, and accents.
- Font: **Inter**, sans-serif (e.g. 48px for headings, per design specs given section-by-section).
- Tone: clean, professional, trust-focused.

## Stack
- Next.js + TypeScript + Tailwind CSS
- Fully responsive, mobile-first
- Consistent button styles/states, following a design system (e.g. "white button" vs "secondary button" — variants are named by the user per component, ask if unclear)

## Navigation structure
- Home
- About
- Who We Serve
  - Health Tech
  - Enterprise SaaS
  - B2B SaaS
  - Fintech
- Frameworks
  - PCI (PCI DSS)
  - HIPAA
  - SOC 2
  - ISO 27001
  - GDPR
  - CMMC 2
- Case Studies

## Workflow
- Build the **homepage first**, section by section (nav bar, hero, etc.), then reuse the same styling/patterns for the rest of the site.
- The user pastes design specs (screenshots/descriptions) section-by-section and provides the content — build components as described, don't invent content or layout beyond what's given.
- Wait for the next spec before building ahead.

## Design system
- Fonts: **Inter** for headings (`font-heading` utility, h1–h4), **Poppins** for body/UI text (site default `font-sans`).
- Type scale:
  - **H1 / hero headline**: `font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em]` — reference size for "big" headings; don't go smaller for a page's main headline.
  - **H2/H3 (section/card headings)**: `font-heading font-medium tracking-[-0.03em]`, sized down from the H1 (e.g. `text-3xl sm:text-4xl` for section headings, `text-xl` for card titles).
  - **Body / paragraph text**: flat `text-base` (16px) — no responsive bump, confirmed by the user after an earlier 18px pass was reverted.
- Buttons: `rounded-full` (pill, 100% radius), generous padding (`px-7 py-4` for hero-level CTAs, `px-5 py-2.5` for nav-level), `font-medium`.
  - Primary: `bg-brand text-white hover:bg-[#001d61]`
  - Secondary: `bg-gray-100 text-gray-900 hover:bg-gray-200` (soft fill, not outline)
- Logo strips / certification badges: fixed height (`h-9 sm:h-10`), `w-auto`, `opacity-80 grayscale hover:opacity-100`.
- Card grids (e.g. bento layouts): keep all cards visually uniform (`border border-gray-100 bg-gray-50 rounded-3xl p-8`) — the user rejected differentiating some cards with a navy/colored background; consistency across a card set is preferred over highlighting a subset.

## Status
- Homepage in progress: Preloader, Header (nav), and Hero built. See `components/`.
- Hero currently uses placeholder text/images pending final copy — confirm before treating as final.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
