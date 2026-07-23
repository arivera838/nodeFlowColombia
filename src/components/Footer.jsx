import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Mail, Phone, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Footer = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#05080E] border-t border-cyan-500/15 pt-16 pb-12 text-slate-400 text-xs font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-orange-500 p-[2px]">
                <div className="w-full h-full bg-[#070B14] rounded-full flex items-center justify-center font-display font-extrabold text-cyan-400 text-xs">
                  NF
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">NodeFlow Colombia</span>
            </div>

            <p className="text-slate-400 font-light leading-relaxed max-w-sm">
              Empresa de desarrollo de software, automatización de procesos con n8n, chats inteligentes de WhatsApp con IA y soporte DevOps continuo.
            </p>

            <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>Medellín, Antioquia - Colombia 🇨🇴</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-200 uppercase tracking-wider text-[11px]">Servicios</h4>
            <ul className="space-y-2 font-light">
              <li><a href="/#servicios" className="hover:text-cyan-400 transition-colors">Desarrollo Mobile (iOS/Android)</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-400 transition-colors">Desarrollo Web & SaaS</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-400 transition-colors">Bases de Datos SQL & NoSQL</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-400 transition-colors">Automatización n8n</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-400 transition-colors">Bots de WhatsApp con IA</a></li>
              <li><a href="/#servicios" className="hover:text-cyan-400 transition-colors">Soporte Técnico & DevOps</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-200 uppercase tracking-wider text-[11px]">Navegación</h4>
            <ul className="space-y-2 font-light">
              <li><a href="/#servicios" className="hover:text-cyan-400 transition-colors">Portafolio</a></li>
              <li><a href="/#automatizacion" className="hover:text-cyan-400 transition-colors">Flujos n8n & IA</a></li>
              <li><a href="/#calculadora" className="hover:text-cyan-400 transition-colors">Calculadora Ahorro ROI</a></li>
              <li>
                <Link to="/politica-de-privacidad" className="text-cyan-400 hover:underline flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                  Política de Privacidad Meta
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-200 uppercase tracking-wider text-[11px]">Contacto</h4>
            <ul className="space-y-2 font-light">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href="mailto:contacto@nodeflow.co" className="hover:text-cyan-400">contacto@nodeflow.co</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  WhatsApp Directo (+57 300 000 0000)
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenContact}
              className="mt-2 text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              <span>Solicitar propuesta comercial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} NodeFlow Colombia. Todos los derechos reservados. Desarrollado con tecnología de vanguardia en Medellín.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/politica-de-privacidad" className="hover:text-slate-300 transition-colors">
              Políticas de Datos Personales (Ley 1581 de 2012)
            </Link>
            <Link to="/politica-de-privacidad#meta-deletion" className="hover:text-slate-300 transition-colors">
              Eliminación de Datos Meta App
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
