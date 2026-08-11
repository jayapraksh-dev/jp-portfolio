import React, { useState, useEffect } from 'react'
import { Sun, Moon, ArrowUpRight, ArrowRight, Menu, X } from 'lucide-react'

/**
 * Navbar Component
 * 
 * Migrated from reference/portfolio.html.
 * Features:
 * - Desktop navigation links
 * - Mobile navigation menu (toggled using React useState)
 * - Theme toggle (Dark/Light mode synced with HTML root class using useEffect)
 * - "Let's Talk" CTA button
 */
function Navbar() {
  // State for mobile menu drawer (true = open, false = closed)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // State for theme ('dark' or 'light')
  const [theme, setTheme] = useState('dark')

  // Effect to synchronize the theme state with the <html> class element
  useEffect(() => {
    const htmlElement = document.documentElement
    if (theme === 'dark') {
      htmlElement.classList.remove('light')
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
      htmlElement.classList.add('light')
    }
  }, [theme])

  // Handler to toggle between dark and light theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  // Handler to toggle mobile menu open/closed state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  // Handler to close mobile menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xl font-bold font-heading text-white light:text-slate-900 tracking-wider"
        >
          <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center font-mono font-bold transition-transform duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-white">
            JP
          </span>
          <span className="tracking-tight">
            Jayaprakash<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 bg-dark-card/80 light:bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-dark-border light:border-slate-200 shadow-lg shadow-black/5">
          <a
            href="#home"
            className="nav-link text-sm font-medium hover:text-accent transition-colors text-white light:text-slate-900"
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link text-sm font-medium hover:text-accent transition-colors text-slate-400 light:text-slate-600"
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link text-sm font-medium hover:text-accent transition-colors text-slate-400 light:text-slate-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link text-sm font-medium hover:text-accent transition-colors text-slate-400 light:text-slate-600"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Actions (Theme Toggle & Let's Talk CTA) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full border border-dark-border light:border-slate-200 text-slate-400 hover:text-white light:hover:text-slate-900 bg-dark-card light:bg-white transition-all hover:border-slate-600"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-slate-300 hover:text-white" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600 hover:text-slate-900" />
            )}
          </button>

          {/* Let's Talk CTA Link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-blue-600 text-white text-sm font-medium transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls (Mobile Theme Toggle & Hamburger Button) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mobile"
            className="p-2 rounded-lg border border-dark-border light:border-slate-200 text-slate-400 bg-dark-card light:bg-white"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-slate-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            aria-label="Open Navigation Menu"
            className="p-2 text-slate-300 light:text-slate-700 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-dark-bg/95 light:bg-white/95 backdrop-blur-xl border-b border-dark-border light:border-slate-200 px-6 py-6 transition-all`}
      >
        <div className="flex flex-col gap-4">
          <a
            href="#home"
            onClick={handleNavLinkClick}
            className="mobile-nav-link text-lg font-medium text-white light:text-slate-900"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleNavLinkClick}
            className="mobile-nav-link text-lg font-medium text-slate-400 light:text-slate-600"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={handleNavLinkClick}
            className="mobile-nav-link text-lg font-medium text-slate-400 light:text-slate-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleNavLinkClick}
            className="mobile-nav-link text-lg font-medium text-slate-400 light:text-slate-600"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-dark-border light:border-slate-200">
            <a
              href="#contact"
              onClick={handleNavLinkClick}
              className="mobile-nav-link w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-medium"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
