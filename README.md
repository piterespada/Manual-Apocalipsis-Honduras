# Manual-Apocalipsis-Honduras

Libro de Supervivencia y Autosuficiencia para Honduras: PWA offline-first en React + Vite + Tailwind, bilingüe (Español / English), con 5 capítulos y 5 niveles por capítulo.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/ con service worker y manifest
npm run preview    # prueba la versión de producción (y el modo offline)
```

## Subir a GitHub y desplegar en GitHub Pages

1. Crea un repositorio vacío en GitHub llamado `Manual-Apocalipsis-Honduras`.
2. En esta carpeta:

```bash
git init -b main
git add .
git commit -m "Libro de Supervivencia Honduras (PWA)"
git remote add origin https://github.com/<TU_USUARIO>/Manual-Apocalipsis-Honduras.git
git push -u origin main
```

3. En GitHub: **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` compila y publica en cada push a `main`.
   La app quedará en `https://<TU_USUARIO>.github.io/Manual-Apocalipsis-Honduras/`.

Con `gh` (GitHub CLI) puedes crear y subir todo de una vez:

```bash
gh repo create Manual-Apocalipsis-Honduras --public --source=. --remote=origin --push
```

## Uso offline

Abre la URL una vez con internet; el service worker guarda toda la app. Luego instálala
("Añadir a pantalla de inicio" en móvil o el icono de instalar en Chrome/Edge de escritorio) y funcionará sin conexión.

## Estructura

- `src/content/es.js` y `src/content/en.js`: todo el contenido (capítulos -> niveles -> bloques).
- `src/content/ui.js`: textos de la interfaz.
- `src/App.jsx`: pantalla de idioma, navegación, selector de nivel, modo oscuro, progreso.
- `vite.config.js`: configuración de la PWA (manifest + precaché con Workbox).

## Aviso

Material educativo. Identifica con certeza cualquier planta antes de consumirla o usarla como medicina, y busca atención médica cuando sea posible.
