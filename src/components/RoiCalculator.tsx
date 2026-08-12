import { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, Users } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenLeadModalWithStudentCount: (count: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenLeadModalWithStudentCount }) => {
  const [studentCount, setStudentCount] = useState<number>(450);

  // Dynamic calculations based on student size
  const hoursSavedMonth = Math.round(studentCount * 0.28);
  const propinaDefaultReductionPercent = 85;
  const paperSavedReams = Math.round(studentCount * 0.15);
  
  const getRecommendedPlan = (count: number) => {
    if (count <= 250) return { name: 'Plano Inicial (Starter)', color: 'text-indigo-400', badge: 'Até 250 Alunos' };
    if (count <= 800) return { name: 'Plano Profissional', color: 'text-[#FF5777]', badge: 'Mais Recomendado' };
    return { name: 'Plano Enterprise / Grande Porte', color: 'text-yellow-400', badge: 'Personalizado' };
  };

  const plan = getRecommendedPlan(studentCount);

  return (
    <section id="simulador" className="py-24 relative overflow-hidden bg-[#0d121f]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366f1]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-gray-700 text-xs font-semibold text-indigo-400">
            <Calculator className="w-3.5 h-3.5" /> Simulador Interativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Calcule o Impacto e Economia para a sua Escola
          </h2>
          <p className="text-gray-400 text-base">
            Deslize para definir o número de estudantes matriculados e veja os resultados estimados em tempo real.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 border-gray-800">
          
          {/* Slider Control */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <label className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FF5777]" />
                Quantos alunos possui a sua instituição?
              </label>
              <div className="text-3xl font-extrabold text-[#FF5777] font-heading bg-[#FF5777]/10 px-5 py-2 rounded-xl border border-[#FF5777]/30">
                {studentCount} <span className="text-sm font-medium text-gray-300">Alunos</span>
              </div>
            </div>

            <input
              type="range"
              min="50"
              max="2500"
              step="25"
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#FF5777]"
            />

            <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
              <span>50 Alunos (Escola Pequena)</span>
              <span>1.000 Alunos</span>
              <span>2.500+ Alunos (Grande Complexo)</span>
            </div>
          </div>

          {/* Result Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            <div className="glass-card p-6 border-l-4 border-l-[#FF5777] bg-gray-900/60">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Tempo Poupado</span>
              <div className="text-3xl font-extrabold text-white mt-2 font-heading">{hoursSavedMonth}h</div>
              <p className="text-xs text-gray-400 mt-1">Horas administrativas economizadas por mês pela equipe</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-emerald-500 bg-gray-900/60">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Recuperação de Propinas</span>
              <div className="text-3xl font-extrabold text-emerald-400 mt-2 font-heading">-{propinaDefaultReductionPercent}%</div>
              <p className="text-xs text-gray-400 mt-1">Redução média no atraso de mensalidades dos alunos</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-indigo-500 bg-gray-900/60">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Sustentabilidade</span>
              <div className="text-3xl font-extrabold text-indigo-400 mt-2 font-heading">{paperSavedReams} Resmas</div>
              <p className="text-xs text-gray-400 mt-1">Economia de papel e impressão de pautas por ano</p>
            </div>

          </div>

          {/* Recommended Plan Recommendation & CTA */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900 via-[#182032] to-gray-900 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Plano Ideal para a sua Escola:</span>
              <div className={`text-xl font-extrabold ${plan.color} mt-1 flex items-center gap-2`}>
                {plan.name}
                <span className="text-xs bg-gray-800 text-gray-300 font-semibold px-2.5 py-0.5 rounded-full border border-gray-700">
                  {plan.badge}
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenLeadModalWithStudentCount(studentCount)}
              className="w-full sm:w-auto gradient-btn text-white text-sm font-bold px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF5777]/20 shrink-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Solicitar Proposta para {studentCount} Alunos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
