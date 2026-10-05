import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, FileSearch, Compass, Wrench, Sun, Cpu, Coins, Home, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'etapas' | 'tecnologia'>('etapas');

  const getProcessIcon = (step: string) => {
    switch (step) {
      case '01':
        return <MessageSquare className="w-5 h-5" />;
      case '02':
        return <FileSearch className="w-5 h-5" />;
      case '03':
        return <Compass className="w-5 h-5" />;
      case '04':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  const getTechIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Sun className="w-6 h-6 text-amber-500" />;
      case '02':
        return <Cpu className="w-6 h-6 text-sky-500" />;
      case '03':
        return <Home className="w-6 h-6 text-indigo-500" />;
      default:
        return <Coins className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sun className="w-3.5 h-3.5 text-orange-500" />
            Passo a Passo Simples
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            COMO FUNCIONA?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Do primeiro contato à geração de energia limpa no seu imóvel com total suporte e segurança.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('etapas')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'etapas'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              5 Etapas do Seu Projeto
            </button>
            <button
              onClick={() => setActiveTab('tecnologia')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'tecnologia'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Como Funciona a Tecnologia
            </button>
          </div>
        </div>

        {/* Tab 1: 5 Stages of the Project */}
        {activeTab === 'etapas' && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {COMPANY_INFO.processStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-orange-500 group-hover:scale-110 transition-transform">
                      {stage.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                      {getProcessIcon(stage.step)}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-2 leading-tight">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300 pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: How Solar Energy Works Technically (From Presentation Page 5) */}
        {activeTab === 'tecnologia' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.howSolarWorks.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    {getTechIcon(item.step)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Etapa {item.step}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action prompt */}
        <div className="mt-12 text-center">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md transition-colors"
          >
            <span>Iniciar Análise Gratuita do Meu Imóvel</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
