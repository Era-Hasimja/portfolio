# Era Hasimja — Portfolio

A fast, responsive personal portfolio built with **React + Vite + Tailwind CSS**,
featuring a **light/dark theme toggle**, smooth scroll-reveal animations, and a
fully responsive layout.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## How it's organized

```
public/
  EraHasimja_cv.pdf   ← your CV (linked from the "Download CV" button)
  favicon.svg         ← EH monogram favicon
src/
  data/portfolio.js   ← ⭐ ALL your content lives here (edit this first)
  hooks/useTheme.js   ← light/dark theme logic
  components/
    Navbar, Hero, About, Skills, Projects,
    Experience, Education, Contact, Footer
    ui/  → Section, Reveal (scroll animation), BrandIcons
  App.jsx             ← assembles the page
  index.css           ← Tailwind + theme tokens
```

## Editing your content

Open **`src/data/portfolio.js`** — almost everything is there:

- **`profile`** — name, title, tagline, email, phone, location, about text, stats.
- **`profile.github` / `profile.linkedin`** — add your URLs and the social
  buttons appear automatically (leave `''` to hide them).
- **`skills`, `projects`, `experience`, `education`, `courses`, `languages`** —
  edit, add or remove entries; the UI updates itself.

You don't need to touch the components for normal content changes.

## Adding your photo

The hero shows an "EH" monogram by default. To use a real photo:

1. Drop `era.jpg` into the `public/` folder.
2. In `src/components/Hero.jsx`, replace the monogram `<span>` with:
   ```jsx
   <img src="/era.jpg" alt="Era Hasimja" className="h-full w-full rounded-3xl object-cover" />
   ```

## Theme

The light/dark choice is saved to `localStorage` and respects the visitor's OS
preference on first visit. An inline script in `index.html` applies the theme
before paint, so there's no flash of the wrong colors.

## Deploying

This is a static site — any static host works. Easiest options:

- **Vercel / Netlify**: connect the repo, framework = Vite, build = `npm run build`, output = `dist`.
- **GitHub Pages**: run `npm run build` and publish the `dist/` folder.

---

Built with React & Tailwind CSS.
