# Istano Basa Pagaruyung Guide

Independent static visitor guide in Indonesian (`/`) and English (`/en/`), with matching privacy, terms and cookie-settings pages.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
```

The canonical origin defaults to `https://pagaruyung.com` in `astro.config.mjs`; `PUBLIC_SITE_URL` can override an explicit preview origin. Metadata, language alternates and sitemap use the configured origin. The root Indonesian page is the default language target.

The Worker executes before the ASSETS binding, redirects HTTP/www to the HTTPS apex with paths and queries preserved, and retains real 404 responses with a noindex header. The 404 page has no canonical or language-alternate tags. Verify the actual Cloudflare project, domain bindings, build and production responses after release.

All photographs are served locally. Sources and licenses are listed on the guide and in `CONTENT_SOURCES.md`. Analytics is loaded after optional consent; storage failures do not block the current cookie choice. Local validation does not establish production or visual acceptance.
