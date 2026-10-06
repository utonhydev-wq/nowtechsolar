import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import headerLogo from '../assets/images/image_49dff514-d49b-452e-8430-d6cc798cd235.png';

interface HeaderNavProps {
  onOpenDeck: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenDeck }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-sky-900/40 shadow-lg shadow-sky-950/20 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Logo */}
        <a href="#" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1">
          <img
            src={headerLogo}
            alt="NowTech Energia Solar"
            width={40}
            height={40}
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-md"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col text-left">
            <span className="text-base sm:text-lg font-black tracking-tight leading-none text-white">
              NOW<span className="text-orange-500">TECH</span>
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.22em] font-bold text-sky-300 leading-tight uppercase mt-0.5">
              Energia Solar
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-orange-400 transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenDeck}
            className="text-xs font-semibold text-sky-300 hover:text-white bg-sky-950/70 hover:bg-sky-900/80 border border-sky-600/50 hover:border-sky-400 px-3 py-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            Apresentação
          </button>
        </nav>

        {/* Zone 3: Primary Action Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full shadow-md shadow-orange-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Solicitar Orçamento</span>
            <span className="sm:hidden">Orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 border-b border-sky-900/60 backdrop-blur-xl px-4 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-orange-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeck();
              }}
              className="text-left px-3 py-2 text-base font-medium text-sky-400 hover:bg-sky-950/60 rounded-lg transition-colors"
            >
              📄 Conhecer Apresentação Comercial
            </button>
            <div className="pt-2 border-t border-slate-800">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
