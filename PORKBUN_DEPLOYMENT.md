# Porkbun Static Hosting Deployment

This project is configured for Porkbun Static Hosting as a static Next.js export.

## Build command

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build:porkbun
```

Next.js writes the static site to the `out/` directory.

## Upload target

Upload the **contents of `out/`**, not the `out` folder itself, to Porkbun Static Hosting.

Porkbun Static Hosting supports static HTML, CSS, JavaScript, and asset files. The app avoids server-only features so it can run without a Node.js runtime.

## Porkbun GitHub Connect

If using Porkbun GitHub Connect, connect the production branch and configure the build to run:

```bash
npm ci && NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build:porkbun
```

Set the publish/output directory to:

```text
out
```

## Important launch settings

- Replace `https://your-domain.com` with the final Porkbun domain.
- Keep `NEXT_PUBLIC_SITE_URL` set so canonical URLs, sitemap entries, robots.txt, and structured data use the live domain.
- Replace placeholder phone, email, and social links before launch.
- The booking widget is intentionally static and ready to replace with Square Appointments, Vagaro, or GlossGenius embed code.

## Compatibility notes

- `output: 'export'` generates static HTML files.
- `trailingSlash: true` creates directory-style routes such as `/services/index.html`, which is broadly compatible with static hosts.
- `images.unoptimized: true` avoids the Next.js image optimization server, which is not available on static hosting.
- Contact form submission is currently client-side placeholder behavior; connect it to a third-party form provider or booking system for production submissions.
