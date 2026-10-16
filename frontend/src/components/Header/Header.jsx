import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Sports', 'Matches', 'Tournaments', 'Teams', 'Contact'];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-lg z-50 py-4 px-6 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 animate-slideInLeft">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-2xl animate-pulse-slow">
            ⚽
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              SPORTSPRO
            </h1>
            <p className="text-xs text-gray-400">Management System</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link text-white hover:text-orange-400 transition-colors text-sm font-semibold uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-gray-900 p-8 shadow-2xl ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col gap-6 mt-16">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-orange-400 text-lg font-semibold py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
