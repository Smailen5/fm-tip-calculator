# DIRETTIVE LOCALI — fm-tip-calculator

Repo vivo (non template): **Frontend Mentor — Tip calculator app**.
Stack: HTML + [Tailwind CSS v3](https://tailwindcss.com/) + vanilla JS. Nessun framework, nessun test.

## Comandi

```bash
pnpm dev       # tailwindcss --watch (input → output)
pnpm build     # tailwindcss --minify
pnpm lint      # ESLint
pnpm lint:fix  # ESLint con fix automatico
```

Apri `index.html` nel browser per vedere il risultato. Non c'è dev server.

## Architettura

| File | Ruolo |
|---|---|
| `index.html` | Entry point, carica `src/output.css` e `script.js` |
| `script.js` | Logica app: calcolo mancia, reset |
| `src/input.css` | Tailwind directives (`@tailwind base/components/utilities`) |
| `src/output.css` | **Generato** da Tailwind — non modificare a mano |
| `tailwind.config.js` | Colori custom, font `Space Mono`, fontSize estesi |

## Convenzioni progetto

- **Conventional Commits obbligatori** (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
- **Branch**: crea sempre un branch da `main` prima di modificare file. Sintassi: `<tipo>/<nome>` (es. `feat/tasto-custom`).
- **Atomicità**: `git add` file per file, mai `git add .`. Un commit per unità logica.
- **Issue/PR**: segui i template in `.github/` se esistono; per body lunghi usa `--body-file`. Non cancellare issue, modificale con `gh issue edit`.

## Note operative

- **`src/output.css` è generato**: ricostruire con `pnpm build` dopo modifiche a `input.css`, `tailwind.config.js`, o ai file in `content: ["*.{html,js}"]`.
- **Lint**: ESLint con flat config (`eslint.config.js`). Ordine di verifica: `lint`.
- **Tailwind v3** (non v4): usa `tailwind.config.js` con sintassi `module.exports`.
- **Git**: un solo commit (`c99496`), `.gitignore` ha placeholder di Frontend Mentor (`.sketch`, `.fig`, `.xd`).
