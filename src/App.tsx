import { useEffect, useMemo, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { content, locales, type Locale } from './content'

const baseClass =
  'min-h-screen bg-slate-950 text-slate-100 selection:bg-sunrise-200 selection:text-slate-900'

function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const copy = useMemo(() => content[locale], [locale])

  useEffect(() => {
    document.documentElement.lang = locale === 'sr-Lat' ? 'sr' : locale
  }, [locale])

  return (
    <div className={baseClass}>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sunrise-200 text-lg font-semibold text-slate-900">
              L+E
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                Linden English
              </p>
              <p className="text-lg font-semibold">{copy.hero.title}</p>
            </div>
          </div>
          <div className="hidden flex-wrap items-center gap-3 lg:flex">
            <nav className="flex flex-wrap gap-2 text-sm uppercase tracking-[0.2em] text-slate-300">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
                end
              >
                {copy.nav.home}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
              >
                {copy.nav.about}
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
              >
                {copy.nav.blog}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
              >
                {copy.nav.contact}
              </NavLink>
            </nav>
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 p-1">
              {locales.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLocale(item.code)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    locale === item.code
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </header>
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen
              ? 'max-h-[600px] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-4">
            <nav className="grid gap-2 text-sm uppercase tracking-[0.2em] text-slate-300">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
                end
                onClick={() => setMenuOpen(false)}
              >
                {copy.nav.home}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {copy.nav.about}
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {copy.nav.blog}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'hover:text-white'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {copy.nav.contact}
              </NavLink>
            </nav>
            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-2">
              {locales.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setLocale(item.code)
                    setMenuOpen(false)
                  }}
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    locale === item.code
                      ? 'bg-sunrise-200 text-slate-900'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <main className="flex-1 pt-10">
          <Routes>
            <Route path="/" element={<Home locale={locale} />} />
            <Route path="/about" element={<About locale={locale} />} />
            <Route path="/blog" element={<Blog locale={locale} />} />
            <Route path="/contact" element={<Contact locale={locale} />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-800 pt-6 text-sm text-slate-400">
          {copy.footer}
        </footer>
      </div>
    </div>
  )
}

function Home({ locale }: { locale: Locale }) {
  const copy = content[locale]
  const featuredPosts = copy.blogPosts.filter((post) => post.featured)

  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-sunrise-200" />
            {copy.hero.badge}
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              {copy.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#request"
              className="rounded-full bg-sunrise-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
            >
              {copy.hero.ctaPrimary}
            </a>
            <NavLink
              to="/blog"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-100 transition hover:border-slate-500 hover:text-white"
            >
              {copy.hero.ctaSecondary}
            </NavLink>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {copy.highlights.title}
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-200">
              {copy.highlights.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sunrise-200/30 blur-2xl" />
          <div className="flex h-full flex-col justify-between gap-6">
            <img
              src="/my-photo.png"
              alt="Valerii Linden portrait"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                English Tutor
              </p>
              <p className="text-lg font-semibold">
                A1-B1 structured lessons
              </p>
              <p className="text-sm text-slate-300">
                Novi Sad, Serbia • Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {copy.blog.title}
          </h2>
          <p className="mt-3 text-lg text-slate-200">{copy.blog.subtitle}</p>
          <div className="mt-6 grid gap-4">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {post.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        <div
          id="request"
          className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {copy.request.title}
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            {copy.request.description}
          </p>
          <form className="mt-6 grid gap-4">
            <input
              placeholder={copy.request.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
            />
            <input
              placeholder={copy.request.level}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
            />
            <input
              placeholder={copy.request.goal}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
            />
            <input
              placeholder={copy.request.contact}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
            />
            <button
              type="button"
              className="rounded-full bg-sunrise-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
            >
              {copy.request.submit}
            </button>
            <p className="text-xs text-slate-400">{copy.request.note}</p>
          </form>
        </div>
      </section>
    </div>
  )
}

function About({ locale }: { locale: Locale }) {
  const copy = content[locale]

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h1 className="text-3xl font-semibold">{copy.about.title}</h1>
        <p className="mt-4 text-slate-300">{copy.about.summary}</p>
        <h2 className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.about.specialtiesTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-200">
          {copy.about.specialties.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.about.experienceTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-200">
          {copy.about.experience.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-6 text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.about.educationTitle}
        </h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-200">
          {copy.about.education.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-sunrise-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function Blog({ locale }: { locale: Locale }) {
  const copy = content[locale]

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
      <h1 className="text-3xl font-semibold">{copy.blog.title}</h1>
      <p className="mt-3 text-slate-300">{copy.blog.subtitle}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {copy.blogPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {post.date}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            {post.featured ? (
              <span className="mt-4 inline-flex rounded-full bg-sunrise-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                Featured
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}

function Contact({ locale }: { locale: Locale }) {
  const copy = content[locale]

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h1 className="text-3xl font-semibold">{copy.contact.title}</h1>
        <p className="mt-3 text-slate-300">{copy.contact.subtitle}</p>
        <div className="mt-6 grid gap-4 text-sm text-slate-200">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.contact.locationLabel}
            </p>
            <p className="mt-1">Novi Sad, Serbia</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.contact.emailLabel}
            </p>
            <p className="mt-1">valeriilinden@gmail.com</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.contact.phoneLabel}
            </p>
            <p className="mt-1">+381 621 11 06 23</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400">
          {copy.request.title}
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          {copy.request.description}
        </p>
        <form className="mt-6 grid gap-4">
          <input
            placeholder={copy.request.name}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
          />
          <input
            placeholder={copy.request.level}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
          />
          <input
            placeholder={copy.request.goal}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
          />
          <input
            placeholder={copy.request.contact}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sunrise-200"
          />
          <button
            type="button"
            className="rounded-full bg-sunrise-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
          >
            {copy.request.submit}
          </button>
          <p className="text-xs text-slate-400">{copy.request.note}</p>
        </form>
      </section>
    </div>
  )
}

export default App
