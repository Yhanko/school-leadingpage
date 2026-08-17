import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/yhankoIMG.png';

interface FooterProps {
  onOpenLeadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline text-on-surface-variant pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline">

          {/* Col 1: Brand info */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center">
              <img
                src={logoImg}
                alt="Yhanko Logo"
                className="h-8 w-auto"
              />
            </a>

            <p className="text-body-md text-on-surface-variant leading-relaxed max-w-sm">
              Plataforma de inteligência e gestão escolar desenvolvida para transformar a administração de escolas, colégios e institutos em Angola.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-label-caps font-heading text-on-surface uppercase tracking-wider">Navegação Rápidas</h4>
            <ul className="space-y-2 text-body-md text-on-surface-variant">
              <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#demonstracao" className="hover:text-primary transition-colors">Módulos & Funcionalidades</a></li>
              <li><a href="#vantagens" className="hover:text-primary transition-colors">Vantagens Comerciais</a></li>
              <li><a href="#simulador" className="hover:text-primary transition-colors">Simulador de ROI</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Planos & Preços Kz</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Portal Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-label-caps font-heading text-on-surface uppercase tracking-wider">Acessos</h4>
            <ul className="space-y-2 text-body-md text-on-surface-variant">
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface hover:text-primary flex items-center gap-1 font-bold"
                >
                  Portal da Escola <ArrowUpRight className="w-3 h-3 text-primary" />
                </a>
              </li>
              <li>
                <button onClick={onOpenLeadModal} className="hover:text-primary text-left">
                  Solicitar Proposta
                </button>
              </li>
              <li><a href="#depoimentos" className="hover:text-primary">Casos de Sucesso</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts in Angola */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-label-caps font-heading text-on-surface uppercase tracking-wider">Contactos em Angola</h4>
            <ul className="space-y-2.5 text-body-md text-on-surface-variant">
              <li className="flex items-center gap-2 text-on-surface">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Talatona, Luanda — Angola</span>
              </li>
              <li className="flex items-center gap-2 text-on-surface">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+244 947 315 059</span>
              </li>
              <li className="flex items-center gap-2 text-on-surface">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>yhankocorporation@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-label-caps text-on-surface-variant">
          <p>&copy; {new Date().getFullYear()} yhankoEduca. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-on-surface transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-on-surface transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-on-surface transition-colors">Segurança de Dados</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
