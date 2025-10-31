# Intervue Assignment

This repository is a small Next.js app (UI assignment) that demonstrates a collection of React components and sections for a marketing-style site. The code implements a basic homepage layout with a navbar, product cards, a resources grid, a security/features section, and a testimonial / proof-of-concept section.

## What I implemented

- A responsive navigation bar with mobile hamburger menu (`components/Navbar.tsx`).
- A security/features section with multiple cards and icons (`components/SecurityAsTopPriority.tsx`).
- A products grid made of reusable cards (`components/ProductSection.tsx` + `components/ProductCard.tsx`).
- A technical resources section with a searchable header and card grid (`components/TechnicalInterviewResource.tsx`) using data from `data/GuideData.tsx`.
- A reusable guide card component used to render the resources (`components/GuideCard.tsx`).
- A testimonial / proof-of-concept section showing an image and quote (`components/ProofOfConcept.tsx`).
- A small UI accordion wrapper using Radix UI primitives (`components/ui/accordion.tsx`).
- A small `lib/utils.ts` (present in the repo) for shared helpers used across components.
- Layout and global fonts setup in `app/layout.tsx` (uses Google font Sora via `next/font/google`).

## Key files and purpose

- `app/layout.tsx` — Root layout, loads the Sora font, and renders the `Navbar` and page content.
- `app/page.tsx` — The homepage entry (edit this to change page content).
- `components/Navbar.tsx` — Top navigation with desktop links and mobile menu.
- `components/SecurityAsTopPriority.tsx` — Security/feature cards and layout.
- `components/ProductSection.tsx` — Section that maps product data to `ProductCard`.
- `components/ProductCard.tsx` — Reusable product card (image + title + description + link).
- `components/TechnicalInterviewResource.tsx` — Search bar + grid of `GuideCard` components.
- `components/GuideCard.tsx` — Small card used to render each guide/resource.
- `data/GuideData.tsx` — Static array of guide/resource objects used by `TechnicalInterviewResource`.
- `components/ProofOfConcept.tsx` — Testimonial / visual proof-of-concept section.
- `components/ui/accordion.tsx` — Radix UI accordion wrapper used for expandable content.
- `lib/utils.ts` — Helper utilities (project-specific helpers).
- `public/` — Static assets. For example, `public/imageassignment.png` is used by the proof-of-concept section.

## Technologies and notable versions

- Next.js 16 (app router)
- React 19
- TypeScript
- Tailwind CSS (v4 configured)
- lucide-react for icons
- Radix UI (`@radix-ui/react-accordion`) for accessible primitives

These versions are defined in `package.json`.

## How to run (Windows PowerShell)

1. Install dependencies (from the repo root):

```powershell
npm install
```

2. Run the development server:

```powershell
npm run dev
```

3. Open the site in your browser:

Open http://localhost:3000

Notes:
- The project expects typical Next.js development. If you use `pnpm` or `yarn`, replace the `npm` commands accordingly.

## How to visually verify components

- Navbar: visible at the top on every page. On narrow screens, click the hamburger to open the mobile menu.
- Products: visit the homepage and find the "Explore more products" section rendered by `ProductSection`.
- Resources grid: the "Technical Interview Resources" section shows a search input and a grid of `GuideCard` components. The sample data is in `data/GuideData.tsx`.
- Security section: the cards (Security, Compliances, Intervue for Startups/Enterprises) are in `components/SecurityAsTopPriority.tsx` and should appear in their own section.
- Proof-of-concept / testimonial: a left image with overlay text and right-side quote is implemented in `ProofOfConcept.tsx` and uses `public/imageassignment.png`.

## Assets

- Static images and assets live in the `public/` folder. Example used in the project: `public/imageassignment.png`.

## Linting & Scripts

Main scripts (see `package.json`):

- `npm run dev` — Run the dev server.
- `npm run build` — Build production assets.
- `npm run start` — Start the production server.
- `npm run lint` — Run ESLint.

## Notes, assumptions & next steps

- Fonts and global styles are set up in `app/layout.tsx` and `app/globals.css`.
- The project uses Tailwind CSS utilities; if styles don't appear, ensure Tailwind is installed and configured (it is included in `devDependencies`).
- Small improvements you may want next: add unit/component tests, wire up search functionality, and add storybook for visual testing.

## Author

Done by Sanyam Pandey — this README documents the components and structure implemented in the assignment.
