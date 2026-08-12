import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqProps {
  onOpenLeadModal: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onOpenLeadModal }) => {
  const faqs = [
    {
      q: 'É necessário instalar servidores caros na escola?',
      a: 'Não. O yhankoEduca funciona 100% na nuvem segura. Apenas precisa de um computador, tablet ou telefone com acesso à internet para aceder ao sistema instantaneamente.'
    },
    {
      q: 'Como funciona a migração dos alunos e dados atuais da minha escola?',
      a: 'A nossa equipa técnica apoia na importação de todos os alunos, turmas e professores a partir de listas em Excel ou ficheiros existentes, garantindo transição sem perda de informação.'
    },
    {
      q: 'O sistema emite pautas de acordo com as normas de Angola?',
      a: 'Sim! O software calcula médias trimestrais e anuais com o algoritmo oficial e gera pautas oficiais prontas para impressão e afixação.'
    },
    {
      q: 'Como é feito o treinamento dos professores e da secretaria?',
      a: 'Disponibilizamos sessões de treinamento (presencial em Luanda ou online para províncias), acompanhadas de manuais em português e vídeos explicativos passo a passo.'
    },
    {
      q: 'Quais os métodos de pagamento aceites para a licença do software?',
      a: 'Aceitamos pagamentos por Transferência Bancária (IBAN), Multicaixas (TPA) ou Depósito Direto em Kwanza (Kz).'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-gray-700 text-xs font-semibold text-indigo-400">
            <HelpCircle className="w-3.5 h-3.5" /> Esclareça as suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-base">
            Tem alguma questão adicional? A nossa equipa comercial está pronta para responder.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="glass-card rounded-2xl border-gray-800 overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-white text-base sm:text-lg">{faq.q}</span>
                  <div className={`p-1.5 rounded-lg bg-gray-800/80 text-[#FF5777] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FF5777]/20' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-gray-300 text-sm leading-relaxed border-t border-gray-800/60 mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">
            Ainda tem dúvidas?{' '}
            <button
              onClick={onOpenLeadModal}
              className="text-[#FF5777] font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Falar agora no WhatsApp com a nossa equipa
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
