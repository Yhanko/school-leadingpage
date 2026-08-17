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
    if (count <= 250) return { name: 'Plano Inicial (Starter)', color: 'text-primary', badge: 'Até 250 Alunos' };
    if (count <= 800) return { name: 'Plano Profissional', color: 'text-primary', badge: 'Mais Recomendado' };
    return { name: 'Plano Enterprise / Grande Porte', color: 'text-primary', badge: 'Personalizado' };
  };

  const plan = getRecommendedPlan(studentCount);

  return (
    <section id="simulador" className="py-24 relative overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full card-level-1 border-outline text-label-caps text-primary uppercase">
            <Calculator className="w-3.5 h-3.5" /> Simulador Interativo
          </div>
          <h2 className="text-headline-md sm:text-headline-lg font-heading text-on-surface">
            Calcule o Impacto e Economia para a sua Escola
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Deslize para definir o número de estudantes matriculados e veja os resultados estimados em tempo real.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto card-level-1 p-8 sm:p-12">
          
          {/* Slider Control */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <label className="text-headline-sm font-heading text-on-surface flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Quantos alunos possui a sua instituição?
              </label>
              <div className="text-headline-md text-primary font-heading bg-primary-container/10 px-5 py-2 rounded-xl border border-primary/30">
                {studentCount} <span className="text-body-md text-on-surface-variant">Alunos</span>
              </div>
            </div>

            <input
              type="range"
              min="50"
              max="2500"
              step="25"
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-3 bg-outline rounded-lg appearance-none cursor-pointer accent-primary"
            />

            <div className="flex justify-between text-label-caps text-on-surface-variant uppercase px-1">
              <span>50 Alunos (Escola Pequena)</span>
              <span>1.000 Alunos</span>
              <span>2.500+ Alunos (Grande Complexo)</span>
            </div>
          </div>

          {/* Result Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            <div className="card-level-2 border-l-4 border-l-primary bg-surface-container p-6">
              <span className="text-label-caps text-on-surface-variant uppercase">Tempo Poupado</span>
              <div className="text-headline-lg text-on-surface mt-2 font-heading">{hoursSavedMonth}h</div>
              <p className="text-body-md text-on-surface-variant mt-1">Horas administrativas economizadas por mês pela equipe</p>
            </div>

            <div className="card-level-2 border-l-4 border-l-primary bg-surface-container p-6">
              <span className="text-label-caps text-on-surface-variant uppercase">Recuperação de Propinas</span>
              <div className="text-headline-lg text-on-surface mt-2 font-heading">-{propinaDefaultReductionPercent}%</div>
              <p className="text-body-md text-on-surface-variant mt-1">Redução média no atraso de mensalidades dos alunos</p>
            </div>

            <div className="card-level-2 border-l-4 border-l-primary bg-surface-container p-6">
              <span className="text-label-caps text-on-surface-variant uppercase">Sustentabilidade</span>
              <div className="text-headline-lg text-on-surface mt-2 font-heading">{paperSavedReams} Resmas</div>
              <p className="text-body-md text-on-surface-variant mt-1">Economia de papel e impressão de pautas por ano</p>
            </div>

          </div>

          {/* Recommended Plan Recommendation & CTA */}
          <div className="p-6 rounded-2xl bg-surface-container-high border border-outline flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-label-caps text-on-surface-variant uppercase">Plano Ideal para a sua Escola:</span>
              <div className={`text-headline-sm font-heading ${plan.color} mt-1 flex items-center gap-2`}>
                {plan.name}
                <span className="text-label-caps bg-surface-container-highest text-on-surface-variant px-2.5 py-0.5 rounded-full border border-outline">
                  {plan.badge}
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenLeadModalWithStudentCount(studentCount)}
              className="w-full sm:w-auto btn-primary text-body-md flex items-center justify-center gap-2 shrink-0"
            >
              <Sparkles className="w-4 h-4 text-black" />
              Solicitar Proposta para {studentCount} Alunos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
