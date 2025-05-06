import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md transition-colors duration-300
        ${isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/20'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/AET logo.png"
            alt="Arya EarthTech"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 font-medium transition ${
                  isActive
                    ? 'text-green-700'
                    : 'text-gray-700 hover:text-green-700'
                }`
              }
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-105 transform transition"
          >
            Talk to Sales
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-green-700 transition"
          onClick={() => setIsMenuOpen(o => !o)}
          aria-label="Open menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white p-8 z-50 shadow-xl"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map(link => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block text-xl font-medium transition ${
                        isActive
                          ? 'text-green-700'
                          : 'text-gray-700 hover:text-green-700'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-4 inline-block text-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-105 transform transition"
                >
                  Talk to Sales
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
