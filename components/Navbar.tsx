'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080810]/90 backdrop-blur-xl border-b border-white/[0.04] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          className="group relative flex items-center gap-2"
          aria-label="Go to home"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4fffb0] to-[#7c6aff] rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="absolute inset-0 border border-[#4fffb0]/30 rounded-lg group-hover:border-[#4fffb0]/60 transition-colors duration-300" />
            <span
              className="relative font-display font-800 text-lg text-[#4fffb0] tracking-tight"
              style={{ fontFamily: 'Syne, serif', fontWeight: 800 }}
            >
              YB
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`nav-link text-sm tracking-wide transition-colors duration-200 ${
                active === link.href.replace('#', '')
                  ? 'text-[#4fffb0] active'
                  : 'text-[#9aa0b4] hover:text-[#e8eaf0]'
              }`}
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/resume-placeholder.pdf"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#4fffb0] border border-[#4fffb0]/30 hover:border-[#4fffb0]/70 hover:bg-[#4fffb0]/5 transition-all duration-200"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
          download
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#e8eaf0] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8eaf0] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8eaf0] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden bg-[#0d0d1a]/95 backdrop-blur-xl border-b border-white/[0.04] px-6 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${
                  active === link.href.replace('#', '')
                    ? 'text-[#4fffb0] bg-[#4fffb0]/5'
                    : 'text-[#9aa0b4] hover:text-[#e8eaf0] hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume-placeholder.pdf"
              className="mt-2 flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-[#4fffb0] border border-[#4fffb0]/30"
              download
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
