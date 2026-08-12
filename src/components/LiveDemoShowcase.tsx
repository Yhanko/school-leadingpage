import React, { useState } from 'react';
import { BookOpen, DollarSign, Users, AlertTriangle, FileSpreadsheet, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface Module {
  id: string;
  name: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge: string;
  accentColor: string;
}

export const LiveDemoShowcase: React.FC = () => {
  const modules: Module[] = [
    {
      id: 'pedagogico',
      name: 'Gestão Pedagógica',
      icon: BookOpen,
      title: 'Controlo Total de Turmas, Disciplinas e Professores',
      subtitle: 'Simplifique a rotina dos seus docentes e coordenação pedagógica.',
      description: 'Organize o plano curricular da instituição por ciclos de ensino (Primário, I e II Ciclos Secundários). Permita que os professores lancem notas, presenças e sumários em segundos.',
      highlights: [
        'Criação rápida de turmas e salas com capacidade controlada',
        'Atribuição simplificada de disciplinas a docentes',
        'Cálculo automático de médias trimestrais e anuais',
        'Histórico escolar consolidado de cada estudante'
      ],
      badge: 'Pedagógico & Ensino',
      accentColor: '#FF5777'
    },
    {
      id: 'financeiro',
      name: 'Financeiro & Propinas',
      icon: DollarSign,
      title: 'Gestão de Pagamentos e Emissão de Recibos em Kz',
      subtitle: 'Reduza a inadimplência e automatize a faturação.',
      description: 'Acompanhe em tempo real as mensalidades pagas, pendentes e em atraso. Emita recibos oficiais e exporte relatórios financeiros completos para a direção.',
      highlights: [
        'Controlo de pagamentos em Kwanza (Kz) com suporte a TPA e Transferências',
        'Notificação automática para encarregados antes do vencimento',
        'Relatório de balanço financeiro com gráficos dinâmicos',
        'Isenções, bolsas de estudo e descontos configuráveis'
      ],
      badge: 'Controlo Financeiro',
      accentColor: '#6366f1'
    },
    {
      id: 'encarregados',
      name: 'Portal dos Pais',
      icon: Users,
      title: 'Transparência e Comunicação Direta com os Encarregados',
      subtitle: 'Conecte as famílias à vida escolar dos estudantes.',
      description: 'Os pais acompanham o progresso dos filhos, boletins, notificações de ocorrências e aviso de cobrança diretamente via plataforma ou dispositivos móveis.',
      highlights: [
        'Acesso seguro individual por encarregado de educação',
        'Notificações instantâneas de faltas e comunicados',
        'Visualização transparente de pautas e notas trimestrais',
        'Canal de suporte direto com a secretaria da escola'
      ],
      badge: 'Comunicação Familiar',
      accentColor: '#10b981'
    },
    {
      id: 'disciplinar',
      name: 'Controlo Disciplinar',
      icon: AlertTriangle,
      title: 'Registo de Ocorrências e Acompanhamento Comportamental',
      subtitle: 'Promova um ambiente escolar seguro, estruturado e justo.',
      description: 'Registe advertências, faltas disciplinares e elogios. Mantenha um histórico transparente com envolvimento de pais e psicopedagogia.',
      highlights: [
        'Classificação por gravidade (Leve, Média, Grave)',
        'Notificação em tempo real para os encarregados',
        'Histórico comportamental do aluno durante todo o ano lectivo',
        'Relatório consolidado para o Conselho Disciplinar'
      ],
      badge: 'Disciplina & Ambiente',
      accentColor: '#f59e0b'
    },
    {
      id: 'pautas',
      name: 'Pautas & Relatórios',
      icon: FileSpreadsheet,
      title: 'Emissão de Pautas Finais e Certificados em 1-Clique',
      subtitle: 'Gere pautas oficiais sem erros manuais de cálculo.',
      description: 'Exporte relatórios em PDF com formatação oficial para afixação e arquivo. Calcule automaticamente as médias de transição de classe de acordo com as normas do Ministério da Educação.',
      highlights: [
        'Emissão instantânea em PDF e impressão oficial',
        'Algoritmo inteligente livre de erros de arredondamento',
        'Relatório comparativo de aproveitamento por turma e disciplina',
        'Assinatura digital e validação por código QR'
      ],
      badge: 'Relatórios Oficiais',
      accentColor: '#06b6d4'
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(modules[0].id);
  const activeModule = modules.find(m => m.id === activeTab) || modules[0];

  return (
    <section id="demonstracao" className="py-24 relative overflow-hidden bg-[#0d121f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-gray-700 text-xs font-semibold text-[#FF5777]">
            <Sparkles className="w-3.5 h-3.5" /> Módulos do Sistema
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tudo o que a sua Instituição de Ensino Precisa num Só Lugar
          </h2>
          <p className="text-gray-400 text-base">
            Explore abaixo as principais funcionalidades desenhadas à medida do sistema de ensino angolano.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = mod.id === activeTab;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#FF5777] text-white shadow-lg shadow-[#FF5777]/30 scale-105'
                    : 'glass-card text-gray-300 hover:text-white hover:border-gray-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {mod.name}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="glass-card p-8 sm:p-12 border-gray-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#FF5777]/20 text-[#FF5777] border border-[#FF5777]/30">
                {activeModule.badge}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {activeModule.title}
              </h3>
              
              <p className="text-base text-gray-300 leading-relaxed">
                {activeModule.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-2">
                {activeModule.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Visual Interactive Card */}
            <div className="lg:col-span-6">
              <div className="gradient-border shadow-2xl">
                <div className="gradient-border-inner p-6 sm:p-8 space-y-5 bg-[#121827]">
                  
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#FF5777]/20 text-[#FF5777]">
                        <activeModule.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">{activeModule.name}</h4>
                        <p className="text-xs text-gray-400">{activeModule.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Ativo
                    </span>
                  </div>

                  {/* Simulated Feature Card Preview */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 flex justify-between items-center">
                      <div>
                        <span className="text-xs text-gray-400 font-medium">Estado do Módulo</span>
                        <p className="text-sm font-bold text-white mt-0.5">Sincronização em Tempo Real</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300">
                        100% Automatizado
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-2">
                      <div className="flex justify-between text-xs text-gray-300 font-semibold">
                        <span>Aproveitamento Médio da Escola</span>
                        <span className="text-emerald-400 font-bold">16.4 Valores</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6366f1] to-[#FF5777] rounded-full w-[82%]" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300 font-medium">
                      <span>✓ Relatórios gerados em PDF conforme diretrizes vigentes</span>
                      <span className="font-bold underline cursor-pointer">Ver PDF</span>
                    </div>
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
