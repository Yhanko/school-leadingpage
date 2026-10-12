import { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Phone, Mail, Building2, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres").max(100, "O nome é muito longo"),
  schoolName: z.string().min(2, "O nome da escola deve ter no mínimo 2 caracteres").max(150, "O nome é muito longo"),
  province: z.string().min(1, "Selecione uma província"),
  phone: z.string().min(9, "O telefone deve ter no mínimo 9 caracteres").max(20, "O telefone é muito longo"),
  email: z.string().email("Insira um email válido"),
  students: z.number().min(0, "A estimativa não pode ser negativa"),
  plan: z.string().min(1, "Selecione um plano"),
  notes: z.string().max(500, "As observações devem ter no máximo 500 caracteres").optional(),
});
interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
  initialStudentCount?: number;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Profissional',
  initialStudentCount = 350
}) => {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    province: 'Luanda',
    phone: '',
    email: '',
    students: initialStudentCount,
    plan: initialPlan,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = leadSchema.safeParse(formData);
    if (!validation.success) {
      const formattedErrors: Record<string, string> = {};
      validation.error.issues.forEach(issue => {
        formattedErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const rawApiUrl = (typeof window !== 'undefined' && (window as any).__ENV__?.VITE_SCHOOL_API_URL)
        || import.meta.env.VITE_SCHOOL_API_URL
        || 'https://school-api-production-a1c6.up.railway.app';
      const apiUrl = rawApiUrl.replace(/\/+$/, '');
      const response = await fetch(`${apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti triggered', err);
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      setIsSubmitting(false);
      toast.error('Ocorreu um erro ao enviar o pedido. Por favor, verifique os seus dados e tente novamente.');
    }
  };

  const provinces = [
    'Luanda', 'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango',
    'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 'Lunda Norte',
    'Lunda Sul', 'Malanje', 'Moxico', 'Namibe', 'Uíge', 'Zaire'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="card-level-1 max-w-xl w-full relative shadow-2xl shadow-black/50 p-0 border border-outline">
        <div className="bg-surface-container rounded-[15px] p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-on-surface-variant hover:text-on-surface p-2 rounded-lg bg-surface-container-highest transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary-container/20 text-primary">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-headline-md font-heading text-on-surface">Solicitar Demonstração Grátis</h3>
                  <p className="text-body-md text-on-surface-variant mt-1">Preencha abaixo para receber uma proposta personalizada em menos de 2 horas.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                  <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Seu Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Prof. Manuel Sebastião"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-surface-container-highest border ${errors.name ? 'border-red-500' : 'border-outline'} rounded-xl px-4 py-2.5 text-body-md text-on-surface focus:outline-none focus:border-primary`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Nome da Escola / Colégio *</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Colégio Esperança"
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        className={`w-full bg-surface-container-highest border ${errors.schoolName ? 'border-red-500' : 'border-outline'} rounded-xl pl-9 pr-4 py-2.5 text-body-md text-on-surface focus:outline-none focus:border-primary`}
                      />
                    </div>
                    {errors.schoolName && <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>}
                  </div>

                  <div>
                    <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Província *</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className={`w-full bg-surface-container-highest border ${errors.province ? 'border-red-500' : 'border-outline'} rounded-xl pl-9 pr-4 py-2.5 text-body-md text-on-surface focus:outline-none focus:border-primary appearance-none`}
                      >
                        {provinces.map((prov) => (
                          <option key={prov} value={prov}>{prov}</option>
                        ))}
                      </select>
                    </div>
                    {errors.province && <p className="text-red-500 text-xs mt-1">{errors.province}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Telefone / WhatsApp *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+244 923 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-surface-container-highest border ${errors.phone ? 'border-red-500' : 'border-outline'} rounded-xl pl-9 pr-4 py-2.5 text-body-md text-on-surface focus:outline-none focus:border-primary`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Email Principal *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="direcao@escola.co.ao"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-surface-container-highest border ${errors.email ? 'border-red-500' : 'border-outline'} rounded-xl pl-9 pr-4 py-2.5 text-body-md text-on-surface focus:outline-none focus:border-primary`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Estimativa de Alunos</label>
                    <input
                      type="number"
                      value={formData.students}
                      onChange={(e) => setFormData({ ...formData, students: Number(e.target.value) })}
                      className={`w-full bg-surface-container-highest border ${errors.students ? 'border-red-500' : 'border-outline'} rounded-xl px-4 py-2.5 text-body-md text-on-surface focus:outline-none focus:border-primary`}
                    />
                    {errors.students && <p className="text-red-500 text-xs mt-1">{errors.students}</p>}
                  </div>

                  <div>
                    <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Plano de Interesse</label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className={`w-full bg-surface-container-highest border ${errors.plan ? 'border-red-500' : 'border-outline'} rounded-xl px-4 py-2.5 text-body-md text-on-surface focus:outline-none focus:border-primary`}
                    >
                      <option value="Starter">Starter (Até 250 alunos)</option>
                      <option value="Profissional">Profissional (Até 800 alunos)</option>
                      <option value="Enterprise">Enterprise (Grande Porte)</option>
                    </select>
                    {errors.plan && <p className="text-red-500 text-xs mt-1">{errors.plan}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-label-caps text-on-surface-variant uppercase mb-1">Dúvidas ou Observações (Opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="Conte-nos brevemente o que pretende melhorar na sua escola..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`w-full bg-surface-container-highest border ${errors.notes ? 'border-red-500' : 'border-outline'} rounded-xl p-3 text-body-md text-on-surface focus:outline-none focus:border-primary`}
                  />
                  {errors.notes && <p className="text-red-500 text-xs mt-1">{errors.notes}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-body-lg flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span>Enviando Pedido...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      Enviar e Receber Proposta Comercial
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto border border-primary/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-headline-lg font-heading text-on-surface">Pedido Recebido com Sucesso!</h3>
              <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
                Obrigado, <strong className="text-on-surface">{formData.name}</strong>! A nossa equipa de consultores comerciais para a instituição <strong className="text-primary">{formData.schoolName}</strong> entrará em contacto no número <strong className="text-on-surface">{formData.phone}</strong> em menos de 2 horas.
              </p>

              <div className="p-4 rounded-xl bg-surface-container-highest border border-outline text-body-md text-on-surface-variant">
                <span>Deseja atendimento imediato? Ligue para <strong className="text-on-surface">+244 947 315 059</strong> ou envie mensagem no WhatsApp.</span>
              </div>

              <button
                onClick={onClose}
                className="btn-primary text-body-md"
              >
                Concluir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
