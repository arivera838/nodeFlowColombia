import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Cpu, Sparkles, MessageSquare, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#070B14]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/30' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-orange-500 p-[2px] shadow-cyan-glow group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070B14] rounded-full flex items-center justify-center relative overflow-hidden">
              <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 text-sm tracking-tighter">NF</span>
              {/* Glowing active node dot */}
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400"></span>
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              NodeFlow
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-400 border border-orange-500/30">
                Colombia 🇨🇴
              </span>
            </div>
            <p className="text-[10px] text-cyan-400/80 font-mono tracking-wider uppercase">n8n • WhatsApp API • IA</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#servicios" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            Servicios
          </a>
          <a href="/#automatizacion" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            Automatización & IA
          </a>
          <a href="/#calculadora" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            Calculadora ROI
          </a>
          <Link to="/politica-de-privacidad" className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
            location.pathname === '/politica-de-privacidad' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
          }`}>
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            Privacidad Meta
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/573000000000?text=Hola%20NodeFlow%20Colombia,%20quisiera%20cotizar%20un%20proyecto%20de%20software%20o%20automatizaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold transition-all shadow-whatsapp-glow hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
            <span>WhatsApp Directo</span>
          </a>

          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-cyan-glow hover:shadow-cyan-500/50 hover:scale-105 transition-all"
          >
            <span>Cotizar Proyecto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B14]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-4">
          <a
            href="/#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
          >
            Servicios de Desarrollo
          </a>
          <a
            href="/#automatizacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
          >
            Automatizaciones n8n & WhatsApp
          </a>
          <a
            href="/#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
          >
            Calculadora de Ahorro ROI
          </a>
          <Link
            to="/politica-de-privacidad"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-base font-medium text-cyan-400 py-2 border-b border-slate-800/60"
          >
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            Políticas de Privacidad Meta
          </Link>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://wa.me/573000000000?text=Hola%20NodeFlow%20Colombia,%20quisiera%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-cyan-glow"
            >
              Cotizar Proyecto Ahora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
