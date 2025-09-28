// components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../features/theme/themeSlice';
import { Menu, X, Moon, Sun, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resources', label: 'Resources' },
    { path: '/blog', label: 'Blog' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/team', label: 'Team' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nano-Nerds
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isActivePath(link.path)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Join/Login Button */}
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Join Club
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-4`}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isActivePath(link.path)
                      ? 'text-blue-600 font-semibold'
                      : darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center"
              >
                Join Club
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;