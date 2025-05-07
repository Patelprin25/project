<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg mt-0'
            : 'bg-white/15 backdrop-blur-[10px] mt-2 sm:mt-5'
          }
          mx-2 sm:mx-5 rounded-[25px] sm:rounded-[50px] border border-white/20
          shadow-[0_4px_15px_rgba(0,0,0,0.1)]
          min-h-[50px] sm:min-h-[60px]`}
      >
        <nav className="container mx-auto px-3 sm:px-5 md:px-6">
          <div className="flex items-center justify-between h-[50px] sm:h-[60px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/AET logo.png" 
                alt="AryaEarthTech" 
                className="h-6 sm:h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
>>>>>>> 994fcc9b1c5cc7e922ec9dbee186e6523fbe678e
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
<<<<<<< HEAD
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-8 py-3 rounded-2xl text-2xl font-semibold transition ${
                      isActive
                        ? 'text-green-700 bg-green-100 shadow-lg'
                        : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                    }`
                  }
=======
                  className={({ isActive }) => `
                    text-lg font-medium transition-all duration-300
                    ${isActive 
                      ? 'text-[#00A0E3]' 
                      : 'text-eco-dark hover:text-[#00A0E3]'
                    }
                    relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                    after:h-0.5 after:bg-[#00A0E3] after:transition-all after:duration-300
                    ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                  `}
>>>>>>> 994fcc9b1c5cc7e922ec9dbee186e6523fbe678e
                >
                  {link.name}
                </NavLink>
              ))}
<<<<<<< HEAD
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
=======
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/20 text-eco-dark focus:outline-none focus:ring-2 focus:ring-[#00A0E3]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-full 
            bg-white/80 backdrop-blur-md
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-2">
                <img 
                  src="/aryaearthtech.png" 
                  alt="AryaEarthTech" 
                  className="h-8 w-auto"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/20 text-eco-dark"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 px-4 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `
                    block py-4 text-xl font-medium transition-all duration-300
                    ${isActive 
                      ? 'text-[#00A0E3] bg-white/10' 
                      : 'text-eco-dark hover:text-[#00A0E3] hover:bg-white/10'
                    }
                    rounded-lg px-6 mb-3
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
>>>>>>> 994fcc9b1c5cc7e922ec9dbee186e6523fbe678e
