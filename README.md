# CCS Website Redesign — Vue 3 + Vite + Vue Router + Pinia + Tailwind

    npm install
    npm run dev        # development
    npm run build      # production build -> dist/

## Deploy (working link for Canvas)
- **Netlify**: drag the `dist/` folder to app.netlify.com/drop (`public/_redirects` handles SPA routing).
- **Vercel**: `vercel` in this folder (`vercel.json` handles SPA routing).

## Structure
- `src/data/`        verified content from https://ccs.cpu.edu.ph/ (college, programs, faculty, news)
- `src/router/`      Vue Router (lazy-loaded views, smooth hash scrolling)
- `src/stores/`      Pinia (theme + toast notifications)
- `src/composables/` useSearch, useCountUp, useScrollY
- `src/components/`  common/, home/, faculty/, news/, program/ (reusable UI)
- `src/views/`       Home, About, Programs, BSIT, BSCS, BSDMIA, BLIS, Faculty, News, NewsDetail, Events, Contact, NotFound

## Content integrity
Faculty names, titles, assignments and photos come from the official Faculty and Staff page. Specializations are not
published there, so they are intentionally not shown. Photos/program emblems are linked from ccs.cpu.edu.ph —
credit them in the report's References section. The hero building image is cropped from the supplied design mockup.
