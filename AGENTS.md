# DIRETTIVE LOCALI — fm-tip-calculator

Repo vivo (non template): **Frontend Mentor — Tip calculator app**.
Stack: HTML + [Tailwind CSS v3](https://tailwindcss.com/) + vanilla JS. Nessun framework, nessun test.

## Comandi

```bash
npm run dev     # tailwindcss --watch (input → output)
npm run build   # tailwindcss --minify
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

## Boilerplate morto (da non usare / da rimuovere)

Questi file sono stati copiati da un template e non corrispondono al progetto reale:

- `eslint.config.js` — importa React e TypeScript parser ma il progetto è JS puro. I blocchi `// [React]` vanno rimossi.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — nessun file TypeScript nel repo. `tsconfig.app.json` cerca `src/` (ha solo CSS) e `tsconfig.node.json` cerca `vite.config.ts` (inesistente).
- `.github/workflows/release-please.yml`, `.github/workflows/opencode.yml`, template Issue/PR — copiati da altro progetto, vanno adattati o rimossi.
- `.prettierignore`, `.prettierrc` — attivi ma nessuno script per formattare. Vanno puliti se si eliminano gli altri boilerplate.

## Convenzioni progetto

- **Conventional Commits obbligatori** (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
- **Branch**: crea sempre un branch da `main` prima di modificare file. Sintassi: `<tipo>/<nome>` (es. `feat/tasto-custom`).
- **Atomicità**: `git add` file per file, mai `git add .`. Un commit per unità logica.
- **Issue/PR**: segui i template in `.github/` se esistono; per body lunghi usa `--body-file`. Non cancellare issue, modificale con `gh issue edit`.

## Note operative

- **`src/output.css` è generato**: ricostruire con `npm run build` dopo modifiche a `input.css`, `tailwind.config.js`, o ai file in `content: ["*.{html,js}"]`.
- **Nessun lint/typecheck**: non esistono script per ESLint, Prettier o TypeScript in `package.json`.
- **Tailwind v3** (non v4): usa `tailwind.config.js` con sintassi `module.exports`.
- **Git**: un solo commit (`c99496`), `.gitignore` ha placeholder di Frontend Mentor (`.sketch`, `.fig`, `.xd`).
