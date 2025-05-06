import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/AET logo.png" alt="Arya EarthTech" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-800">
            
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-1 py-2 font-medium transition ${
                    isActive
                      ? 'text-green-600'
                      : 'text-gray-600 hover:text-green-600'
                  }`
                }
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 group-hover:w-full transition-all duration-200" />
              </NavLink>
            ))}

            {/* Special “Talk to Sales” Button */}
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-105 transition"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-gray-600 hover:text-green-600 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'bg-green-50 text-green-600'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                    } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-2 text-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Push content below fixed nav */}
      <div className="h-16" />
    </nav>
  );
};

export default Navbar;
