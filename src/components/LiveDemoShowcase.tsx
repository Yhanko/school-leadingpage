import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, DollarSign, Users, AlertTriangle, FileSpreadsheet, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import futureImg from '../assets/future.jpg';
import financeImg from '../assets/Finance.gif';
import chatcImg from '../assets/chatc.gif';
import securityImg from '../assets/securityData.jpg';
import automacaoImg from '../assets/automacao.jpg';
import consultingImg from '../assets/consulting.gif';

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
  image: string;
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
      accentColor: '#FF5777',
      image: futureImg
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
      accentColor: '#6366f1',
      image: financeImg
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
      accentColor: '#10b981',
      image: chatcImg
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
      accentColor: '#f59e0b',
      image: securityImg
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
      accentColor: '#06b6d4',
      image: automacaoImg
    },
    {
      id: 'consultoria',
      name: 'Suporte & Consultoria',
      icon: Users,
      title: 'Acompanhamento Contínuo e Formação',
      subtitle: 'Uma equipa dedicada ao sucesso da sua instituição.',
      description: 'Oferecemos suporte técnico local em Angola, formação para professores e administrativos, e consultoria para otimizar os processos educativos da sua escola.',
      highlights: [
        'Atendimento rápido via WhatsApp e telefone',
        'Formação inicial e contínua para toda a equipa',
        'Auditoria e apoio na parametrização do sistema',
        'Garantia de conformidade contínua'
      ],
      badge: 'Suporte Dedicado',
      accentColor: '#8b5cf6',
      image: consultingImg
    }
  ];

  return (
    <section id="demonstracao" className="py-24 relative overflow-hidden bg-[#0d121f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-gray-700 text-xs font-semibold text-[#FF5777]">
            <Sparkles className="w-3.5 h-3.5" /> Módulos do Sistema
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tudo o que a sua Instituição de Ensino Precisa num Só Lugar
          </h2>
          <p className="text-gray-400 text-base">
            Explore abaixo as principais funcionalidades desenhadas à medida do sistema de ensino angolano.
          </p>
        </motion.div>

        {/* Stacked Alternating Modules */}
        <div className="space-y-32">
          {modules.map((mod, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={mod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Text Content */}
                  <div className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#FF5777]/10 text-[#FF5777] border border-[#FF5777]/20">
                      {mod.badge}
                    </span>
                    
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
                      {mod.title}
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-3 pt-4">
                      {mod.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-base text-gray-200">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Image Card */}
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="gradient-border shadow-2xl shadow-indigo-500/10 hover:shadow-[#FF5777]/20 transition-shadow duration-500">
                      <div className="gradient-border-inner p-2 bg-[#121827]">
                        
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 mb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-[#FF5777]/10 text-[#FF5777]">
                              <mod.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-sm">{mod.name}</h4>
                            </div>
                          </div>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                            Ativo
                          </span>
                        </div>

                        {/* Real Image Preview */}
                        <div className="w-full overflow-hidden rounded-lg bg-[#0b0f19]">
                          <img 
                            src={mod.image} 
                            alt={mod.name} 
                            loading="lazy"
                            className="w-full h-auto max-h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-out" 
                          />
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
