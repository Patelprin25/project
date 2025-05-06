import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out backdrop-blur-xl ${
        isScrolled ? 'bg-white/90 shadow-xl py-4' : 'bg-transparent shadow-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/AET logo.png"
            alt="Arya EarthTech Logo"
            className="h-12 w-auto object-contain drop-shadow-xl"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative group px-5 py-2 text-lg font-semibold transition-all duration-300 ${
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
            className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Talk to Sales
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-10 text-gray-700 hover:text-green-700 transition duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-6 z-40"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-8 py-3 rounded-2xl text-2xl font-semibold transition ${
                      isActive
                        ? 'text-green-700 bg-green-100 shadow-lg'
                        : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-10 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white text-xl font-semibold shadow-xl hover:scale-105 transition"
              >
                Talk to Sales
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
