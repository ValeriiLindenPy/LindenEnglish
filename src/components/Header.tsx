import type { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
import { locales, type Locale, type LocaleContent } from '../content'

type HeaderProps = {
  copy: LocaleContent
  locale: Locale
  setLocale: (locale: Locale) => void
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

function Header({
  copy,
  locale,
  setLocale,
  menuOpen,
  setMenuOpen,
}: HeaderProps) {
  return (
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
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
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
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
              }`
            }
          >
            {copy.nav.about}
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
              }`
            }
          >
            {copy.nav.blog}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
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
  )
}

export default Header
