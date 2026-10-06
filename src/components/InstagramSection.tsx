import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Instagram, ArrowUpRight, Sparkles, Sun, CheckCircle2 } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-sky-900/60 shadow-xl relative overflow-hidden">
          {/* Subtle gradient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-rose-500/20 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                <Instagram className="w-3.5 h-3.5" />
                Redes Sociais Oficiais
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                ACOMPANHE A NOWTECH
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Veja nossos projetos, novidades e conteúdos sobre energia solar. Acompanhe instalações reais em Pernambuco e tire suas dúvidas.
              </p>

              {/* Instagram Handle & Verified Badge */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white flex items-center gap-1.5">
                    <span>{COMPANY_INFO.instagramHandle}</span>
                    <CheckCircle2 className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                  </div>
                  <div className="text-xs text-slate-400 font-medium">NowTech Energia Solar no Instagram</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto shrink-0">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 rounded-2xl shadow-xl shadow-rose-900/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-rose-900/40 active:translate-y-0 active:scale-[0.98] group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>SEGUIR NO INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
