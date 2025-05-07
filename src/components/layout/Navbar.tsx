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
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
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
                >
                  {link.name}
                </NavLink>
              ))}
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
