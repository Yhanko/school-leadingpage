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
    <section id="depoimentos" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full card-level-1 border-outline text-label-caps text-primary uppercase">
            <Star className="w-3.5 h-3.5 fill-primary" /> Casos de Sucesso
          </div>
          <h2 className="text-headline-md sm:text-headline-lg font-heading text-on-surface">
            O Que Dizem os Diretores que Confiam no yhankoEduca
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Descubra como ajudamos instituições de ensino por toda Angola a atingir um novo nível de excelência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="card-level-1 p-8 rounded-2xl flex flex-col justify-between relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-body-md text-on-surface-variant italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-outline flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary p-[2px]">
                  <div className="w-full h-full bg-surface-container-highest rounded-full flex items-center justify-center font-bold text-on-surface text-body-md">
                    {rev.name.charAt(0)}
                  </div>
                </div>

                <div className="flex flex-col text-xs">
                  <span className="text-headline-sm font-heading text-on-surface">{rev.name}</span>
                  <span className="text-on-surface-variant flex items-center gap-1 mt-1">
                    <Building2 className="w-3 h-3 text-primary" /> {rev.school}
                  </span>
                  <span className="text-label-caps text-on-surface-variant flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-on-surface-variant" /> {rev.location}
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
