import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, ArrowRight, Sun } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside 
      aria-label="Atendimento rápido no WhatsApp" 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/95 backdrop-blur-md border-t border-sky-900/60 shadow-2xl safe-area-bottom"
    >
      <div className="max-w-md mx-auto">
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center animate-pulse">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="leading-tight">FALAR NO WHATSAPP</div>
              <div className="text-[10px] text-orange-100 font-medium leading-tight">Orçamento rápido sem compromisso</div>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white/15 px-2.5 py-1 rounded-lg text-xs font-bold">
            <Sun className="w-3.5 h-3.5 text-white" />
            <span>Orçar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
    </aside>
  );
};
