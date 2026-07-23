import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export const RoiCalculator = ({ onOpenContact }) => {
  const [teamSize, setTeamSize] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyCostCOP, setHourlyCostCOP] = useState(25000); // 25.000 COP/hora aprox

  // Calculos
  const totalWeeklyHours = teamSize * hoursPerWeek;
  const monthlyHoursSaved = Math.round(totalWeeklyHours * 4.33 * 0.85); // 85% de ahorro con automatización
  const monthlySavingsCOP = Math.round(monthlyHoursSaved * hourlyCostCOP);
  const annualSavingsCOP = monthlySavingsCOP * 12;

  // Formateador de moneda en Pesos Colombianos
  const formatCOP = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background Neon Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            Calculadora Interactiva de ROI
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Cuánto dinero y tiempo <span className="text-gradient-cyan">ahorrará tu empresa</span> con NodeFlow?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Ajusta los deslizadores según tu equipo actual para calcular la reducción inmediata de costos operativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Control Box */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 space-y-8 border border-slate-800">
            
            {/* Slider 1: Team Size */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label className="text-slate-200 flex items-center gap-2">
                  <span>Personas dedicadas a soporte o tareas repetitivas</span>
                </label>
                <span className="text-cyan-400 font-mono text-base font-bold bg-cyan-950 px-3 py-1 rounded-lg border border-cyan-500/30">
                  {teamSize} {teamSize === 1 ? 'Persona' : 'Personas'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 persona</span>
                <span>25 personas</span>
              </div>
            </div>

            {/* Slider 2: Hours per Week */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label className="text-slate-200 flex items-center gap-2">
                  <span>Horas semanales gastadas en tareas manuales / persona</span>
                </label>
                <span className="text-orange-400 font-mono text-base font-bold bg-orange-950 px-3 py-1 rounded-lg border border-orange-500/30">
                  {hoursPerWeek} Horas/Sem
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-orange-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>5 hrs/semana</span>
                <span>40 hrs/semana (Tiempo Completo)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label className="text-slate-200 flex items-center gap-2">
                  <span>Costo estimado por hora laboral (COP)</span>
                </label>
                <span className="text-emerald-400 font-mono text-base font-bold bg-emerald-950 px-3 py-1 rounded-lg border border-emerald-500/30">
                  {formatCOP(hourlyCostCOP)} / hr
                </span>
              </div>
              <input
                type="range"
                min="15000"
                max="80000"
                step="5000"
                value={hourlyCostCOP}
                onChange={(e) => setHourlyCostCOP(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$15.000 COP</span>
                <span>$80.000 COP</span>
              </div>
            </div>

          </div>

          {/* ROI Results Display Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl glass-card p-8 border border-cyan-500/40 shadow-cyan-glow relative space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Ahorro Proyectado</span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[11px] font-bold">
                  Eficiencia +85%
                </span>
              </div>

              {/* Monthly Hours Saved */}
              <div className="space-y-1">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Horas Liberadas al Mes:
                </div>
                <div className="font-display font-black text-4xl text-cyan-300">
                  {monthlyHoursSaved} <span className="text-lg font-normal text-slate-400">Horas/mes</span>
                </div>
              </div>

              {/* Monthly Money Saved */}
              <div className="space-y-1 pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Ahorro Estimado Mensual:
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-emerald-400">
                  {formatCOP(monthlySavingsCOP)}
                </div>
              </div>

              {/* Annual Money Saved */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-orange-500/30 space-y-1">
                <div className="text-xs text-orange-400 font-mono font-bold uppercase">
                  Ahorro Anual Proyectado:
                </div>
                <div className="font-display font-black text-2xl text-orange-400">
                  {formatCOP(annualSavingsCOP)} COP
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenContact}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm shadow-cyan-glow hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Automatizar Mi Empresa Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
