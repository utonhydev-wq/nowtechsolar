import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Home, Building2, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getWhatsAppServiceUrl = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse no serviço de: "${serviceTitle}" da NowTech Energia Solar. Gostaria de solicitar um orçamento e tirar dúvidas! ☀️⚡`
    );
    return `${COMPANY_INFO.whatsappUrl}?text=${text}`;
  };

  return (
    <section id="solucoes" className="py-16 sm:py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Serviços Especializados
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            NOSSAS SOLUÇÕES
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Aproveitando o poder do sol para levar sustentabilidade, economia real e suprimentos elétricos de alto padrão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {COMPANY_INFO.solutions.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === 0
                  ? 'border-orange-200/80 shadow-md shadow-orange-500/5'
                  : 'border-slate-200/90 shadow-sm'
              }`}
            >
              <div>
                {/* Header row with editorial number and icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-md ${
                      index === 0
                        ? 'bg-gradient-to-tr from-orange-500 to-amber-500 shadow-orange-500/25'
                        : index === 1
                        ? 'bg-gradient-to-tr from-sky-600 to-sky-800 shadow-sky-600/25'
                        : 'bg-gradient-to-tr from-slate-800 to-sky-900 shadow-slate-900/25'
                    }`}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.number}
                  </span>
                </div>

                <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-1">
                  {service.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppServiceUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group/btn ${
                  index === 0
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md'
                }`}
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
