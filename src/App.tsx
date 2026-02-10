import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { content, type Locale } from './content'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import MobileMenu from './components/MobileMenu'

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

export default App
