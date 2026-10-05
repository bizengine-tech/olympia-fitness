# Olympia Fitness — Website

A multi-page Next.js storefront for Olympia Fitness (commercial gym equipment).
No payment gateway — every enquiry (single product or full cart) ends in a
pre-filled WhatsApp message to the business number.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

This project is configured as a static export for direct folder upload:

1. Run `npm install` and then `npm run build` in the project folder.
2. Create a new project at https://vercel.com/new.
3. Upload the generated `out` folder, not the source project folder.
4. Deploy with the default static settings.

No environment variables are required for the current demo. Vercel will run
the build automatically when the source project is connected through Git or the
Vercel CLI. For dashboard folder upload, upload the generated `out` folder.

## What's here

- **/** — Homepage (hero, category tiles, new arrivals, why-us, trust strip, gallery, closing CTA)
- **/products** — Full catalog with category filter tabs + Load More
- **/products/[slug]** — Product detail (gallery, buy panel, spec tabs, related products)
- **/cart** — Enquiry list → customer details → "Send Enquiry via WhatsApp"
- **/company** — About / stats / installations
- **/contact** — Contact details + a form that also opens WhatsApp

## Things to swap before this goes live

1. **Images** — `lib/images.js` hotlinks free-license Unsplash photos chosen to
   match the "dark, industrial" brand direction. Swap the photo IDs there for
   real Olympia Fitness product/installation photography once available —
   nothing else needs to change.
2. **WhatsApp number** — set in `lib/whatsapp.js` (`WHATSAPP_NUMBER`). Currently
   `919058858077`.
3. **Product data** — `lib/products.js` is static/hardcoded (15 sample products
   across 5 categories) so this runs with zero backend. Per the earlier
   quotation, the real build wires this to Supabase with the client-facing
   admin panel (add/edit/delete products, image upload, stock toggle, etc.) —
   this repo is the front-end only, to review structure and design first.
4. **Cart persistence** — currently browser `localStorage` only (per-device,
   not shared). Fine for a demo; the Supabase version can log enquiries
   server-side too, as agreed.
5. **Fonts** — Bebas Neue (display) + Inter (body), loaded via `next/font/google`.

## Stack

Next.js 14 (App Router), React 18, Tailwind CSS, lucide-react icons.
Plain JavaScript, no TypeScript.
