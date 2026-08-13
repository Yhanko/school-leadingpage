import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/yhankoIMG.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#414042] transition-all duration-300">
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
          </div>



          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
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
        <div className="lg:hidden bg-surface/95 backdrop-blur-2xl border-b border-[#414042] px-4 pt-3 pb-6 space-y-3">
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
