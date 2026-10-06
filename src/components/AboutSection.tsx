import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Eye, Target, Users, MapPin, Sparkles, Award, ShieldCheck, ChevronRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenDeck: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDeck }) => {
  return (
    <section id="sobre" className="py-16 sm:py-24 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            Institucional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sobre a NowTech Energia Solar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Soluções inteligentes, sustentáveis e acessíveis para transformar telhados em fontes de economia e liberdade no Nordeste.
          </p>
        </div>

        {/* Introduction Highlight Card */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-12 border border-sky-900/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block text-xs font-extrabold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {COMPANY_INFO.introduction.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
              Democratizando a Energia Solar em Pernambuco
            </h3>
            <p className="text-slate-200 text-base sm:text-lg mb-4 leading-relaxed font-light">
              {COMPANY_INFO.introduction.lead}
            </p>
            <p className="text-sky-300 text-sm sm:text-base font-medium leading-relaxed mb-6">
              {COMPANY_INFO.introduction.objective}
            </p>

            <button
              onClick={onOpenDeck}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-sky-800/80 hover:bg-sky-700 px-4 py-2.5 rounded-xl border border-sky-600/50 transition-colors"
            >
              <span>Ver Apresentação Comercial Oficial</span>
              <ChevronRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>

        {/* Vision & Mission Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Vision */}
          <div className="bg-gradient-to-br from-orange-500/5 via-orange-500/10 to-transparent border border-orange-200/80 rounded-3xl p-7 relative">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Nossa Visão</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-sky-500/5 via-sky-500/10 to-transparent border border-sky-200/80 rounded-3xl p-7 relative">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-sky-600/20">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Nossa Missão</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="border-t border-slate-100 pt-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-sky-600" />
              Liderança
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Sócios Fundadores
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {COMPANY_INFO.founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-sky-300/80 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-900 to-sky-700 text-white flex items-center justify-center font-bold text-xl shadow-md">
                    {founder.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{founder.name}</h4>
                    <span className="inline-block text-xs font-bold text-orange-600 bg-orange-100/80 px-2.5 py-0.5 rounded-full">
                      {founder.role}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
