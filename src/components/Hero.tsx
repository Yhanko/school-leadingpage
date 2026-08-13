import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Award, Play } from 'lucide-react';
import heroImg from '../assets/dashboard_mockup.png';

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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-[#FF5777]/30 bg-[#FF5777]/10 text-xs font-semibold text-white shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-[#FF5777] animate-ping" />
            <Award className="w-4 h-4 text-[#FF5777]" />
            Plataforma N.º 1 em Angola para Gestão de Escolas e Colégios
          </div>
        </motion.div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Transforme a Gestão da sua Escola com <span className="gradient-text-pink">Inteligência</span> e <span className="gradient-text-purple">Controlo Total</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
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
          </motion.div>

          {/* Micro Trust Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-gray-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Teste sem compromisso
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" /> Suporte técnico local em Luanda
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5 de Avaliação dos Diretores
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
          <div className="gradient-border shadow-2xl shadow-[#FF5777]/20">
            <div className="gradient-border-inner overflow-hidden rounded-[15px] bg-[#0d121f]">
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
              
              <img src={heroImg} alt="Dashboard yhankoEduca" className="w-full h-auto object-cover" />
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
              className="glass-card p-6 border-t-2 border-t-[#FF5777]"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">{stat.value}</div>
              <div className="text-xs sm:text-sm font-medium text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
