import React, { useState } from 'react';
import { Cpu, MessageCircle, Bot, Database, Zap, CheckCircle2, ArrowRight, Code, Terminal, Layers } from 'lucide-react';

export const AutomationShowcase = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('flow');

  const workflowSteps = [
    {
      step: "01",
      title: "Recepción en WhatsApp API",
      subtitle: "Webhook en tiempo real",
      description: "Un cliente envía una consulta sobre disponibilidad o precios por WhatsApp. La API de Meta dispara un evento instantáneo hacia nuestros servidores.",
      icon: MessageCircle,
      badge: "WhatsApp Cloud API",
      color: "emerald"
    },
    {
      step: "02",
      title: "Orquestación en n8n",
      subtitle: "Flujo Inteligente",
      description: "El webhook es capturado por n8n en milisegundos. Valida si el cliente existe en la base de datos o si debe registrarse en el CRM.",
      icon: Cpu,
      badge: "n8n Workflow Engine",
      color: "orange"
    },
    {
      step: "03",
      title: "Procesamiento con IA (LLM)",
      subtitle: "Comprensión Contextual",
      description: "Se consulta la cadena LLM (Basic LLM Chain) entrenada con los productos y preguntas frecuentes de tu PyME para redactar una respuesta natural.",
      icon: Bot,
      badge: "OpenAI / Gemini LLM",
      color: "purple"
    },
    {
      step: "04",
      title: "Sincronización & Respuesta",
      subtitle: "Cierre Automatizado",
      description: "n8n guarda el historial en PostgreSQL / MongoDB y envía la respuesta formateada al cliente por WhatsApp en menos de 3 segundos.",
      icon: Database,
      badge: "PostgreSQL & WhatsApp",
      color: "cyan"
    }
  ];

  return (
    <section id="automatizacion" className="py-24 relative overflow-hidden bg-[#090D16] border-y border-cyan-500/10">
      {/* Glow Backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            El Poder de la Automatización n8n + IA
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Cómo Funciona un <span className="text-gradient-orange">Flujo Automático</span> en NodeFlow?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Sin código complejo ni mantenimiento manual. Conectamos tus ventas y soporte directo a WhatsApp con flujos autogestionados.
          </p>
        </div>

        {/* Workflow Showcase Grid */}
        <div className="grid lg:grid-cols-4 gap-6 relative">
          
          {workflowSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-3xl p-6 relative flex flex-col justify-between border border-slate-800 hover:border-cyan-500/30"
              >
                <div className="space-y-4">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-2xl text-slate-600">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mb-2">{item.subtitle}</p>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Procesado en milisegundos</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Live n8n Prompt Engine Simulation Box */}
        <div className="mt-16 rounded-3xl glass-card border border-purple-500/30 overflow-hidden shadow-2xl">
          <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-purple-400" />
              <span className="font-mono text-xs text-white font-bold">n8n Node Context: Basic LLM Chain Prompt Config</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400">Node Status: <strong className="text-emerald-400">Configured & Listening</strong></span>
            </div>
          </div>

          <div className="p-6 md:p-8 font-mono text-xs space-y-4 bg-slate-950/70 text-slate-300 overflow-x-auto">
            <div className="text-purple-300 font-bold">// Configuración del Desarrollador & Consultor de Automatizaciones (Medellín, Colombia):</div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 leading-relaxed">
              <p className="text-cyan-400 mb-2"><strong>Prompt:</strong></p>
              <p>Actúa como un desarrollador de software experto y consultor de automatizaciones con n8n radicado en Medellín, Colombia.</p>
              <p className="mt-2 text-slate-300">
                Tu objetivo es atender a dueños de negocios, PyMEs y emprendedores locales sobre cómo el desarrollo técnico y las automatizaciones impulsan el crecimiento empresarial.
              </p>
              <ul className="mt-2 space-y-1 text-slate-400 pl-4 list-disc">
                <li>1. Desarrollo Mobile (Apps iOS / Android)</li>
                <li>2. Desarrollo Web & SaaS</li>
                <li>3. Diseño y Gestión de Bases de Datos</li>
                <li>4. Automatización Avanzada (n8n & APIs)</li>
                <li>5. Chats Inteligentes (Bots de WhatsApp con IA)</li>
                <li>6. Soporte Técnico Especializado & DevOps</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-slate-500">NodeFlow Colombia • n8n Workflow Standard Node v2.4</span>
              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 text-xs font-bold transition-all flex items-center gap-2"
              >
                <span>Implementar este Flujo en tu Empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
