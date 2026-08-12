import React from 'react';
import { Star, Quote, MapPin, Building2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. António Cavalcante',
      role: 'Diretor Geral',
      school: 'Complexo Escolar Palanca Negra',
      location: 'Luanda, Talatona',
      text: 'O yhankoEduca revolucionou a nossa organização. Antes levávamos 2 semanas para fechar as pautas trimestrais, agora fazemos tudo em poucas horas com total rigor e sem erros de cálculo.',
      rating: 5,
    },
    {
      name: 'Dra. Maria de Fátima Bento',
      role: 'Directora Pedagógica',
      school: 'Colégio Esperança do Saber',
      location: 'Benguela, Centro',
      text: 'A comunicação com os encarregados de educação melhorou 100%. As notificações automáticas de mensalidades reduziram significativamente os atrasos no pagamento de propinas.',
      rating: 5,
    },
    {
      name: 'Prof. Mateus Domingos',
      role: 'Coordenador Académico',
      school: 'Instituto Privado Boa Esperança',
      location: 'Huambo',
      text: 'Os professores adaptaram-se no primeiro dia. O sistema é extremamente simples e o suporte técnico em Angola é fantástico. Recomendo vivamente a qualquer escola.',
      rating: 5,
    }
  ];

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-[#0d121f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-gray-700 text-xs font-semibold text-yellow-400">
            <Star className="w-3.5 h-3.5 fill-yellow-400" /> Casos de Sucesso
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            O Que Dizem os Diretores que Confiam no yhankoEduca
          </h2>
          <p className="text-gray-400 text-base">
            Descubra como ajudamos instituições de ensino por toda Angola a atingir um novo nível de excelência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border-gray-800 flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-[#FF5777]/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800/80 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#FF5777] to-[#6366f1] p-[2px]">
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {rev.name.charAt(0)}
                  </div>
                </div>

                <div className="flex flex-col text-xs">
                  <span className="font-bold text-white text-sm">{rev.name}</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-[#FF5777]" /> {rev.school}
                  </span>
                  <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-gray-500" /> {rev.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
