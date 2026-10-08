import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, Calculator, FileText, Instagram, Youtube, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

interface QuickBioLinksProps {
  onOpenDeck: () => void;
  onScrollToCalculator: () => void;
}

export const QuickBioLinks: React.FC<QuickBioLinksProps> = ({ onOpenDeck, onScrollToCalculator }) => {
  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-xl mx-auto px-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-sky-100 flex flex-col gap-3">
        <div className="text-center pb-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            Acesso Rápido · Bio Links Oficiais
          </div>
        </div>

        {/* Link 1: Primary WhatsApp Solar Quote */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold shadow-md shadow-orange-500/20 hover-lift active:scale-[0.99]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <span className="text-xl">☀️</span>
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-extrabold leading-tight">SOLICITAR ORÇAMENTO</div>
              <div className="text-xs text-orange-100 font-medium">Atendimento rápido pelo WhatsApp</div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
        </a>

        {/* Link 2: Central de Atendimento */}
        <a
          href={COMPANY_INFO.centralAtendimentoWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.99]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-extrabold leading-tight">CENTRAL DE ATENDIMENTO</div>
              <div className="text-xs text-slate-300 font-medium">Fale conosco no WhatsApp</div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0" />
        </a>

        {/* Link 3: Interactive Solar Calculator */}
        <button
          onClick={onScrollToCalculator}
          className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-sky-50 hover:bg-sky-100/90 text-sky-950 font-bold border border-sky-200/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.99]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-extrabold text-sky-950 leading-tight">SIMULAR MINHA ECONOMIA</div>
              <div className="text-xs text-sky-700 font-medium">Descubra quanto você pode economizar</div>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-sky-200/80 text-sky-800 rounded-lg">Simular</span>
        </button>

        {/* Link 4: Commercial Presentation Modal */}
        <button
          onClick={onOpenDeck}
          className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-slate-100/90 text-slate-800 font-bold border border-slate-200/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.99]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-bold text-slate-900 leading-tight">CONHEÇA A NOWTECH</div>
              <div className="text-xs text-slate-500 font-medium">Apresentação Comercial completa</div>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg">Ver PDF</span>
        </button>

        {/* Links 5, 6, 7 & 8: Socials & Location in 2x2 grid */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 p-3 rounded-xl bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 border border-pink-200/60 hover:border-pink-300 text-slate-800 text-xs sm:text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="font-extrabold truncate">Instagram</div>
              <div className="text-[11px] text-slate-500 font-medium truncate">{COMPANY_INFO.instagramHandle}</div>
            </div>
          </a>

          <a
            href={COMPANY_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 p-3 rounded-xl bg-red-50/70 border border-red-200/70 hover:border-red-300 text-slate-800 text-xs sm:text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Youtube className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="font-extrabold truncate">YouTube</div>
              <div className="text-[11px] text-slate-500 font-medium truncate">{COMPANY_INFO.youtubeHandle}</div>
            </div>
          </a>

          <a
            href={COMPANY_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/90 border border-slate-300/80 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
              <TikTokIcon className="w-4 h-4 text-white" />
            </div>
            <div className="truncate">
              <div className="font-extrabold truncate">TikTok</div>
              <div className="text-[11px] text-slate-500 font-medium truncate">{COMPANY_INFO.tiktokHandle}</div>
            </div>
          </a>

          <a
            href={COMPANY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70 hover:border-emerald-300 text-slate-800 text-xs sm:text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="font-extrabold truncate">Onde Estamos</div>
              <div className="text-[11px] text-slate-500 font-medium truncate">Guararapes, PE</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
