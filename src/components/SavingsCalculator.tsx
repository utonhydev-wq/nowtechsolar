import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Calculator, ArrowRight, Sparkles, CheckCircle2, TrendingDown, Sun } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SavingsCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(650);
  const [propertyType, setPropertyType] = useState<string>('residencial');

  // Solar calculations based on up to 95% savings from commercial presentation
  const estimatedSavingsPercent = 0.95;
  const monthlySavings = Math.round(billAmount * estimatedSavingsPercent);
  const newEstimatedBill = Math.max(30, billAmount - monthlySavings);
  const yearlySavings = monthlySavings * 12;
  const twentyFiveYearSavings = yearlySavings * 25;

  const handleCelebrate = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f97316', '#0284c7', '#fbbf24']
      });
    } catch {
      // fallback gracefully if confetti blocked
    }
  };

  const getWhatsAppSimulatedUrl = () => {
    const text = encodeURIComponent(
      `Olá! Simulei minha conta no site da NowTech Solar:\n• Tipo: ${propertyType.toUpperCase()}\n• Conta atual: R$ ${billAmount.toLocaleString('pt-BR')}/mês\n• Economia estimada de até: R$ ${monthlySavings.toLocaleString('pt-BR')}/mês\n\nGostaria de solicitar um orçamento personalizado! ☀️⚡`
    );
    return `${COMPANY_INFO.whatsappUrl}?text=${text}`;
  };

  const presets = [250, 450, 650, 1200, 2500, 5000];

  return (
    <section id="simulador" className="py-12 sm:py-16 px-4 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Simulador Interativo
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Quanto Você Pode Economizar?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Descubra o impacto real da energia solar no seu bolso. Redução de até 95% na sua fatura de luz com a NowTech.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-100/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Step 1: Property Type */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              1. Selecione o perfil do imóvel:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'residencial', label: 'Residencial', icon: '🏡' },
                { id: 'comercial', label: 'Comercial', icon: '🏢' },
                { id: 'industrial', label: 'Industrial', icon: '🏭' },
                { id: 'rural', label: 'Rural', icon: '🚜' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPropertyType(p.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                    propertyType === p.id
                      ? 'bg-sky-900 text-white shadow-md shadow-sky-950/20'
                      : 'bg-slate-100 hover:bg-slate-200/90 text-slate-700'
                  }`}
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                2. Valor médio da sua conta de luz atual:
              </label>
              <div className="text-xl sm:text-2xl font-black text-sky-900 tabular-nums">
                R$ {billAmount.toLocaleString('pt-BR')}
                <span className="text-xs font-normal text-slate-500"> /mês</span>
              </div>
            </div>

            <input
              type="range"
              min="150"
              max="10000"
              step="50"
              value={billAmount}
              onChange={(e) => setBillAmount(Number(e.target.value))}
              onMouseUp={handleCelebrate}
              onTouchEnd={handleCelebrate}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
            />

            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[11px] font-semibold text-slate-400 mr-1 self-center">Valores rápidos:</span>
              {presets.map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    setBillAmount(val);
                    handleCelebrate();
                  }}
                  className={`text-xs px-2.5 py-1 rounded-lg transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-medium tabular-nums ${
                    billAmount === val
                      ? 'bg-orange-500 text-white font-bold shadow-sm shadow-orange-500/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  R$ {val}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-5 sm:p-6 mb-6">
            <div className="flex items-center justify-between pb-4 border-b border-sky-800/60 mb-4">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-emerald-400" />
                <span className="text-xs sm:text-sm font-semibold text-sky-200">Economia Estimada (Até 95%)</span>
              </div>
              <span className="text-xs font-bold text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded-full">
                Sustentável
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-xs text-slate-400 mb-1">Economia Mensal</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400 tabular-nums">
                  ~ R$ {monthlySavings.toLocaleString('pt-BR')}
                </div>
                <div className="text-[11px] text-slate-400">Nova conta: ~R$ {newEstimatedBill.toLocaleString('pt-BR')}</div>
              </div>

              <div className="sm:border-l sm:border-r border-sky-800/60 sm:px-4">
                <div className="text-xs text-slate-400 mb-1">Economia em 1 Ano</div>
                <div className="text-xl sm:text-2xl font-black text-white tabular-nums">
                  R$ {yearlySavings.toLocaleString('pt-BR')}
                </div>
                <div className="text-[11px] text-slate-400">12 meses acumulados</div>
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-1">Economia em 25 Anos</div>
                <div className="text-xl sm:text-2xl font-black text-amber-400 tabular-nums">
                  R$ {twentyFiveYearSavings.toLocaleString('pt-BR')}
                </div>
                <div className="text-[11px] text-slate-400">Vida útil do sistema</div>
              </div>
            </div>
          </div>

          {/* Guarantee / Callout */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-sky-50/70 p-3 rounded-xl border border-sky-100">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              Projetos desenvolvidos sob medida pela equipe NowTech com materiais de alta durabilidade e homologação rápida na concessionária.
            </span>
          </div>

          {/* Direct CTA Button */}
          <a
            href={getWhatsAppSimulatedUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCelebrate}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group"
          >
            <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            <span>SOLICITAR PROJETO COM ESSA ECONOMIA</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
