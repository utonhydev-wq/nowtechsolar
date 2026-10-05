import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { QuickBioLinks } from './components/QuickBioLinks';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { CasesShowcase } from './components/CasesShowcase';
import { CtaBanner } from './components/CtaBanner';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { CommercialDeckModal } from './components/CommercialDeckModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';

export default function App() {
  const [deckModalOpen, setDeckModalOpen] = useState(false);

  const scrollToCalculator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-orange-500 selection:text-white">
      {/* Top Bar Navigation */}
      <HeaderNav onOpenDeck={() => setDeckModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Topo */}
        <HeroSection onOpenDeck={() => setDeckModalOpen(true)} />

        {/* Quick Instagram Bio Links Card */}
        <QuickBioLinks
          onOpenDeck={() => setDeckModalOpen(true)}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* 3. Nossas Soluções / Serviços */}
        <ServicesSection />

        {/* 4. Por que escolher a NowTech? & Impacto Positivo */}
        <BenefitsSection />

        {/* 5. Como Funciona? */}
        <HowItWorksSection />

        {/* Interactive Solar Savings Simulator */}
        <SavingsCalculator />

        {/* Cases de Sucesso & Engenharia Fotovoltaica */}
        <CasesShowcase />

        {/* 2. Sobre a NowTech & Sócios Fundadores */}
        <AboutSection onOpenDeck={() => setDeckModalOpen(true)} />

        {/* 6. Chamada para Orçamento de Destaque */}
        <CtaBanner />

        {/* 7. Instagram Section */}
        <InstagramSection />

        {/* 8. Localização / Onde Estamos */}
        <LocationSection />
      </main>

      {/* 12. Rodapé */}
      <Footer onOpenDeck={() => setDeckModalOpen(true)} />

      {/* 11. Botão Fixo no Celular (Mobile Sticky WhatsApp) */}
      <MobileStickyBar />

      {/* 9. Apresentação Comercial Modal ("CONHEÇA A NOWTECH") */}
      <CommercialDeckModal
        isOpen={deckModalOpen}
        onClose={() => setDeckModalOpen(false)}
      />
    </div>
  );
}
