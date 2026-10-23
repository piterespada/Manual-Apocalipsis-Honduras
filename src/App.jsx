import { useEffect, useMemo, useState } from 'react';
import ui from './content/ui.js';
import es from './content/es.js';
import en from './content/en.js';

const BOOKS = { es, en };
const STORE_KEY = 'hn-survival-book-v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch {
    /* almacenamiento no disponible: la app sigue funcionando */
  }
}

function Welcome({ onPick }) {
  return (
    <div className="flex min-h-full items-center justify-center bg-paper p-4 dark:bg-[#1c1812]">
      <div className="page-ruled page-margin w-full max-w-xl rounded-lg p-6 pl-8 sm:p-10 sm:pl-12">
        <div className="text-5xl">📓</div>
        <h1 className="font-hand mt-3 text-4xl leading-tight text-ink dark:text-[#f0e4c8] sm:text-5xl">
          Libro de Supervivencia
          <br />
          <span className="text-moss dark:text-[#a9bd7a]">Survival Book</span>
        </h1>
        <p className="mt-4 text-sm text-ink-soft dark:text-[#bfae8a]">
          {ui.es.welcomeSub}
          <br />
          {ui.en.welcomeSub}
        </p>
        <p className="font-hand mt-6 text-2xl text-rust dark:text-[#e08a68]">{ui.es.chooseLang}</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            onClick={() => onPick('es')}
            className="rounded-lg border-2 border-ink bg-paper-deep px-4 py-4 text-lg font-semibold text-ink transition hover:bg-moss hover:text-paper dark:border-[#e8dcc0] dark:bg-[#332c21] dark:text-[#f0e4c8]"
          >
            🇭🇳 Español
          </button>
          <button
            onClick={() => onPick('en')}
            className="rounded-lg border-2 border-ink bg-paper-deep px-4 py-4 text-lg font-semibold text-ink transition hover:bg-moss hover:text-paper dark:border-[#e8dcc0] dark:bg-[#332c21] dark:text-[#f0e4c8]"
          >
            🌎 English
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const saved = useMemo(loadState, []);
  const [lang, setLang] = useState(saved.lang || null);
  const [chapter, setChapter] = useState(saved.chapter ?? 0);
  const [level, setLevel] = useState(saved.level ?? 0);
  const [dark, setDark] = useState(
    saved.dark ?? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [done, setDone] = useState(saved.done || {});
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#1c1812' : '#e9dcc0');
  }, [dark]);

  useEffect(() => {
    if (lang) document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    saveState({ lang, chapter, level, dark, done });
  }, [lang, chapter, level, dark, done]);

  if (!lang) return <Welcome onPick={setLang} />;

  const t = ui[lang];
  const book = BOOKS[lang];
  const ch = book[chapter];
  const lv = ch.levels[level];
  const key = `${ch.id}-${level}`;
  const isDone = !!done[key];
  const doneCount = Object.keys(done).filter((k) => done[k]).length;
  const total = book.length * 5;

  const toggleDone = () => setDone((d) => ({ ...d, [key]: !d[key] }));
  const goChapter = (i) => {
    setChapter(i);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
    const main = document.getElementById('main-scroll');
    if (main) main.scrollTo({ top: 0 });
  };

  return (
    <div className="flex h-full flex-col bg-paper text-ink dark:bg-[#1c1812] dark:text-[#e8dcc0]">
      {/* Barra superior con selector de nivel */}
      <header className="border-b border-paper-line bg-paper-deep px-3 py-2 dark:border-[#4a402d] dark:bg-[#2a241b]">
        <div className="flex items-center gap-2">
          <button
            className="btn-ink md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label={t.menu}
          >
            ☰
          </button>
          <div className="min-w-0 flex-1">
            <div className="font-hand truncate text-2xl leading-none">{t.appTitle}</div>
            <div className="hidden truncate text-xs text-ink-soft dark:text-[#bfae8a] sm:block">{t.appSub}</div>
          </div>
          <button className="btn-ink" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t.language}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="btn-ink" onClick={() => setDark(!dark)} aria-label={dark ? t.light : t.dark}>
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-hand text-xl">{t.level}</span>
          <div className="flex flex-1 gap-1.5" role="tablist" aria-label={t.level}>
            {[0, 1, 2, 3, 4].map((i) => (
              <button
                key={i}
                role="tab"
                aria-selected={level === i}
                title={t.levelNames[i]}
                onClick={() => setLevel(i)}
                className={
                  'flex-1 rounded-md border px-2 py-1.5 text-sm font-semibold transition-colors ' +
                  (level === i
                    ? 'border-moss bg-moss text-paper dark:border-[#a9bd7a] dark:bg-[#5b6b3a]'
                    : 'border-paper-line bg-paper hover:bg-paper-line/50 dark:border-[#4a402d] dark:bg-[#26211a] dark:hover:bg-[#332c21]')
                }
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-1 text-xs text-ink-soft dark:text-[#bfae8a]">
          <strong>{t.levelNames[level]}</strong> — {t.levelHints[level]}
        </div>
      </header>

      <div className="relative flex min-h-0 flex-1">
        {/* Barra lateral (escritorio) y cajón (móvil) */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
        <aside
          className={
            'scroll-thin z-40 w-72 shrink-0 overflow-y-auto border-r border-paper-line bg-paper-deep p-3 transition-transform dark:border-[#4a402d] dark:bg-[#2a241b] ' +
            'fixed inset-y-0 left-0 md:static md:translate-x-0 ' +
            (menuOpen ? 'translate-x-0' : '-translate-x-full')
          }
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-hand text-2xl">{t.chapters}</h2>
            <button className="btn-ink md:hidden" onClick={() => setMenuOpen(false)} aria-label={t.close}>
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-1.5">
            {book.map((c, i) => (
              <button
                key={c.id}
                onClick={() => goChapter(i)}
                className={
                  'flex items-start gap-2 rounded-md border px-3 py-2 text-left transition-colors ' +
                  (chapter === i
                    ? 'border-rust bg-paper dark:border-[#e08a68] dark:bg-[#332c21]'
                    : 'border-transparent hover:bg-paper-line/40 dark:hover:bg-[#332c21]')
                }
              >
                <span className="text-xl">{c.icon}</span>
                <span className="text-sm leading-snug">
                  <span className="font-hand mr-1 text-lg text-rust dark:text-[#e08a68]">{i + 1}.</span>
                  {c.title}
                </span>
              </button>
            ))}
          </nav>
          <div className="mt-4 rounded-md border border-dashed border-paper-line p-3 text-xs text-ink-soft dark:border-[#4a402d] dark:text-[#bfae8a]">
            <div className="mb-1 font-semibold">
              {t.progress}: {doneCount}/{total}
            </div>
            <div className="h-2 overflow-hidden rounded bg-paper-line/60 dark:bg-[#4a402d]">
              <div className="h-full bg-moss" style={{ width: `${(doneCount / total) * 100}%` }} />
            </div>
            <div className="mt-2">✅ {t.offlineReady}</div>
          </div>
        </aside>

        {/* Contenido */}
        <main id="main-scroll" className="scroll-thin min-w-0 flex-1 overflow-y-auto p-3 sm:p-6">
          <article className="page-ruled page-margin mx-auto max-w-3xl rounded-lg p-5 pl-7 sm:p-8 sm:pl-12">
            <div className="text-3xl">{ch.icon}</div>
            <h1 className="font-hand text-4xl leading-tight sm:text-5xl">{ch.title}</h1>
            <p className="ruled-line text-sm text-ink-soft dark:text-[#bfae8a]">{ch.subtitle}</p>

            <h2 className="font-hand mt-4 text-3xl text-moss dark:text-[#a9bd7a]">
              {t.level} {level + 1}: {lv.name}
            </h2>
            <p className="ruled-line font-medium">🎯 {lv.goal}</p>

            {lv.blocks.map((b, bi) => (
              <section key={bi} className="mt-4">
                <h3 className="font-hand text-2xl text-rust dark:text-[#e08a68]">{b.h}</h3>
                <ul className="mt-1 list-disc space-y-2 pl-5">
                  {b.items.map((it, ii) => (
                    <li key={ii} className="leading-7">
                      {it}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {lv.warn && (
              <div className="mt-5 rounded-md border-l-4 border-rust bg-rust/10 p-3 text-sm leading-6 dark:border-[#e08a68] dark:bg-[#e08a68]/10">
                ⚠️ {lv.warn}
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={toggleDone}
                className={
                  'rounded-md border-2 px-4 py-2 text-sm font-semibold transition-colors ' +
                  (isDone
                    ? 'border-moss bg-moss text-paper'
                    : 'border-ink hover:bg-paper-line/50 dark:border-[#e8dcc0] dark:hover:bg-[#332c21]')
                }
              >
                {isDone ? t.done : t.markDone}
              </button>
              <div className="flex gap-2">
                <button
                  className="btn-ink"
                  disabled={level === 0}
                  onClick={() => setLevel(Math.max(0, level - 1))}
                >
                  ← {t.level} {Math.max(1, level)}
                </button>
                <button
                  className="btn-ink"
                  disabled={level === 4}
                  onClick={() => setLevel(Math.min(4, level + 1))}
                >
                  {t.level} {Math.min(5, level + 2)} →
                </button>
              </div>
            </div>

            <p className="mt-6 border-t border-dashed border-paper-line pt-3 text-xs leading-5 text-ink-soft dark:border-[#4a402d] dark:text-[#bfae8a]">
              {t.disclaimer}
            </p>
          </article>
        </main>
      </div>
    </div>
  );
}
