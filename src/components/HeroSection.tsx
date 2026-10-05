import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Sun, ArrowRight, ShieldCheck, TrendingDown, MapPin, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenDeck: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDeck }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900 text-white">
      {/* Background Solar & Tech Aura */}
      <div className="absolute inset-0 bg-circuit-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-tr from-sky-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Company Official Logo Showcase */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-block px-6 sm:px-10 py-4 sm:py-5 rounded-2xl sm:rounded-3xl bg-[#090E17]/95 border border-sky-400/50 backdrop-blur-xl shadow-[0_0_35px_-5px_rgba(14,165,233,0.4),0_15px_30px_-5px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-sky-300 relative overflow-hidden group">
            {/* Contrast-enhancing radial background backlight */}
            <div className="absolute inset-0 bg-radial from-sky-500/15 via-transparent to-transparent pointer-events-none" />
            
            <img
              src={COMPANY_INFO.logoHorizontalDarkUrl}
              alt="NowTech Energia Solar"
              className="h-14 sm:h-20 md:h-22 w-auto max-w-[280px] sm:max-w-sm md:max-w-md object-contain drop-shadow-[0_2px_14px_rgba(56,189,248,0.4)] mx-auto relative z-10 animate-float-slow transition-transform duration-300 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Clean unboxed metadata context */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-orange-400 mb-4 tracking-wide uppercase">
          <span className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full text-orange-300">
            <Sun className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            O Futuro é Agora!
          </span>
          <span className="text-slate-400 hidden sm:inline">·</span>
          <span className="flex items-center gap-1 text-slate-300 bg-sky-900/40 border border-sky-700/40 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            Pernambuco & Nordeste
          </span>
        </div>

        {/* Primary Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight" style={{ textWrap: 'balance' }}>
          {COMPANY_INFO.slogan}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
          {COMPANY_INFO.heroSubtitle}
        </p>

        {/* Primary CTA Button with Solar Glow */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 rounded-2xl shadow-xl shadow-orange-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Sun className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-300" />
            <span>SOLICITAR ORÇAMENTO</span>
            <ArrowRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Small prompt requested */}
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            Fale com a nossa equipe e descubra a melhor solução para você.
          </p>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto pt-6 border-t border-sky-900/40 text-left">
          <div className="bg-slate-900/60 border border-sky-900/50 rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
              <TrendingDown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Até 95%</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Economia na conta</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-sky-900/50 rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Equipe</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Especializada</div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-sky-900/50 rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Durabilidade</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Garantia estendida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
