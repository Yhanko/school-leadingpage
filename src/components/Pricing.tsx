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
        const apiUrl = import.meta.env.VITE_SCHOOL_API_URL || 'http://localhost:4000';
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

  const defaultPlans = [
    {
      name: 'Starter',
      badge: 'Escolas Pequenas',
      description: 'Perfeito para creches, jardins e colégios iniciais com até 250 alunos.',
      monthlyPrice: '45.000 Kz',
      annualPrice: '36.000 Kz', // per month billed annually
      annualNote: 'Cobrado 432.000 Kz / ano',
      popular: false,
      accentColor: 'indigo',
      features: [
        'Até 250 Alunos Matriculados',
        'Gestão de Turmas e Salas',
        'Lançamento de Notas e Sumários',
        'Emissão de Pautas em PDF',
        'Controlo de Propinas e Faturação',
        'Suporte por WhatsApp e Email'
      ]
    },
    {
      name: 'Profissional',
      badge: 'Mais Popular em Angola',
      description: 'A escolha ideal para colégios completos (Primário, I e II Ciclos).',
      monthlyPrice: '85.000 Kz',
      annualPrice: '68.000 Kz',
      annualNote: 'Cobrado 816.000 Kz / ano',
      popular: true,
      accentColor: 'pink',
      features: [
        'Até 800 Alunos Matriculados',
        'Todas as funcionalidades do Starter',
        'Portal dos Encarregados de Educação',
        'Envio de Notificações de Cobrança',
        'Módulo Disciplinar e Ocorrências',
        'Relatórios e Gráficos Financeiros',
        'Treinamento Completo da Equipa Incluído'
      ]
    },
    {
      name: 'Enterprise',
      badge: 'Grandes Instituições',
      description: 'Solução sob medida para grandes complexos escolares e redes de ensino.',
      monthlyPrice: 'Sob Consulta',
      annualPrice: 'Sob Consulta',
      annualNote: 'Preço personalizado',
      popular: false,
      accentColor: 'emerald',
      features: [
        'Alunos e Turmas Ilimitados',
        'Todas as funcionalidades do Profissional',
        'Integração com Sistemas Bancários',
        'Gestor de Conta Técnico Exclusivo',
        'Suporte Prioritário 24/7 Presencial/Online',
        'Personalização de Documentos e Boletins',
        'Migração e Importação de Dados Grátis'
      ]
    }
  ];

  const plans = defaultPlans.map(plan => {
    const apiPlan = apiPlans.find(p => p.name.toLowerCase() === plan.name.toLowerCase());
    if (apiPlan) {
      const mPrice = apiPlan.price;
      const aPrice = mPrice * 0.8; // 20% discount
      return {
        ...plan,
        monthlyPrice: formatPrice(mPrice),
        annualPrice: formatPrice(aPrice),
        annualNote: `Cobrado ${formatPrice(aPrice * 12)} / ano`
      };
    }
    return plan;
  });

  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-gray-700 text-xs font-semibold text-[#FF5777]">
            <Sparkles className="w-3.5 h-3.5" /> Planos Transparentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Investimento Claro para o Crescimento da sua Escola
          </h2>
          <p className="text-gray-400 text-base">
            Escolha o plano ideal para a dimensão da sua instituição. Sem taxas ocultas.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center pt-4">
            <div className="glass-card p-1.5 rounded-xl border border-gray-800 flex items-center gap-1">
              <button
                onClick={() => setBillingCycle('mensal')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  billingCycle === 'mensal'
                    ? 'bg-gray-800 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Pagamento Mensal
              </button>
              <button
                onClick={() => setBillingCycle('anual')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  billingCycle === 'anual'
                    ? 'bg-[#FF5777] text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Pagamento Anual
                <span className="text-[10px] bg-yellow-400 text-gray-900 font-extrabold px-2 py-0.5 rounded-full uppercase">
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
                className={`glass-card p-8 rounded-2xl flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-[#FF5777] bg-[#121827] shadow-2xl shadow-[#FF5777]/20 lg:-translate-y-2'
                    : 'border border-gray-800 hover:border-gray-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF5777] to-[#6366f1] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    ★ {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    {!plan.popular && (
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 p-4 rounded-xl bg-gray-900/60 border border-gray-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                        {priceDisplay}
                      </span>
                      {priceDisplay !== 'Sob Consulta' && (
                        <span className="text-xs text-gray-400 font-medium">/mês</span>
                      )}
                    </div>
                    {billingCycle === 'anual' && priceDisplay !== 'Sob Consulta' && (
                      <p className="text-[11px] text-emerald-400 font-medium mt-1">
                        ✓ {plan.annualNote} (Economize 2 meses)
                      </p>
                    )}
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">O que está incluído:</span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={() => onOpenLeadModalWithPlan(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    plan.popular
                      ? 'gradient-btn text-white shadow-lg shadow-[#FF5777]/30'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  }`}
                >
                  Escolher {plan.name}
                </button>

              </div>
            );
          })}
        </div>

        {/* Guarantee Footer Banner */}
        <div className="mt-16 glass-card p-6 rounded-2xl border-gray-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Garantia de Adaptação sem Riscos</h4>
              <p className="text-xs text-gray-400">Oferecemos 14 dias de teste sem compromisso e apoio completo na migração dos seus dados.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenLeadModalWithPlan('Geral')}
            className="text-xs font-semibold text-[#FF5777] hover:underline shrink-0"
          >
            Falar com Consultor Comercial →
          </button>
        </div>

      </div>
    </section>
  );
};
