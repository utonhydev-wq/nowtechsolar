import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, ArrowRight, Zap, Sun } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden bg-gradient-to-r from-sky-900 via-sky-800 to-orange-600 text-white shadow-2xl">
      {/* Decorative Aura */}
      <div className="absolute inset-0 bg-circuit-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-200 bg-orange-950/40 border border-orange-400/40 px-3 py-1 rounded-full mb-4">
          <Sun className="w-3.5 h-3.5 text-orange-400 animate-spin" style={{ animationDuration: '8s' }} />
          Economize até 95%
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight" style={{ textWrap: 'balance' }}>
          QUER ECONOMIZAR NA SUA CONTA DE ENERGIA?
        </h2>

        <p className="text-base sm:text-xl text-sky-100 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Fale com a NowTech Energia Solar e descubra uma solução personalizada para você.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-extrabold text-slate-900 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-2xl shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <MessageCircle className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span>FALAR COM UM ESPECIALISTA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-6 text-xs text-sky-200/90 font-medium">
          Atendimento personalizado em Pernambuco e todo o Nordeste
        </div>
      </div>
    </section>
  );
};
