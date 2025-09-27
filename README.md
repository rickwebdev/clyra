# Clyra Studios - WordPress Agency Website

A luxury, dark-themed WordPress agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Luxury Design**: Dark theme with premium styling and smooth animations
- **MDX Blog**: Ready-to-use blog system with sample content
- **WordPress Ready**: CMS abstraction layer for easy WordPress integration later
- **Performance**: Optimized for Core Web Vitals and SEO

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `src/content/blog/` - MDX blog posts
- `src/lib/` - Utility functions and CMS abstraction

## Key Pages

- **Homepage** (`/`) - Hero, services grid, trust signals, CTAs
- **Blog** (`/blog`) - MDX-powered blog with sample post
- **Services** (`/services`) - Detailed service offerings (to be built)
- **Migrations** (`/migrations`) - Migration service page (to be built)
- **Comparisons** (`/comparisons`) - WordPress vs other platforms (to be built)

## Next Steps

1. Add `/services` and `/migrations` pages
2. Create `/comparisons` index with platform comparisons
3. Add `/hosting` page with DreamHost affiliate integration
4. Build `/site-audit` lead magnet form
5. Add FAQ schema blocks for SEO
6. Integrate WordPress headless CMS via WPGraphQL

## Design System

- **Colors**: Dark base with accent blue (#8aa4ff)
- **Typography**: Inter + Manrope font combination
- **Components**: Card-based layout with soft shadows
- **Buttons**: Primary (white) and ghost (transparent) variants