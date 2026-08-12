import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Users, TrendingUp, Award, Play } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5777]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#6366f1]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#FF5777]/30 bg-[#FF5777]/10 text-xs font-semibold text-white shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-[#FF5777] animate-ping" />
            <Award className="w-4 h-4 text-[#FF5777]" />
            Plataforma N.º 1 em Angola para Gestão de Escolas e Colégios
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Transforme a Gestão da sua Escola com <span className="gradient-text-pink">Inteligência</span> e <span className="gradient-text-purple">Controlo Total</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Elimine a burocracia, automatize a cobrança de propinas em Kz, gira pautas escolares e conecte professores, alunos e encarregados em tempo real.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto gradient-btn text-white text-base font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-[#FF5777]/25 cursor-pointer hover:scale-105 transition-all"
            >
              Solicitar Demonstração Grátis
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#demonstracao"
              className="w-full sm:w-auto glass-card text-white text-base font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 transition-all hover:bg-gray-800/60"
            >
              <Play className="w-4 h-4 text-[#FF5777] fill-[#FF5777]" />
              Explorar Módulos Ao Vivo
            </a>
          </div>

          {/* Micro Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Teste sem compromisso
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" /> Suporte técnico local em Luanda
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5 de Avaliação dos Diretores
            </span>
          </div>
        </div>

        {/* Hero Interactive Mockup Showcase */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="gradient-border shadow-2xl shadow-[#FF5777]/20">
            <div className="gradient-border-inner overflow-hidden rounded-[15px]">
              
              {/* Fake Browser Bar */}
              <div className="bg-[#182032] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-gray-400 font-mono hidden sm:inline">app.yhankoeduca.ao/dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Sistema Ativo
                  </span>
                </div>
              </div>

              {/* Simulated Dashboard UI Mockup */}
              <div className="p-6 sm:p-8 bg-[#0d121f] grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Stats Widget 1 */}
                <div className="md:col-span-4 glass-card p-5 border-l-4 border-l-[#FF5777]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total de Alunos</span>
                    <Users className="w-5 h-5 text-[#FF5777]" />
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white">1.482</div>
                  <div className="mt-1 text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" /> +12% no presente ano lectivo
                  </div>
                </div>

                {/* Stats Widget 2 */}
                <div className="md:col-span-4 glass-card p-5 border-l-4 border-l-[#6366f1]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Propinas Arrecadadas</span>
                    <span className="text-xs font-bold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded">KZ</span>
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white">18.450.000 Kz</div>
                  <div className="mt-1 text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 94% Taxa de Regularidade
                  </div>
                </div>

                {/* Stats Widget 3 */}
                <div className="md:col-span-4 glass-card p-5 border-l-4 border-l-emerald-500">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Turmas Ativas</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white">42 Turmas</div>
                  <div className="mt-1 text-xs text-gray-400 font-medium">
                    Ensino Primário & Secundário
                  </div>
                </div>

                {/* Main Graph & Table Preview */}
                <div className="md:col-span-8 glass-card p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-white">Desempenho Académico Mensal</h4>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2.5 py-1 rounded-md">Ano Lectivo 2024/2025</span>
                  </div>
                  {/* Simulated Visual Graph Bars */}
                  <div className="h-44 flex items-end gap-3 pt-6 pb-2 px-2 border-b border-gray-800">
                    {[
                      { month: 'Jan', val: 75, grade: '14.2' },
                      { month: 'Fev', val: 82, grade: '15.0' },
                      { month: 'Mar', val: 88, grade: '15.8' },
                      { month: 'Abr', val: 94, grade: '16.1' },
                      { month: 'Mai', val: 90, grade: '15.9' },
                      { month: 'Jun', val: 96, grade: '16.5' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                        <span className="text-[10px] text-gray-400 group-hover:text-[#FF5777] font-semibold">{item.grade}</span>
                        <div
                          className="w-full bg-gradient-to-t from-[#6366f1] to-[#FF5777] rounded-t-md transition-all duration-500 group-hover:brightness-125"
                          style={{ height: `${item.val}%` }}
                        />
                        <span className="text-xs text-gray-400 font-medium">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notifications & Recent Activity */}
                <div className="md:col-span-4 glass-card p-5 space-y-3">
                  <h4 className="text-sm font-bold text-white mb-3">Atividades Recentes</h4>
                  {[
                    { title: 'Nova Matrícula efetuada', time: 'Há 5 min', detail: 'Aluno: Mateus Manuel - 10ª Classe' },
                    { title: 'Pagamento de Propina', time: 'Há 12 min', detail: 'KZ 45.000 - Confirmado via TPA' },
                    { title: 'Pauta Trimestral Publicada', time: 'Há 1h', detail: 'Turma: B2 - Matemática' }
                  ].map((act, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-gray-900/60 border border-gray-800 text-xs">
                      <div className="flex justify-between font-semibold text-gray-200">
                        <span>{act.title}</span>
                        <span className="text-[10px] text-gray-500">{act.time}</span>
                      </div>
                      <p className="text-gray-400 text-[11px] mt-1">{act.detail}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Numerical Proof Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '+50.000', label: 'Alunos Geridos' },
            { value: '98%', label: 'Satisfação dos Diretores' },
            { value: '-85%', label: 'Redução de Erros em Pautas' },
            { value: '100%', label: 'Conforme Legislação Angolana' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 border-t-2 border-t-[#FF5777]">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
