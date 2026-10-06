import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Instagram, MessageCircle, MapPin, Phone, Mail, FileText, ArrowUpRight, Sun } from 'lucide-react';
import footerLogo from '../assets/images/regenerated_image_1791297333794.jpg';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-sky-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Slogan Column */}
          <div className="md:col-span-2">
            <div className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-white border border-sky-800/40 mb-4 shadow-md overflow-hidden">
              <img
                src={footerLogo}
                alt="NowTech Energia Solar"
                style={{ width: '93.439px', height: '96.439px' }}
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-lg font-bold text-white mb-2">
              {COMPANY_INFO.name}
            </div>
            <p className="text-slate-400 text-sm italic max-w-sm mb-6">
              "Energia inteligente para um futuro mais sustentável."
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-all border border-emerald-500/30"
                aria-label="WhatsApp NowTech"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white flex items-center justify-center transition-all border border-rose-500/30"
                aria-label="Instagram NowTech"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-sky-600/20 hover:bg-sky-600 text-sky-400 hover:text-white flex items-center justify-center transition-all border border-sky-500/30"
                aria-label="Localização no Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#solucoes" className="hover:text-orange-400 transition-colors">
                  Nossas Soluções
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-orange-400 transition-colors">
                  Por que escolher a NowTech?
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-orange-400 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-orange-400 transition-colors">
                  Simulador de Economia
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-orange-400 transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDeck}
                  className="text-left text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Apresentação Comercial</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contato Oficial
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:+${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Energia Limpa & Sustentável em Pernambuco</span>
            <Sun className="w-3.5 h-3.5 text-orange-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
