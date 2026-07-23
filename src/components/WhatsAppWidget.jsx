import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, CheckCheck, Sparkles, Phone, ShieldCheck } from 'lucide-react';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '¡Hola! 👋 Bienvenido a NodeFlow Colombia. Soy NF-Bot, tu asistente de Inteligencia Artificial.',
      time: 'Justo ahora'
    },
    {
      id: 2,
      sender: 'bot',
      text: '¿En qué tipo de proyecto técnico te gustaría asesoría hoy?',
      time: 'Justo ahora'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const quickOptions = [
    { label: '🚀 Desarrollo Web / Mobile', query: 'Quiero información sobre Desarrollo Web y Mobile.' },
    { label: '⚡ Automatización n8n', query: 'Me interesa automatizar procesos en n8n.' },
    { label: '🤖 Bots de WhatsApp con IA', query: 'Quiero un Bot de WhatsApp inteligente para mi empresa.' },
    { label: '💬 Cotizar Proyecto', query: 'Quiero hablar con un ingeniero para una propuesta.' }
  ];

  const handleSend = (textToSend) => {
    const userText = textToSend || inputMessage;
    if (!userText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate AI bot response with n8n workflow feel
    setTimeout(() => {
      let botReply = "¡Excelente! En NodeFlow Colombia diseñamos arquitecturas a medida. ¿Te gustaría agendar una llamada rápida de 15 min con nuestro equipo en Medellín o cotizar directamente por WhatsApp?";

      if (userText.toLowerCase().includes('web') || userText.toLowerCase().includes('mobile')) {
        botReply = "📱 Desarrollamos Apps nativas para iOS/Android con React Native/Flutter y plataformas Web con Next.js + Tailwind. ¿Tienes una app o plataforma en mente?";
      } else if (userText.toLowerCase().includes('n8n') || userText.toLowerCase().includes('automatiz')) {
        botReply = "⚡ Conectamos tu CRM, pasarelas de pago y hojas de datos en flujos automáticos de n8n para ahorrar más de 80 horas de trabajo al mes.";
      } else if (userText.toLowerCase().includes('bot') || userText.toLowerCase().includes('whatsapp')) {
        botReply = "🤖 Integramos la Cloud API oficial de WhatsApp con modelos LLM (ChatGPT/Gemini) para responder consultas, ventas y soporte las 24 horas del día.";
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-whatsapp-glow hover:scale-110 transition-all flex items-center justify-center"
          aria-label="Abrir Asistente WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-slate-950" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-white font-mono text-[10px] font-bold flex items-center justify-center animate-bounce">
            1
          </span>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] rounded-3xl glass-card border border-emerald-500/40 shadow-2xl flex flex-col overflow-hidden bg-slate-950 text-xs">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-[#071318] to-slate-900 p-4 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm flex items-center gap-1.5">
                  NF-Bot Colombia
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">IA 24/7</span>
                </div>
                <p className="text-[10px] text-slate-400">Respuesta promedio: &lt; 3 seg</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#060A12]/80 font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-1 px-1 flex items-center gap-1">
                  {msg.time}
                  {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-emerald-400" />}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-900 border border-slate-800 w-fit text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="font-mono text-[11px]">Procesando prompt con n8n IA...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Options Pills */}
          <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 flex flex-wrap gap-1.5 overflow-x-auto max-h-24">
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSend(opt.query)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/20 whitespace-nowrap transition-colors"
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Chat Input & WhatsApp Direct Link */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-400"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-950 px-3 py-1.5 border-t border-slate-900 text-center text-[10px]">
            <a
              href="https://wa.me/573000000000?text=Hola%20NodeFlow%20Colombia,%20quisiera%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center justify-center gap-1 font-semibold"
            >
              <span>Abrir Chat Real en WhatsApp (+57 300 000 0000)</span>
            </a>
          </div>

        </div>
      )}

    </div>
  );
};
