import { useState, useEffect } from 'react';
import { Check, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenLeadModalWithPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenLeadModalWithPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'mensal' | 'anual'>('anual');
  const [apiPlans, setApiPlans] = useState<any[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const apiUrl = import.meta.env.VITE_SCHOOL_API_URL;
        const response = await fetch(`${apiUrl}/plans`);
        if (response.ok) {
          const data = await response.json();
          setApiPlans(data);
        }
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };
    fetchPlans();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO').format(price) + ' Kz';
  };

  const plans = apiPlans.map((apiPlan, index) => {
    const mPrice = apiPlan.price;

    return {
      name: apiPlan.name,
      badge: index === 1 ? 'Mais Popular' : 'Plano', // Make the second plan visually stand out by default
      description: `Perfeito para instituições com até ${apiPlan.maxStudents} alunos.`,
      monthlyPrice: mPrice === 0 ? 'Grátis' : formatPrice(mPrice),
      annualPrice: mPrice === 0 ? 'Grátis' : formatPrice(mPrice),
      annualNote: mPrice === 0 ? 'Plano gratuito' : `Cobrado ${formatPrice(mPrice * 12)} / ano`,
      popular: index === 1,
      accentColor: 'indigo',
      features: [
        `Até ${apiPlan.maxStudents} Alunos Matriculados`,
        `Até ${apiPlan.maxTeachers} Professores`,
        'Gestão de Turmas e Salas',
        'Suporte Básico'
      ]
    };
  });

  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full card-level-1 border-outline text-label-caps text-primary uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Planos Transparentes
          </div>
          <h2 className="text-headline-md sm:text-headline-lg font-heading text-on-surface">
            Investimento Claro para o Crescimento da sua Escola
          </h2>
          <p className="text-on-surface-variant text-body-lg">
            Escolha o plano ideal para a dimensão da sua instituição. Sem taxas ocultas.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center pt-4">
            <div className="card-level-1 p-1.5 rounded-xl border border-outline flex items-center gap-1">
              <button
                onClick={() => setBillingCycle('mensal')}
                className={`px-5 py-2 rounded-lg text-body-md font-semibold transition-all ${billingCycle === 'mensal'
                  ? 'bg-surface-container-highest text-on-surface shadow'
                  : 'text-on-surface-variant hover:text-on-surface'
                  }`}
              >
                Pagamento Mensal
              </button>
              <button
                onClick={() => setBillingCycle('anual')}
                className={`px-5 py-2 rounded-lg text-body-md font-semibold transition-all flex items-center gap-2 ${billingCycle === 'anual'
                  ? 'bg-primary text-black shadow'
                  : 'text-on-surface-variant hover:text-on-surface'
                  }`}
              >
                Pagamento Anual
                <span className="text-label-caps bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full uppercase">
                  20% Desconto
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const priceDisplay = billingCycle === 'anual' ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={i}
                className={`card-level-1 p-8 rounded-2xl flex flex-col justify-between relative transition-all duration-300 ${plan.popular
                  ? 'border-2 border-primary bg-surface-container shadow-2xl shadow-black/50 lg:-translate-y-2'
                  : 'border border-outline hover:border-secondary'
                  }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-label-caps px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    ★ {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    {!plan.popular && (
                      <span className="text-label-caps text-on-surface-variant uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-headline-md font-heading text-on-surface mt-1">{plan.name}</h3>
                    <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 p-4 rounded-xl bg-surface-container-highest border border-outline">
                    <div className="flex items-baseline gap-2">
                      <span className="text-headline-md sm:text-headline-lg text-on-surface font-heading">
                        {priceDisplay}
                      </span>
                      {priceDisplay !== 'Sob Consulta' && (
                        <span className="text-label-caps text-on-surface-variant">/mês</span>
                      )}
                    </div>
                    {billingCycle === 'anual' && priceDisplay !== 'Sob Consulta' && (
                      <p className="text-label-caps text-primary mt-1">
                        ✓ {plan.annualNote} (Economize 2 meses)
                      </p>
                    )}
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-label-caps text-on-surface-variant uppercase tracking-wider">O que está incluído:</span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={() => onOpenLeadModalWithPlan(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-body-md transition-all cursor-pointer ${plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                    }`}
                >
                  Escolher {plan.name}
                </button>

              </div>
            );
          })}
        </div>

        {/* Guarantee Footer Banner */}
        <div className="mt-16 card-level-1 p-6 rounded-2xl border-outline max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="text-headline-sm font-heading text-on-surface">Garantia de Adaptação sem Riscos</h4>
              <p className="text-body-md text-on-surface-variant mt-1">Oferecemos 14 dias de teste sem compromisso e apoio completo na migração dos seus dados.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenLeadModalWithPlan('Geral')}
            className="text-label-caps font-semibold text-primary hover:underline shrink-0 uppercase"
          >
            Falar com Consultor Comercial →
          </button>
        </div>

      </div>
    </section>
  );
};
