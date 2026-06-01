# Belle Ame Salon Website

A modern, premium salon website for Belle Ame Salon in Shelby, North Carolina.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- TypeScript

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Notes

- Booking is implemented as a replaceable placeholder component for Square Appointments, Vagaro, or GlossGenius.
- Contact phone/email/social links use launch-ready placeholders and should be swapped with verified salon-owned accounts before publishing.
- SEO metadata, Open Graph tags, local business schema, sitemap, and robots routes are included.


## Porkbun deployment

This site is configured for Porkbun Static Hosting using Next.js static export.

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build:porkbun
```

Upload the contents of the generated `out/` directory to Porkbun, or configure Porkbun GitHub Connect to publish `out/`. See `PORKBUN_DEPLOYMENT.md` for details.
