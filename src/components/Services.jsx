import React from 'react';
import { Smartphone, Globe, Database, Cpu, MessageSquareCode, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

export const Services = ({ onOpenContact }) => {
  const servicesList = [
    {
      id: "mobile",
      icon: Smartphone,
      title: "1. Desarrollo Mobile (Apps iOS / Android)",
      category: "Mobile Native & Hybrid",
      description: "Construimos aplicaciones móviles de alto rendimiento para iOS y Android con React Native y Flutter. Interfaces nativas fluídas, notificaciones push, modo offline y sincronización en tiempo real.",
      tags: ["iOS", "Android", "React Native", "Flutter", "Capacitor"],
      glowColor: "cyan",
      borderColor: "hover:border-cyan-400/50"
    },
    {
      id: "web-saas",
      icon: Globe,
      title: "2. Desarrollo Web & Plataformas SaaS",
      category: "Full-Stack Web Development",
      description: "Diseño y arquitectura de plataformas web escalables, paneles administrativos, e-commerce y software tipo SaaS. Optimización SEO extrema, micro-frontends y tiempos de carga ultra-rápidos.",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "REST / GraphQL"],
      glowColor: "blue",
      borderColor: "hover:border-blue-400/50"
    },
    {
      id: "databases",
      icon: Database,
      title: "3. Diseño y Gestión de Bases de Datos",
      category: "Data Architecture & Analytics",
      description: "Modelado, optimización y migración de bases de datos relacionales y no relacionales. Garantizamos alta disponibilidad, consultas optimizadas, backups automatizados e integridad de datos.",
      tags: ["PostgreSQL", "MongoDB", "Cloud Firestore", "Redis", "Supabase"],
      glowColor: "purple",
      borderColor: "hover:border-purple-400/50"
    },
    {
      id: "automation",
      icon: Cpu,
      title: "4. Automatización Avanzada (n8n & APIs)",
      category: "Process Automation & Integration",
      description: "Conectamos tus herramientas de software existentes (CRM, ERP, pasarelas de pago, facturación electrónica) mediante n8n, Make y webhooks a medida. Elimina tareas repetitivas y errores humanos.",
      tags: ["n8n Workflows", "Webhooks", "Make", "REST APIs", "Zapier"],
      glowColor: "orange",
      borderColor: "hover:border-orange-400/50"
    },
    {
      id: "whatsapp-ai",
      icon: MessageSquareCode,
      title: "5. Chats Inteligentes (Bots de WhatsApp con IA)",
      category: "Conversational AI & WhatsApp API",
      description: "Desarrollo e integración de agentes conversacionales inteligentes en WhatsApp Business Cloud API. Respuestas contextuales con modelos LLM (ChatGPT/Claude/Gemini), agendamiento y ventas 24/7.",
      tags: ["WhatsApp Cloud API", "LangChain", "OpenAI / Gemini", "Auto-responder", "CRM Flow"],
      glowColor: "emerald",
      borderColor: "hover:border-emerald-400/50"
    },
    {
      id: "devops-support",
      icon: ShieldCheck,
      title: "6. Soporte Técnico Especializado & DevOps",
      category: "Infrastructure & Continuous Support",
      description: "Despliegue automatizado en la nube (AWS, Google Cloud, DigitalOcean), monitoreo de métricas en tiempo real, integración continua (CI/CD), contenedores Docker y mantenimiento preventivo 24/7.",
      tags: ["Docker", "AWS / GCP", "CI/CD Pipelines", "Seguridad Cloud", "Soporte 24/7"],
      glowColor: "amber",
      borderColor: "hover:border-amber-400/50"
    }
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Nuestro Portafolio de Servicios
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soluciones Tecnológicas Integrales para hacer <span className="text-gradient-cyan">Crecer tu Empresa</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Abarcamos todo el ciclo de vida del software: desde la conceptualización hasta la automatización con IA y el mantenimiento continuo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between relative group border ${service.borderColor}`}
              >
                <div className="space-y-6">
                  
                  {/* Service Top Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/60 text-cyan-400 group-hover:text-white group-hover:border-cyan-400/50 transition-all shadow-inner">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Service Card CTA */}
                <div className="pt-8 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Cotizar este Servicio</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors"></span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Solution Callout Banner */}
        <div className="mt-16 rounded-3xl glass-card p-8 md:p-10 border border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-orange-glow">
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="font-display text-2xl font-bold text-white">
              ¿Necesitas una solución personalizada que combine varias tecnologías?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Diseñamos arquitecturas híbridas integrando chatbots de WhatsApp, automatizaciones n8n con IA y bases de datos relacionales adaptadas a tu flujo de negocio.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-extrabold text-sm shadow-orange-glow hover:scale-105 transition-all whitespace-nowrap z-10"
          >
            Hablar con un Arquitecto de Software
          </button>
        </div>

      </div>
    </section>
  );
};
