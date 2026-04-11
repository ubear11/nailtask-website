import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useI18n, useT, languageNames, type Language } from '@/lib/i18n'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage } = useI18n()
  const t = useT()

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/about', label: t('nav.about') },
    { to: '/applications', label: t('nav.applications') },
    { to: '/distributor', label: t('nav.distributor') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ] as const

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-amber-500 rounded-md flex items-center justify-center font-bold text-slate-900 text-sm">NT</div>
            <span className="text-xl font-bold tracking-tight">
              Nail<span className="text-amber-500">Task</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                activeProps={{ className: 'px-3 py-2 text-sm font-medium text-white bg-slate-800 rounded-md' }}
                activeOptions={{ exact: item.to === '/' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1.5 text-sm text-slate-300 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{languageNames[language]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-1 z-50 min-w-[140px]">
                    {(Object.keys(languageNames) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangOpen(false) }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-700 transition-colors ${
                          lang === language ? 'text-amber-500 font-medium' : 'text-slate-300'
                        }`}
                      >
                        {languageNames[lang]}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-sm rounded-md transition-colors"
            >
              {t('nav.getQuote')}
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-slate-700">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-3 py-2.5 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
                activeProps={{ className: 'block px-3 py-2.5 text-base font-medium text-white bg-slate-700 rounded-md' }}
                activeOptions={{ exact: item.to === '/' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2.5 text-base font-semibold text-amber-500 hover:text-amber-400"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.getQuote')} →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
