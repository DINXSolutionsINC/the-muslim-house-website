import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePrayerTimes } from '../hooks/usePrayerTimes'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#services' },
  { label: 'Events', href: '/events', isRoute: true },
  { label: 'Shop', href: 'https://shop.themuslimhouseflint.org' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { nextPrayer, countdown } = usePrayerTimes()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-emerald-deep/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Prayer time ticker */}
      {nextPrayer && (
        <div className="bg-gold/90 text-emerald-deep text-center text-xs font-medium py-1 tracking-wide">
          Next Prayer: <span className="font-bold">{nextPrayer}</span> in{' '}
          <span className="font-mono font-bold">{countdown}</span>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo-dark.svg"
              alt="The Muslim House"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/80 hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
            <a
              href="#donate"
              className="ml-3 bg-gold hover:bg-gold-light text-emerald-deep px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
            >
              Donate
            </a>
            <button
              onClick={() => setDark(!dark)}
              className="ml-3 text-white/80 hover:text-gold p-2 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDark(!dark)}
              className="text-white/80 hover:text-gold p-2"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-gold py-3 text-base font-medium border-b border-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-gold py-3 text-base font-medium border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#donate"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-gold text-emerald-deep px-5 py-3 rounded-full font-bold"
          >
            Donate Now
          </a>
        </div>
      </nav>
    </header>
  )
}
