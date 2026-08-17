import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logoImg from '../assets/yhankoIMG.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme state
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      // Default to dark mode for this template, unless already set to light
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Módulos', href: '#demonstracao' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Planos', href: '#planos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img 
              src={logoImg} 
              alt="Yhanko Educa Logo" 
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-body-md font-medium text-on-surface hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button Desktop */}
            <button
              onClick={toggleTheme}
              className="text-on-surface hover:text-primary p-2 transition-colors duration-200"
              aria-label="Alternar Tema"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className="text-on-surface hover:text-primary p-2"
              aria-label="Alternar Tema"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-on-surface hover:text-primary p-2"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-2xl border-b border-outline px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-body-lg font-medium text-on-surface hover:text-primary py-2"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
};
