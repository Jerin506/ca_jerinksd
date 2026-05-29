# Jerin Kurian & Associates — Website

Professional marketing website for **Jerin Kurian & Associates, Chartered Accountants** — a CA firm based on Bannerghatta Road, Bangalore.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and deployed on [Netlify](https://www.netlify.com).

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
# Output → dist/
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `PUBLIC_PLAUSIBLE_DOMAIN` | No | If set, enables Plausible Analytics on the site. Example: `cajerinkurian.com` |

## Project Structure

```
src/
├── components/     # Reusable UI components (Header, Footer, etc.)
├── layouts/        # BaseLayout with SEO head
├── lib/            # Business constants, WhatsApp helper, SEO utilities
├── pages/          # All routes (Home, About, Services, Contact, etc.)
└── styles/         # Global CSS with Tailwind v4 theme tokens
public/             # Static assets (images, favicon, robots.txt)
```

## How to Update Content

### Swap the founder photo
Replace `public/images/about/founder.jpg` (480×480, JPG or WebP, <60 KB). The placeholder SVG will be replaced automatically.

### Swap the logo
Replace `public/logo.svg` with the real logo SVG. The header and footer reference this file.

### Update the OG image
Replace `public/og/og-default.png` (1200×630 PNG, <200 KB) with the firm's branded version.

### Edit business info
All business data (address, phone, hours, ICAI FRN) is in `src/lib/business.ts`. Edit this file and it updates everywhere.

### Edit services content
All service data (deliverables, FAQs, process steps) is in `src/lib/services.ts`.

## Pre-Launch Checklist

- [ ] Confirm WhatsApp number formatting (`919164557027`)
- [ ] Confirm business hours (currently Mon–Sat 10 AM – 7 PM)
- [ ] Add ICAI Firm Registration Number (FRN) in `src/lib/business.ts`
- [ ] Replace founder placeholder photo
- [ ] Replace logo SVG
- [ ] Replace OG image
- [ ] Get privacy policy and terms reviewed by a lawyer
- [ ] Supply real founder bio (2–4 sentences)
- [ ] Optionally add client testimonials

## Deploy to Netlify

1. Push this repo to GitHub
2. Connect the repo in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add custom domain: `cajerinkurian.com`
6. Enable HTTPS (automatic with Netlify)

### Custom Domain DNS

**Option A — Netlify DNS:** Point your domain's nameservers to Netlify.

**Option B — External DNS:**
- `CNAME` record: `www` → `<site>.netlify.app`
- `A` records for apex to Netlify's load balancer IPs
- Force HTTPS, redirect `www` → apex (`cajerinkurian.com` is canonical)

## Tech Stack

- **Astro 5.x** — Static site generator
- **Tailwind CSS v4** — Utility-first CSS via Vite plugin
- **Lucide Icons** — SVG icons (inlined, tree-shaken)
- **Self-hosted fonts** — Inter (body) + Plus Jakarta Sans (headings)
- **@astrojs/sitemap** — Auto-generated sitemap
