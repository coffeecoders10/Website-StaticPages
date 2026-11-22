# Coffee Coders · Static Pages

One Next.js (App Router) project that hosts many **tiny, independent websites**.

> **The rule:** every first-level route (`/anamika`, `/devquotes`, …) is its own website
> with its own theme, fonts, colors and UI. Anything nested deeper is a sub-page of that site
> and inherits its look automatically.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

## Sites

| Route        | Vibe                                                         | Edit content in                          |
| ------------ | ------------------------------------------------------------ | ---------------------------------------- |
| `/`          | Plain index listing all sites                                | `app/page.tsx` (the `sites` array)       |
| `/anamika`   | Light, floral, pastel. Click the envelope → birthday letter pops out | `app/anamika/_content/message.ts` |
| `/devquotes` | Dark terminal / coder theme. Filterable, copyable quotes     | `app/devquotes/_content/quotes.ts`       |

## How the structure works

```
app/
├── layout.tsx            # BARE root layout: <html><body> only. No theme.
├── globals.css           # Reset only (box-sizing, margin 0). No colors/fonts.
├── page.tsx              # Index of all sites
│
├── anamika/              # ← Site #1. Folder name = URL.
│   ├── layout.tsx        #   Loads this site's fonts, applies this site's theme class
│   ├── page.tsx          #   /anamika
│   ├── anamika.module.css#   ALL styling + color palette for this site
│   ├── _components/      #   Private (not routable) components for this site
│   └── _content/         #   Editable text/data
│
└── devquotes/            # ← Site #2, same shape, totally different look
    ├── layout.tsx
    ├── page.tsx
    ├── devquotes.module.css
    ├── _components/
    └── _content/
```

Why this keeps sites isolated:

- **Root layout has no design.** It only provides `<html>`/`<body>`, so nothing leaks into children.
- **Each site's `layout.tsx` is its theme boundary.** It loads its own fonts via `next/font` and wraps
  children in a theme class from its own CSS module. Colors live as CSS variables on that class
  (e.g. `--rose`, `--green`), so the palette is defined in exactly one place per site.
- **CSS Modules** scope class names to the file, so `.title` in one site can never collide with `.title` in another.
- **`_underscore` folders** are private: Next.js never turns them into routes. Put components and data there.

## Adding a sub-route to a site

Subroutes live **inside** the site folder and automatically inherit its layout, fonts and theme:

```
app/anamika/gallery/page.tsx      →  /anamika/gallery   (same floral theme)
app/devquotes/about/page.tsx      →  /devquotes/about   (same dark theme)
```

Import the parent's CSS module with a relative path (`import styles from "../anamika.module.css"`).

## Adding a brand-new site

1. Create `app/<name>/` (lowercase; the folder name is the URL).
2. Add `layout.tsx`: pick fonts with `next/font/google`, wrap `children` in your theme class.
   Copy `app/devquotes/layout.tsx` as a starting point and set the `LayoutProps<"/<name>">` type.
3. Add `page.tsx` and `<name>.module.css`. Define your palette as CSS variables on the theme class.
4. Put private components in `_components/` and editable content in `_content/`.
5. Add a line to the `sites` array in `app/page.tsx` so it shows up on the index.

Never put site-specific colors or fonts in `app/globals.css` or the root layout; that would affect every site.

## Customizing the two starter sites

- **Birthday letter:** edit `app/anamika/_content/message.ts` (title, paragraphs, sign-off, sender).
  Colors are the `--rose`, `--peach`, `--lavender`, … variables at the top of `anamika.module.css`.
- **Quotes:** add objects to `app/devquotes/_content/quotes.ts`. Each has `text`, `author`, and a `tag`
  (`craft | focus | simplicity | growth`; add new tags to the `Tag` type and `tags` array).

## Notes

- Built on Next.js 16 with `cacheComponents` enabled (see `next.config.ts`). Avoid `Math.random()` /
  `Date.now()` during render in components; use fixed values (as `Petals.tsx` does) or compute in event handlers/effects.
- Interactive pieces are client components (`"use client"`): the envelope + dialog (uses the native
  `<dialog>`, so Esc and focus trapping come for free) and the quote filter/copy board.
- Both sites respect `prefers-reduced-motion`.
- Fonts come from Google Fonts at build time, so the first build needs internet access.
