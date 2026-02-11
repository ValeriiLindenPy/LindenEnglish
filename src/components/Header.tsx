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
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sunrise-300 text-lg font-semibold text-[#2b1a10] shadow-[0_10px_25px_rgba(251,239,118,0.25)]">
          L+E
        </div>
        <div>
          <p className="text-sm font-medium text-[#c9b7a5]">
            Linden English
          </p>
          <p className="text-lg font-semibold">{copy.hero.title}</p>
        </div>
      </div>
      <div className="hidden flex-wrap items-center gap-3 lg:flex">
        <nav className="flex flex-wrap gap-2 text-sm font-medium text-[#d9c8b8]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${
                isActive
                  ? 'bg-sunrise-300 text-[#2b1a10]'
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
                  ? 'bg-sunrise-300 text-[#2b1a10]'
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
                  ? 'bg-sunrise-300 text-[#2b1a10]'
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
                  ? 'bg-sunrise-300 text-[#2b1a10]'
                  : 'hover:text-white'
              }`
            }
          >
            {copy.nav.contact}
          </NavLink>
        </nav>
        <div className="flex items-center gap-2 rounded-full border border-[#3b2a20] bg-[#24170f]/70 p-1">
          {locales.map((item) => (
            <button
              key={item.code}
              onClick={() => setLocale(item.code)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                locale === item.code
                  ? 'bg-sunrise-300 text-[#2b1a10]'
                  : 'text-[#d9c8b8] hover:text-white'
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
          className="rounded-full border border-[#3b2a20] bg-[#24170f]/70 px-4 py-2 text-xs font-semibold text-[#f3e8dc]"
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
