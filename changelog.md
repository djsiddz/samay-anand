# Space Ahead ✨ Changelog

## v0.19.0 (Latest) - November 25, 2026

Security update release addressing known vulnerabilities in the dependency tree, synced with the Space Ahead theme.

### Security

- Upgraded Astro to v7.4.13, patching GHSA-mh32-jxcr-mh9f (XSS via attribute injection in dynamic tag names) and GHSA-r3h5-4585-7x3w (image endpoint file read on case-sensitive filesystems).
- Updated `fast-xml-parser` (via `@astrojs/rss`) to patch GHSA-474x-hrwr-fgx4 (quadratic CPU consumption on unterminated stop-node tags).
- Added a pnpm override forcing `serialize-javascript` to v7.1.4, patching GHSA-5c6j-r48x-rmvq (RCE) and GHSA-m5mm-p8h7-m29v (XSS). The vulnerable copy was pulled in transitively by `@swup/plugin@3`'s deprecated `rollup-plugin-terser` dependency; the `serialize()` API is unchanged, and `pnpm audit` now reports no known vulnerabilities.

### Updates

- Upgraded `@astrojs/preact` to v6.1.6, `@astrojs/sitemap` to v3.7.6, and Preact to v11.2.0.
- Upgraded `@tailwindcss/vite` and `tailwindcss` to v4.3.5, and Prettier to v3.10.1.
- Kept TypeScript at v6.0.3 while deferring the TypeScript 7 upgrade pending official Astro toolchain support.
- Updated `README.md` to advertise Astro v7.4 demo compatibility, and the package description to reference the Astro v7 theme.

## v0.18.0 - October 28, 2026

October dependency maintenance release synced with the Space Ahead theme.

### Updates

- Upgraded Preact to v11.1.0 with `@astrojs/preact` v6.1.1.
- Updated Astro to v7.4.4, Sharp to v0.35.5, and Prettier to v3.9.10.
- Kept TypeScript at v6.0.3 while deferring the TypeScript 7 upgrade pending official Astro toolchain support.

## v0.17.0 - September 24, 2026

September dependency maintenance release synced with the Space Ahead theme.

### Updates

- Updated Astro to v7.3.4, the Astro Preact integration to v6.0.5, Astro sitemap to v3.7.4, Prettier to v3.9.9, and Sharp to v0.35.4.
- Kept TypeScript at v6.0.3 while deferring the TypeScript 7 upgrade.

## v0.16.1 (Latest) - August 26, 2026

Documentation updates announcing Astro v7.2 demo compatibility.

### Updates

- Updated `README.md` to reflect Astro v7.2 Space Ahead theme capabilities.

## v0.16.0 - August 26, 2026

Sync with Space Ahead v0.16.0 (Astro v7.2 upgrade & dependency refresh).

### Updates

- Upgraded Astro to v7.2.6, `@astrojs/preact` to v6.0.4, `@astrojs/rss` to v4.0.19, and Preact to v10.29.8.
- Upgraded `@tailwindcss/vite` and `tailwindcss` to v4.3.3.
- Upgraded Prettier to v3.9.6, `prettier-plugin-tailwindcss` to v0.8.1, and Sharp to v0.35.3.
- Retained TypeScript v6.0.3 pending official Astro support for TypeScript 7.

## v0.15.0 - June 29, 2026

Sync with Space Ahead v0.15.0 (Astro v7.0 upgrade & dependency refresh).

### Updates

- Upgraded Astro to v7.0.3 and all other dependencies to their latest versions.
- Fixed TypeScript type error in `src/pages/rss.xml.ts` by explicitly typing the `context` parameter using `APIContext`.

Visit the original [changelog](https://github.com/djsiddz/space-ahead/blob/main/changelog.md) for the Space Ahead Astro theme updates.
