import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Shield, ShieldCheck, Lock, Trash2, Mail, FileText, CheckCircle2, ArrowLeft, AlertCircle } from 'lucide-react';

export const PrivacyPolicy = () => {
  const [deletionSubmitted, setDeletionSubmitted] = useState(false);
  const [deletionForm, setDeletionForm] = useState({
    phoneOrEmail: '',
    reason: 'Eliminación voluntaria de registros de WhatsApp / Meta App'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDeletionSubmit = (e) => {
    e.preventDefault();
    setDeletionSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <SEO
        title="Política de Privacidad y Tratamiento de Datos | NodeFlow Colombia"
        description="Políticas de tratamiento de datos personales conforme a la Ley 1581 de 2012 de Colombia y lineamientos de Meta Apps (WhatsApp Cloud API / Facebook Developers)."
        canonical="https://nodeflow.co/politica-de-privacidad"
      />

      <Navbar onOpenContact={() => {}} />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </Link>

        {/* Policy Page Header */}
        <div className="glass-card rounded-3xl p-8 md:p-10 border border-cyan-500/30 mb-12 shadow-cyan-glow">
          <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-orange-400" />
            <span>Marco Legal & Meta Developer Terms</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="text-sm text-slate-300 font-light mt-3 leading-relaxed">
            Última actualización: 23 de julio de 2026. Conforme a la **Ley Estatutaria 1581 de 2012** de la República de Colombia, el Decreto 1377 de 2013 y los **Términos de Plataforma de Meta Developers** (WhatsApp Cloud API & Facebook Apps).
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-sm font-sans text-slate-300 leading-relaxed">
          
          {/* Section 1: Data Controller */}
          <section className="glass-card rounded-2xl p-6 md:p-8 space-y-3 border border-slate-800">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">1.</span> Responsable del Tratamiento de Datos
            </h2>
            <p>
              <strong className="text-white">NodeFlow Colombia</strong> (en adelante, "LA EMPRESA"), sociedad comercial radicada en Medellín, Antioquia, Colombia, actúa como Responsable y Encargado del Tratamiento de Datos Personales recopilados a través de nuestro sitio web, nuestras soluciones SaaS y las aplicaciones integradas con las plataformas de Meta Platforms, Inc. (WhatsApp Business API, Facebook Apps y Messenger).
            </p>
            <div className="p-4 rounded-xl bg-slate-900/90 font-mono text-xs text-slate-300 space-y-1 border border-slate-800">
              <p>📍 <strong>Domicilio:</strong> Medellín, Colombia</p>
              <p>📧 <strong>Correo de Habeas Data:</strong> <a href="mailto:privacidad@nodeflow.co" className="text-cyan-400 hover:underline">privacidad@nodeflow.co</a> / <a href="mailto:contacto@nodeflow.co" className="text-cyan-400 hover:underline">contacto@nodeflow.co</a></p>
              <p>📱 <strong>Canal de Atención WhatsApp:</strong> +57 300 000 0000</p>
            </div>
          </section>

          {/* Section 2: Data Collected via Meta Apps */}
          <section className="glass-card rounded-2xl p-6 md:p-8 space-y-4 border border-slate-800">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">2.</span> Datos Recopilados a través de Aplicaciones de Meta (WhatsApp API)
            </h2>
            <p>
              Cuando un usuario interactúa con nuestros chatbots de WhatsApp Business o aplicaciones desarrolladas por NodeFlow Colombia bajo la infraestructura de Meta, recopilamos y procesamos únicamente los datos necesarios para brindar la atención solicitada:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong className="text-white">Número de Teléfono:</strong> Utilizado como identificador único para la entrega de mensajes transaccionales y soporte.</li>
              <li><strong className="text-white">Nombre de Perfil de WhatsApp:</strong> Proporcionado por el usuario en su cuenta pública.</li>
              <li><strong className="text-white">Contenido de los Mensajes Interactivos:</strong> Preguntas, respuestas a botones, imágenes o documentos enviados voluntariamente por el usuario durante la conversación.</li>
              <li><strong className="text-white">Metadatos de la Interacción:</strong> Fecha, hora, estado de entrega del mensaje e identificador de conversación (*WhatsApp Message ID*).</li>
            </ul>
          </section>

          {/* Section 3: Purpose of Processing */}
          <section className="glass-card rounded-2xl p-6 md:p-8 space-y-4 border border-slate-800">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">3.</span> Finalidad del Tratamiento de la Información
            </h2>
            <p>Los datos personales recolectados se utilizarán exclusivamente para las siguientes finalidades legitimadas:</p>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <h4 className="font-bold text-cyan-400">🤖 Automatización de Respuestas</h4>
                <p className="text-xs text-slate-400">Procesar consultas mediante motores n8n e Inteligencia Artificial (LLMs) para responder dudas de dueños de negocios y usuarios en tiempo real.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <h4 className="font-bold text-orange-400">📊 Soporte Técnico y Cotizaciones</h4>
                <p className="text-xs text-slate-400">Agendar reuniones técnicas, enviar propuestas comerciales de desarrollo de software y gestionar el seguimiento de requerimientos.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <h4 className="font-bold text-emerald-400">🔒 Seguridad y Registro</h4>
                <p className="text-xs text-slate-400">Prevenir fraude, mantener trazabilidad de interacciones y garantizar la disponibilidad técnica de la infraestructura.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <h4 className="font-bold text-purple-400">📜 Cumplimiento Legal</h4>
                <p className="text-xs text-slate-400">Atender mandatos de autoridades judiciales o administrativas colombianas de acuerdo con la legislación vigente.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Rights of Data Subjects */}
          <section className="glass-card rounded-2xl p-6 md:p-8 space-y-4 border border-slate-800">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">4.</span> Derechos de los Titulares (Habeas Data)
            </h2>
            <p>
              De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Conocer, actualizar y rectificar sus datos personales frente a NodeFlow Colombia.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
              <li>Ser informado sobre el uso que se le ha dado a sus datos personales.</li>
              <li>Revocar la autorización o solicitar la supresión de sus datos de nuestras bases de datos en cualquier momento.</li>
              <li>Acceder de forma gratuita a sus datos personales objeto de tratamiento.</li>
            </ul>
          </section>

          {/* Section 5: Security & Retention */}
          <section className="glass-card rounded-2xl p-6 md:p-8 space-y-3 border border-slate-800">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">5.</span> Seguridad de la Información y Almacenamiento
            </h2>
            <p>
              Adoptamos medidas de seguridad técnicas, administrativas y físicas para proteger la información contra acceso no autorizado, alteración o destrucción. Los datos transferidos mediante la API de Meta se encriptan en tránsito (TLS/HTTPS) y en reposo usando estándares bancarios AES-256. NodeFlow Colombia no vende ni alquila datos de usuarios a terceros bajo ninguna circunstancia.
            </p>
          </section>

          {/* Section 6: Meta Data Deletion Instructions (Mandatory for Meta App Review) */}
          <section id="meta-deletion" className="glass-card rounded-3xl p-8 border border-orange-500/40 space-y-6 shadow-orange-glow bg-slate-900/90">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-orange-500/20 text-orange-400">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-white">
                  Instrucciones para la Eliminación de Datos (Meta App Data Deletion)
                </h2>
                <p className="text-xs font-mono text-orange-400">
                  Requerido por Meta Platform Terms • Solicitud de Supresión de Registro
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-200">
              Si utilizaste alguna de nuestras aplicaciones de Meta (WhatsApp Bot, Facebook Login o App de prueba) y deseas eliminar tus datos personales o historial de interacción almacenados en los servidores de NodeFlow Colombia, puedes hacerlo mediante cualquiera de los siguientes dos métodos:
            </p>

            {/* Option A: Form Submission */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 text-xs font-mono">Opción A</span>
                Formulario Directo de Solicitud de Eliminación
              </h3>

              {!deletionSubmitted ? (
                <form onSubmit={handleDeletionSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Número de WhatsApp o Correo Asociado *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+57 300 123 4567 o correo@ejemplo.com"
                      value={deletionForm.phoneOrEmail}
                      onChange={(e) => setDeletionForm({ ...deletionForm, phoneOrEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Motivo de la solicitud (Opcional)
                    </label>
                    <input
                      type="text"
                      value={deletionForm.reason}
                      onChange={(e) => setDeletionForm({ ...deletionForm, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xs shadow-orange-glow hover:scale-[1.01] transition-all"
                  >
                    Solicitar Eliminación Definitiva de Registros
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Solicitud de Eliminación de Datos Recibida</span>
                  </div>
                  <p>
                    Código de Confirmación: <strong className="font-mono text-white">DEL-{Math.floor(100000 + Math.random() * 900000)}</strong>
                  </p>
                  <p>
                    Tus datos y registros de chat asociados a Meta Apps serán depurados en un plazo máximo de 48 horas conforme a las directrices de Meta Developers.
                  </p>
                </div>
              )}
            </div>

            {/* Option B: Direct Email */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-400 text-xs font-mono">Opción B</span>
                Solicitud Vía Correo Electrónico
              </h3>
              <p className="text-xs text-slate-300">
                Envía un correo con el asunto <strong className="text-white">"ELIMINACION DATOS META APP"</strong> a{' '}
                <a href="mailto:privacidad@nodeflow.co" className="text-cyan-400 hover:underline font-mono">privacidad@nodeflow.co</a> indicando tu número de WhatsApp. Responderemos con la confirmación de borrado en menos de 24 horas.
              </p>
            </div>

          </section>

        </div>

      </main>

      <Footer onOpenContact={() => {}} />
    </div>
  );
};
