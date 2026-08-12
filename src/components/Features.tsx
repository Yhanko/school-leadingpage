import React from 'react';
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
    <section id="vantagens" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-gray-700 text-xs font-semibold text-[#FF5777]">
            <Award className="w-3.5 h-3.5" /> Diferenciais Exclusivos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Porquê os Melhores Colégios e Escolas de Angola Escolhem o yhankoEduca?
          </h2>
          <p className="text-gray-400 text-base">
            Desenvolvido a pensar nos desafios reais da gestão de instituições privadas e públicas em Angola.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div key={i} className="glass-card p-8 group relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5777]/20 to-[#6366f1]/20 border border-[#FF5777]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#FF5777]" />
                    </div>
                    <span className="text-[11px] font-bold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5777] transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-800/80 flex items-center gap-2 text-xs font-semibold text-gray-300">
                  <Clock className="w-3.5 h-3.5 text-[#FF5777]" />
                  <span>Economize tempo e recursos hoje</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
