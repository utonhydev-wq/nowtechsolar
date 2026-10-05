import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { TrendingDown, ShieldCheck, Wrench, Leaf, Check, Sparkles, Globe, SunMedium } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingDown':
        return <TrendingDown className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6" />;
      default:
        return <SunMedium className="w-6 h-6" />;
    }
  };

  return (
    <section id="beneficios" className="py-16 sm:py-24 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            Vantagens Comprovadas
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            POR QUE ESCOLHER A NOWTECH?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Benefícios concretos em economia, tecnologia durável e compromisso com o meio ambiente.
          </p>
        </div>

        {/* 4 Core Pillars from presentation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {COMPANY_INFO.benefits.map((b) => (
            <div
              key={b.category}
              className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-900 text-white flex items-center justify-center shadow-md">
                    {getIcon(b.icon)}
                  </div>
                  <span className="text-xs font-black text-orange-600 bg-orange-100/80 px-2 py-0.5 rounded-full">
                    {b.metric}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  {b.category}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-sky-800">
                ✓ {b.metricLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact Positive Card (From Deck Page 9) */}
        <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800/40 relative overflow-hidden shadow-xl mb-12">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4" />
              Impacto Ambiental Positivo
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Energia Limpa que Protege o Futuro do Nordeste
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_INFO.environmentalImpact.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Pillars (From Deck Page 10) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {COMPANY_INFO.futurePillars.map((p, idx) => (
            <div key={idx} className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5">
              <div className="text-sm font-bold text-sky-950 mb-1">{p.title}</div>
              <div className="text-xs text-slate-600">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
