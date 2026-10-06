import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Sun, CheckCircle2, Shield, Zap, Sparkles, Building, Home, Factory } from 'lucide-react';

export const CasesShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'residencial' | 'comercial' | 'equipamentos'>('todos');

  const cases = [
    {
      id: 1,
      category: 'residencial',
      title: 'Instalação Residencial Fotovoltaica',
      location: 'Pernambuco',
      description: 'Sistema completo em telhado cerâmico com módulos de alta eficiência e estrutura de alumínio anticorrosiva.',
      highlights: ['Economia de até 95% na conta', 'Monitoramento via aplicativo', 'Garantia estrutural'],
      type: 'Residência Unifamiliar'
    },
    {
      id: 2,
      category: 'comercial',
      title: 'Sistema Solar Corporativo & Galpão',
      location: 'Grande Recife / PE',
      description: 'Geração distribuída para redução drástica dos custos fixos de eletricidade e proteção contra tarifas sazonais.',
      highlights: ['Retorno do investimento acelerado', 'Previsibilidade orçamentária', 'Sustentabilidade corporativa'],
      type: 'Comércio / Centro Logístico'
    },
    {
      id: 3,
      category: 'equipamentos',
      title: 'Estação de Inversores Homologados',
      location: 'Instalação Padrão Concessionária',
      description: 'Inversores de alta precisão com quadro elétrico de proteção CA/CC (Stringbox), DPS e disjuntores certificados.',
      highlights: ['Inversores de ponta (ex: Growatt)', 'Proteção contra surtos elétricos', 'Homologação ágil'],
      type: 'Equipamentos & Proteção'
    },
    {
      id: 4,
      category: 'residencial',
      title: 'Autonomia Solar para Condomínios & Casas',
      location: 'Região Metropolitana do Recife',
      description: 'Dimensionamento preciso para atender ar-condicionado, eletrodomésticos pesados e iluminação contínua.',
      highlights: ['Zero barulho', 'Vida útil de 25+ anos', 'Engenharia personalizada'],
      type: 'Residencial'
    }
  ];

  const filteredCases = activeFilter === 'todos' 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <section className="py-16 sm:py-24 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            Engenharia & Rigor Técnico
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            CASES DE SUCESSO
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Projetos reais executados com rigor técnico, garantindo máxima geração e segurança para nossos clientes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'todos', label: 'Todos os Projetos' },
            { id: 'residencial', label: 'Residencial' },
            { id: 'comercial', label: 'Comercial & Indústria' },
            { id: 'equipamentos', label: 'Inversores & Componentes' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                activeFilter === f.id
                  ? 'bg-sky-900 text-white shadow-md shadow-sky-950/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/90'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-sky-300/80 rounded-3xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Visual Technical Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-sky-800 bg-sky-100/80 px-2.5 py-1 rounded-lg">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">📍 {item.location}</span>
                </div>

                {/* Illustrated Solar Blueprint Box */}
                <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-sky-900 via-slate-900 to-sky-950 p-4 mb-5 flex flex-col justify-between text-white relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-circuit-grid opacity-20" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
                      <Zap className="w-3.5 h-3.5" />
                      <span>SISTEMA FOTOVOLTAICO NOWTECH</span>
                    </div>
                    <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded text-sky-200">
                      Homologado
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-300">
                      Eficiência Energética & Durabilidade Máxima
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600">✓ Alto Desempenho</span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                >
                  <span>Pedir projeto similar</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
