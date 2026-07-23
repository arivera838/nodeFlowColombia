import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Automatizaciones n8n & IA',
    budget: 'Por definir',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message text
    const text = `Hola NodeFlow Colombia! 👋%0A%0AMi nombre es: *${formData.name}*%0ACorreo: ${formData.email}%0ATeléfono: ${formData.phone}%0AServicio de Interés: *${formData.service}*%0APresupuesto: ${formData.budget}%0A%0AMensaje:%0A${encodeURIComponent(formData.message)}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/573000000000?text=${text}`, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Asesoría Gratuita
              </div>
              <h3 className="font-display text-2xl font-bold text-white mt-2">
                Cotizar Proyecto en NodeFlow
              </h3>
              <p className="text-xs text-slate-400">
                Cuéntanos tu idea. Te responderemos en menos de 2 horas laborables.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Carlos Restrepo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">WhatsApp / Teléfono *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  placeholder="carlos@tuempresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Servicio de Interés</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Automatizaciones n8n & IA">Automatizaciones n8n & IA</option>
                    <option value="Bots de WhatsApp Business API">Bots de WhatsApp Business API</option>
                    <option value="Desarrollo Mobile (Apps)">Desarrollo Mobile (Apps iOS/Android)</option>
                    <option value="Desarrollo Web & SaaS">Desarrollo Web & SaaS</option>
                    <option value="Gestión de Bases de Datos">Gestión de Bases de Datos</option>
                    <option value="Soporte Técnico & DevOps">Soporte Técnico & DevOps</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Presupuesto Estimado</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Por definir">Por definir / Asesoría</option>
                    <option value="<$3 Millones COP">&lt; $3 Millones COP</option>
                    <option value="$3M - $8M COP">$3M - $8M COP</option>
                    <option value="$8M - $20M COP">$8M - $20M COP</option>
                    <option value=">$20M COP">&gt; $20M COP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Descripción Breve del Proyecto</label>
                <textarea
                  rows="3"
                  placeholder="Detalla tu requerimiento o proceso que deseas automatizar..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-sm shadow-whatsapp-glow hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Enviar y Abrir WhatsApp Directo</span>
              </button>

            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">¡Solicitud Generada!</h3>
            <p className="text-xs text-slate-300">
              Te estamos redirigiendo a nuestro chat de WhatsApp para iniciar la conversación técnica...
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
