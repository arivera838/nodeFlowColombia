import React from 'react';
import { Cpu, Zap, Bot, ArrowRight, MessageCircle, Play, CheckCircle2, Shield, Code, Sparkles, MapPin } from 'lucide-react';

export const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tech Hub Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md shadow-cyan-glow">
              <MapPin className="w-3.5 h-3.5 text-orange-400 animate-bounce" />
              <span>Medellín, Colombia • Hub de Innovación Software & IA</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Transformamos tu Empresa con{' '}
              <span className="text-gradient-cyan">Software a Medida</span> y{' '}
              <span className="text-gradient-orange">Automatizaciones n8n & IA</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              En <strong className="text-white font-semibold">NodeFlow Colombia</strong> desarrollamos plataformas web/SaaS, aplicaciones móviles nativas, chatbots inteligentes de WhatsApp Business API e integraciones de flujos de trabajo sin límites.
            </p>

            {/* Tech Badges List */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" /> Automatización n8n
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <MessageCircle className="w-3.5 h-3.5" /> Bots de WhatsApp API
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <Bot className="w-3.5 h-3.5" /> Agentes de IA para PyMEs
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                <Code className="w-3.5 h-3.5" /> React / Mobile / Cloud
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenContact}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 font-extrabold text-base shadow-cyan-glow hover:shadow-cyan-400/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
              >
                <span>Agendar Asesoría Técnica Gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#servicios"
                className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-semibold text-base transition-all text-center flex items-center justify-center gap-2 hover:border-cyan-500/40"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Explorar Servicios</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Desarrollo Ágil en Colombia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Soporte Técnico 24/7</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-orange-400" />
                <span>Cumplimiento Ley 1581 & Meta</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Futuristic Workflow Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Decorative Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-orange-500 opacity-30 blur-lg animate-pulse-slow"></div>

              {/* Interactive Visual Glass Box */}
              <div className="relative rounded-3xl glass-card p-6 sm:p-8 space-y-6 border border-cyan-500/30 shadow-2xl">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">n8n_workflow_engine.js</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    ACTIVE FLOW
                  </span>
                </div>

                {/* Workflow Interactive Visual Nodes */}
                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Node 1: WhatsApp Input */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 flex items-center justify-between shadow-whatsapp-glow hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">WhatsApp Business Cloud API</div>
                        <div className="text-slate-400 text-[11px]">Webhook Event: Mensaje Entrante</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px]">Trigger</span>
                  </div>

                  {/* Connecting Flow Line */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 via-cyan-400 to-purple-500 animate-pulse"></div>
                  </div>

                  {/* Node 2: n8n AI Chain */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-purple-500/40 flex items-center justify-between shadow-purple-glow hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Basic LLM Chain (n8n Node)</div>
                        <div className="text-slate-400 text-[11px]">Procesamiento IA & Prompt PyME</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px]">n8n Workflow</span>
                  </div>

                  {/* Connecting Flow Line */}
                  <div className="flex justify-center -my-2">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 via-cyan-400 to-orange-500 animate-pulse"></div>
                  </div>

                  {/* Node 3: Database & CRM Output */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-orange-500/40 flex items-center justify-between shadow-orange-glow hover:scale-[1.01] transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">PostgreSQL / CRM & Notificación</div>
                        <div className="text-slate-400 text-[11px]">Actualización en 2.4s • Medellín Server</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-400 text-[10px]">Database</span>
                  </div>

                </div>

                {/* Performance Metrics Footer */}
                <div className="pt-2 grid grid-cols-3 gap-2 text-center border-t border-slate-800/80">
                  <div className="p-2 rounded-xl bg-slate-900/50">
                    <div className="font-display font-bold text-cyan-400 text-sm">99.9%</div>
                    <div className="text-[10px] text-slate-400">Disponibilidad</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/50">
                    <div className="font-display font-bold text-orange-400 text-sm">&lt; 3 Seg</div>
                    <div className="text-[10px] text-slate-400">Respuesta Bot</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/50">
                    <div className="font-display font-bold text-emerald-400 text-sm">+150</div>
                    <div className="text-[10px] text-slate-400">Flujos Activos</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
