import type { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
import { locales, type Locale, type LocaleContent } from '../content'

type MobileMenuProps = {
  copy: LocaleContent
  locale: Locale
  menuOpen: boolean
  setLocale: (locale: Locale) => void
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

function MobileMenu({
  copy,
  locale,
  menuOpen,
  setLocale,
  setMenuOpen,
}: MobileMenuProps) {
  return (
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
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
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
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
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
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
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
                isActive ? 'bg-sunrise-200 text-slate-900' : 'hover:text-white'
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
  )
}

export default MobileMenu
