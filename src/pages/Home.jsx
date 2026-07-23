import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { AutomationShowcase } from '../components/AutomationShowcase';
import { RoiCalculator } from '../components/RoiCalculator';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import { WhatsAppWidget } from '../components/WhatsAppWidget';

export const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <SEO
        title="NodeFlow Colombia | Desarrollo de Software, n8n, WhatsApp Bots & IA"
        description="Soluciones integrales de desarrollo de software a medida, automatizaciones avanzadas con n8n, chatbots inteligentes de WhatsApp API y soporte técnico en Medellín, Colombia."
        canonical="https://nodeflow.andresrivera.dev"
      />

      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <Services onOpenContact={() => setIsContactOpen(true)} />
        <AutomationShowcase onOpenContact={() => setIsContactOpen(true)} />
        <RoiCalculator onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WhatsAppWidget />
    </div>
  );
};
