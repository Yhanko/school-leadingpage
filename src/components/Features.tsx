import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Zap, ShieldCheck, TrendingUp, Smartphone, Award, Clock, FileCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const advantages = [
    {
      icon: Headset,
      title: 'Suporte Técnico Local em Angola',
      desc: 'Equipa técnica dedicada em Luanda disponível por telefone, WhatsApp e apoio presencial para a sua escola nunca parar.',
      badge: 'Atendimento Rápido'
    },
    {
      icon: Zap,
      title: 'Implementação em Menos de 48 Horas',
      desc: 'Importação simples dos dados de alunos e turmas existentes. Sem necessidade de instalações de hardware caros.',
      badge: 'Fácil & Rápido'
    },
    {
      icon: FileCheck,
      title: '100% Conforme com a Legislação',
      desc: 'Sistema alinhado com o currículo e normas de avaliação do Ministério da Educação de Angola (MED).',
      badge: 'Oficial'
    },
    {
      icon: TrendingUp,
      title: 'Redução de Inadimplência',
      desc: 'Lembretes automáticos via SMS/WhatsApp aos encarregados garantem pagamentos pontuais de propinas em Kz.',
      badge: 'Retorno Financeiro'
    },
    {
      icon: Smartphone,
      title: 'Acesso em Qualquer Dispositivo',
      desc: 'Funciona perfeitamente em computadores, tablets e smartphones Android e iOS sem complicadas instalações.',
      badge: 'Multiplataforma'
    },
    {
      icon: ShieldCheck,
      title: 'Segurança Máxima de Dados',
      desc: 'Encriptação bancária e backups automáticos diários na nuvem para garantir a privacidade dos dados escolares.',
      badge: 'Proteção Total'
    }
  ];

  return (
    <section id="vantagens" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full card-level-1 border-[#414042] text-label-caps text-primary uppercase">
            <Award className="w-3.5 h-3.5" /> Diferenciais Exclusivos
          </div>
          <h2 className="text-headline-md sm:text-headline-lg font-heading text-on-surface">
            Porquê os Melhores Colégios e Escolas de Angola Escolhem o yhankoEduca?
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Desenvolvido a pensar nos desafios reais da gestão de instituições privadas e públicas em Angola.
          </p>
        </motion.div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-level-1 p-8 group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#131313] border border-[#414042] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-label-caps text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-md border border-[#414042]">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-headline-sm font-heading text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#414042] flex items-center gap-2 text-label-caps text-on-surface-variant">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Economize tempo e recursos hoje</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
