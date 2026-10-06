import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { X, ChevronLeft, ChevronRight, Sun, MessageCircle, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Users, Globe } from 'lucide-react';

interface CommercialDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommercialDeckModal: React.FC<CommercialDeckModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentPage((p) => Math.min(11, p + 1));
      if (e.key === 'ArrowLeft') setCurrentPage((p) => Math.max(1, p - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slides = [
    {
      page: 1,
      title: "Apresentação Comercial",
      subtitle: "Soluções Inteligentes em Energia Solar",
      content: (
        <div className="text-center py-6">
          <div className="inline-block p-3 sm:p-4 rounded-2xl bg-white border border-sky-200/80 mb-6 shadow-xl overflow-hidden max-w-full">
            <img
              src={COMPANY_INFO.commercialCoverUrl}
              alt="Apresentação Comercial NowTech Energia Solar"
              width={480}
              height={320}
              className="max-h-52 sm:max-h-64 w-auto object-contain mx-auto rounded-xl transition-transform duration-200 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            APRESENTAÇÃO COMERCIAL
          </h3>
          <p className="text-orange-600 font-bold text-base sm:text-lg mb-6">
            Soluções Inteligentes em Energia Solar
          </p>
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100 max-w-md mx-auto text-xs sm:text-sm text-slate-600">
            Apresentação institucional completa com soluções para residências, empresas, indústrias e materiais elétricos em Pernambuco e Nordeste.
          </div>
        </div>
      )
    },
    {
      page: 2,
      title: "Introdução",
      subtitle: "O Futuro é Agora!",
      content: (
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-orange-600 bg-orange-100 uppercase">
            Página 02 · Introdução
          </div>
          <p>
            A energia solar é uma fonte <strong>limpa, renovável e inesgotável</strong>. Os sistemas fotovoltaicos convertem a luz do sol em energia elétrica de forma eficiente e silenciosa. Na Now Tech Solar, acreditamos que sustentabilidade e economia podem caminhar lado a lado.
          </p>
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200/80 text-sky-950 font-medium">
            🎯 <strong>Nosso objetivo:</strong> Democratizar o acesso à energia solar em Pernambuco, levando autonomia energética para residências, comércios, indústrias e áreas rurais.
          </div>
        </div>
      )
    },
    {
      page: 3,
      title: "Nossa Visão & Missão",
      subtitle: "Compromisso com o Nordeste",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200">
            <h4 className="font-extrabold text-orange-800 text-base mb-2">Visão</h4>
            <p className="text-slate-700 leading-relaxed">
              Ser referência em energia solar no Nordeste, não só pela tecnologia, mas pela forma como cuidamos de cada projeto e de cada pessoa. Crescer com consciência, conectar ideias, impactar comunidades e mostrar que dá, sim, pra fazer diferente e fazer bem feito.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200">
            <h4 className="font-extrabold text-sky-800 text-base mb-2">Missão</h4>
            <p className="text-slate-700 leading-relaxed">
              Levar energia solar de forma acessível, honesta e inteligente, transformando telhados em fonte de economia, sustentabilidade e liberdade. Mais do que vender placas, queremos construir relações de confiança, com soluções que façam sentido pra quem acredita no poder do sol.
            </p>
          </div>
        </div>
      )
    },
    {
      page: 4,
      title: "Nossas Soluções",
      subtitle: "Aproveitando o poder do sol",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="text-lg">💡</span>
            <div>
              <div className="font-bold text-slate-900">01. Instalação Residencial de Painéis Solares</div>
              <div className="text-slate-600">Soluções inteligentes para quem deseja economizar e valorizar sua casa com sustentabilidade.</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="text-lg">🏢</span>
            <div>
              <div className="font-bold text-slate-900">02. Sistemas Solares para Empresas e Indústrias</div>
              <div className="text-slate-600">Reduza os custos operacionais da sua empresa e promova uma imagem sustentável.</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
            <span className="text-lg">⚡</span>
            <div>
              <div className="font-bold text-slate-900">Fornecimento de Materiais Elétricos</div>
              <div className="text-slate-700">Além das soluções completas em energia solar, a Now Tech Solar também atua como fornecedora de materiais elétricos voltados para integradores e instaladores.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      page: 5,
      title: "Como Funciona a Energia Solar",
      subtitle: "Etapas do sistema fotovoltaico",
      content: (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
            <div className="font-bold text-orange-900 mb-1">01. Captação da Luz Solar</div>
            <div className="text-slate-600">Os painéis solares fotovoltaicos captam a luz do sol.</div>
          </div>
          <div className="p-3 bg-sky-50 rounded-xl border border-sky-200">
            <div className="font-bold text-sky-900 mb-1">02. Conversão em Energia</div>
            <div className="text-slate-600">O inversor solar transforma essa energia em corrente alternada, pronta para uso.</div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="font-bold text-emerald-900 mb-1">03. Distribuição no Imóvel</div>
            <div className="text-slate-600">A energia é usada nos equipamentos e iluminação do imóvel.</div>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
            <div className="font-bold text-amber-900 mb-1">04. Geração de Créditos</div>
            <div className="text-slate-600">O excedente vai para a rede elétrica e gera créditos de energia — economia na conta!</div>
          </div>
        </div>
      )
    },
    {
      page: 6,
      title: "Benefícios da Energia Solar",
      subtitle: "Economia e Durabilidade",
      content: (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 border rounded-xl">
            <div className="font-bold text-slate-900 text-sm">ECONOMIA</div>
            <div className="text-orange-600 font-extrabold text-base my-0.5">Até 95%</div>
            <div className="text-slate-600">Redução na conta de luz nas despesas com energia.</div>
          </div>
          <div className="p-3.5 bg-slate-50 border rounded-xl">
            <div className="font-bold text-slate-900 text-sm">INDEPENDÊNCIA</div>
            <div className="text-sky-600 font-extrabold text-base my-0.5">Autonomia</div>
            <div className="text-slate-600">Independência das tarifas flutuantes das concessionárias.</div>
          </div>
          <div className="p-3.5 bg-slate-50 border rounded-xl">
            <div className="font-bold text-slate-900 text-sm">BAIXA MANUTENÇÃO</div>
            <div className="text-emerald-600 font-extrabold text-base my-0.5">Longo Prazo</div>
            <div className="text-slate-600">Sistemas duráveis com garantia estendida e mínimo custo.</div>
          </div>
          <div className="p-3.5 bg-slate-50 border rounded-xl">
            <div className="font-bold text-slate-900 text-sm">SUSTENTABILIDADE</div>
            <div className="text-teal-600 font-extrabold text-base my-0.5">Limpa & Renovável</div>
            <div className="text-slate-600">Zero emissão de CO₂, ajudando o planeta e futuras gerações.</div>
          </div>
        </div>
      )
    },
    {
      page: 7,
      title: "Cases de Sucesso",
      subtitle: "Instalações Homologadas em Pernambuco",
      content: (
        <div className="text-center space-y-4">
          <p className="text-xs sm:text-sm text-slate-600">
            Projetos reais executados com rigor técnico pela NowTech Energia Solar:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-left">
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
              <div className="font-bold text-sky-950">Telhados Residenciais</div>
              <div className="text-[11px] text-slate-500">Casas térreas e sobrados com fixação estrutural segura.</div>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
              <div className="font-bold text-sky-950">Galpões Comerciais</div>
              <div className="text-[11px] text-slate-500">Instalações em telhas metálicas e lajes corporativas.</div>
            </div>
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
              <div className="font-bold text-sky-950">Inversores Homologados</div>
              <div className="text-[11px] text-slate-500">Inversores Growatt e quadros elétricos de proteção padrão concessionária.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      page: 8,
      title: "Sócios Fundadores",
      subtitle: "Gestão Estratégica e Comercial",
      content: (
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <div className="font-extrabold text-slate-900 text-sm">WILLIAM BERNARDO</div>
              <span className="text-[11px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">Diretor Financeiro</span>
            </div>
            <div className="text-slate-600 leading-relaxed">
              Diretor Financeiro da Now Tech Solar, é o responsável por conduzir com excelência a gestão dos recursos da empresa. Com visão estratégica e foco em resultados, garante a estabilidade e o crescimento sustentável do negócio.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <div className="font-extrabold text-slate-900 text-sm">CARLOS EDUARDO</div>
              <span className="text-[11px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">Diretor Comercial</span>
            </div>
            <div className="text-slate-600 leading-relaxed">
              Diretor Comercial, atua na linha de frente com clientes e parceiros, liderando com dinamismo e impulsionando a expansão da energia solar em todo o estado.
            </div>
          </div>
        </div>
      )
    },
    {
      page: 9,
      title: "Impacto Ambiental Positivo",
      subtitle: "Compromisso ecológico",
      content: (
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
            <div className="font-bold text-emerald-950 mb-0.5">🌱 Redução das emissões de CO₂</div>
            <div className="text-slate-600">Cada sistema solar instalado reduz drasticamente a emissão de gases do efeito estufa.</div>
          </div>
          <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
            <div className="font-bold text-emerald-950 mb-0.5">⚡ Contribuição para a Matriz Energética Sustentável</div>
            <div className="text-slate-600">Colaboramos para diminuir a dependência de fontes não renováveis e promover o uso responsável da energia.</div>
          </div>
          <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
            <div className="font-bold text-emerald-950 mb-0.5">💧 Zero desperdício de recursos naturais</div>
            <div className="text-slate-600">Energia limpa sem uso de água ou combustíveis fósseis.</div>
          </div>
        </div>
      )
    },
    {
      page: 10,
      title: "O Futuro da Energia Solar",
      subtitle: "Inovação contínua",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p>
            A energia solar é um dos pilares da transformação energética global. Na Now Tech Solar, continuamos investindo em tecnologia, capacitação e atendimento para expandir nossas soluções e alcançar ainda mais pessoas e empresas.
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 bg-slate-100 rounded-xl font-bold text-slate-800">💼 Parcerias estratégicas</div>
            <div className="p-3 bg-slate-100 rounded-xl font-bold text-slate-800">📈 Crescimento sustentável</div>
            <div className="p-3 bg-slate-100 rounded-xl font-bold text-slate-800">🔧 Inovação constante</div>
          </div>
        </div>
      )
    },
    {
      page: 11,
      title: "Obrigado! Entre em Contato",
      subtitle: "NowTech Energia Solar",
      content: (
        <div className="text-center space-y-4">
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 max-w-sm mx-auto text-xs sm:text-sm">
            <div className="font-bold text-slate-900 mb-1">📍 Endereço</div>
            <div className="text-slate-600 mb-3">{COMPANY_INFO.address}</div>
            <div className="font-bold text-slate-900 mb-1">📞 Telefone</div>
            <div className="text-slate-600 mb-3">{COMPANY_INFO.phone}</div>
            <div className="font-bold text-slate-900 mb-1">✉️ E-mail</div>
            <div className="text-slate-600">{COMPANY_INFO.email}</div>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl shadow-md text-sm hover:from-orange-600 hover:to-amber-600"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp Agora</span>
          </a>
        </div>
      )
    }
  ];

  const currentSlide = slides[currentPage - 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-sky-900">
          <div className="flex items-center gap-3">
            <img
              src={COMPANY_INFO.logoTriangleUrl}
              alt="NowTech Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="text-xs font-bold text-orange-400">APRESENTAÇÃO COMERCIAL</div>
              <div className="text-xs text-slate-400">Página {currentPage} de {slides.length}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar apresentação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Slide Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="mb-4 pb-3 border-b border-slate-100">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {currentSlide.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {currentSlide.content}
        </div>

        {/* Modal Bottom Navigation */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 text-slate-700 hover:bg-white hover:border-slate-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-none">
            {slides.map((s) => (
              <button
                key={s.page}
                onClick={() => setCurrentPage(s.page)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  currentPage === s.page
                    ? 'w-6 bg-orange-500 shadow-sm shadow-orange-500/40'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para slide ${s.page}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(11, p + 1))}
            disabled={currentPage === 11}
            className="inline-flex items-center gap-1 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-sky-900 text-white hover:bg-sky-800 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
