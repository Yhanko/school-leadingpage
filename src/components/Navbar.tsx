import React, { useState } from 'react';
import { GraduationCap, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenLeadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5777] to-[#6366f1] p-[2px] shadow-lg shadow-[#FF5777]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#FF5777]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                yhanko<span className="text-[#FF5777]">Educa</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Gestão Escolar</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-[#FF5777] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="http://localhost:3000/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-300 hover:text-white px-4 py-2 rounded-lg border border-gray-700/60 hover:border-gray-500 transition-all duration-200"
            >
              Acessar Sistema
            </a>
            <button
              onClick={onOpenLeadModal}
              className="gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              Solicitar Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-gray-800 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-300 hover:text-[#FF5777] py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="http://localhost:3000/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-sm font-semibold text-white py-2.5 rounded-lg border border-gray-700 bg-gray-800/50"
            >
              Acessar Sistema
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full gradient-btn text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Solicitar Demonstração Grátis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
