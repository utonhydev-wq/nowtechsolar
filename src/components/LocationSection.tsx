import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, ArrowUpRight, Clock, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 px-4 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            Presença & Atendimento
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            ONDE ESTAMOS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Sede em Pernambuco com atendimento e projetos para todo o Nordeste. Venha nos visitar ou fale diretamente com a equipe.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Endereço</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {COMPANY_INFO.address}
              </p>
              <div className="text-xs font-semibold text-sky-800">
                Guararapes, Jaboatão dos Guararapes - PE
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Abrir rota no Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Telefone & WhatsApp</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Atendimento direto com nossa equipe comercial e suporte técnico.
              </p>
              <div className="text-base font-black text-slate-900 tabular-nums">
                {COMPANY_INFO.phone}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
              >
                <span>Chamar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">E-mail Comercial</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Para propostas formais, orçamentos e parcerias com integradores.
              </p>
              <div className="text-sm font-semibold text-slate-900 break-all">
                {COMPANY_INFO.email}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <span>Enviar e-mail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Map CTA Block */}
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-orange-400 flex items-center justify-center shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Traçar Rota no Google Maps</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Av. Barreto de Menezes, 865 - Guararapes, Jaboatão dos Guararapes - PE
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-orange-50 hover:text-orange-600 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>VER LOCALIZAÇÃO</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
