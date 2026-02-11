import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { content, type Locale } from './content'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import MobileMenu from './components/MobileMenu'
import { SHOW_BLOG } from './siteConfig'

const baseClass =
  'relative min-h-screen overflow-hidden bg-[#1a120d] text-[#f7efe6] selection:bg-sunrise-200 selection:text-[#2b1a10]'

const getDefaultLocale = (): Locale => {
  if (typeof navigator === 'undefined') {
    return 'en'
  }

  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]
  const normalized = languages.map((lang) => lang.toLowerCase())

  if (normalized.some((lang) => lang.startsWith('sr'))) {
    return 'sr-Lat'
  }
  if (normalized.some((lang) => lang.startsWith('ru'))) {
    return 'ru'
  }
  if (normalized.some((lang) => lang.startsWith('en'))) {
    return 'en'
  }

  return 'en'
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => getDefaultLocale())
  const [menuOpen, setMenuOpen] = useState(false)
  const copy = useMemo(() => content[locale], [locale])

  useEffect(() => {
    document.documentElement.lang = locale === 'sr-Lat' ? 'sr' : locale
  }, [locale])

  return (
    <div className={baseClass}>
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-sunrise-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-sunrise-300/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#2a1a12_0%,transparent_60%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6">
        <Header
          copy={copy}
          locale={locale}
          setLocale={setLocale}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MobileMenu
          copy={copy}
          locale={locale}
          menuOpen={menuOpen}
          setLocale={setLocale}
          setMenuOpen={setMenuOpen}
        />

        <main className="flex-1 pt-10">
          <Routes>
            <Route path="/" element={<Home locale={locale} />} />
            <Route path="/about" element={<About locale={locale} />} />
            {SHOW_BLOG ? (
              <Route path="/blog" element={<Blog locale={locale} />} />
            ) : (
              <Route path="/blog" element={<Navigate to="/" replace />} />
            )}
            <Route path="/contact" element={<Contact locale={locale} />} />
          </Routes>
        </main>

        <footer className="border-t border-[#3b2a20] pt-6 text-sm text-[#c9b7a5]">
          {copy.footer}
        </footer>
      </div>
    </div>
  )
}

export default App
