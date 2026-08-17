import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Play } from 'lucide-react';
import heroImg from '../assets/dashboard_mockup.png';

interface HeroProps {
  onOpenLeadModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Ambient Glow Effects Removed for High-Contrast Metallic Look */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
        </motion.div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-on-surface leading-tight"
          >
            Transforme a Gestão da sua Escola com <span className="text-primary">Inteligência</span> e <span className="text-primary">Controlo Total</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg sm:text-headline-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Elimine a burocracia, automatize a cobrança de propinas em Kz, gira pautas escolares e conecte professores, alunos e encarregados em tempo real.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto btn-primary flex items-center justify-center gap-3 text-body-lg"
            >
              Solicitar Demonstração Grátis
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#demonstracao"
              className="w-full sm:w-auto btn-secondary flex items-center justify-center gap-2 text-body-lg"
            >
              <Play className="w-4 h-4 text-primary fill-primary" />
              Explorar Módulos Ao Vivo
            </a>
          </motion.div>

          {/* Micro Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-label-caps text-on-surface-variant uppercase"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Teste sem compromisso
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" /> Suporte técnico local em Luanda
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-primary fill-primary" /> 5 de Avaliação dos Diretores
            </span>
          </motion.div>
        </div>

        {/* Hero Interactive Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="card-level-2 p-1">
            <div className="bg-surface-container rounded-md overflow-hidden">
              {/* Fake Browser Bar */}
              <div className="bg-surface-container-high px-4 py-3 border-b border-outline flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-outline" />
                  <div className="w-3 h-3 rounded-full bg-outline" />
                  <div className="w-3 h-3 rounded-full bg-outline" />
                  <span className="ml-4 text-data-mono text-on-surface-variant hidden sm:inline">app.yhankoeduca.ao/dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-valid flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Sistema Ativo
                  </span>
                </div>
              </div>

              <img src={heroImg} alt="Dashboard yhankoEduca" className="w-full h-auto object-cover opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* Numerical Proof Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '+50.000', label: 'Alunos Geridos' },
            { value: '98%', label: 'Satisfação dos Diretores' },
            { value: '-85%', label: 'Redução de Erros em Pautas' },
            { value: '100%', label: 'Conforme Legislação Angolana' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="card-level-1 p-6 border-t-2 border-t-primary"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-on-surface font-heading">{stat.value}</div>
              <div className="text-body-md font-medium text-on-surface-variant mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
