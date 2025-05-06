// src/components/layout/Navbar.tsx

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'

const HEADER_HEIGHT = 64 // px

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'FAQ', to: '/faq' },
  { name: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <>
      <motion.header
        initial={{ y: -HEADER_HEIGHT }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          fixed top-0 left-0 w-full z-50 h-[${HEADER_HEIGHT}px]
          backdrop-blur-lg transition-colors duration-300
          ${scrolled ? 'bg-white/90 shadow-lg' : 'bg-white/30'}
        `}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/AET logo.png" alt="Arya EarthTech" className="h-10" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-1 py-2 font-medium transition ${
                    isActive
                      ? 'text-green-700'
                      : 'text-gray-800 hover:text-green-700'
                  }`
                }
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-105 transition"
            >
              Talk to Sales
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 text-gray-800 hover:text-green-700 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 p-6"
            >
              <nav className="flex flex-col space-y-6 mt-10">
                {links.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition ${
                        isActive
                          ? 'text-green-700'
                          : 'text-gray-800 hover:text-green-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-block text-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold"
                >
                  Talk to Sales
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so content isn’t hidden under the fixed header */}
      <div style={{ height: HEADER_HEIGHT }} />
    </>
  )
}
