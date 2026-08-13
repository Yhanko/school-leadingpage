import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/yhankoIMG.png';

interface FooterProps {
  onOpenLeadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  return (
    <footer className="bg-[#080b12] border-t border-gray-800 text-gray-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Col 1: Brand info */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center">
              <img 
                src={logoImg} 
                alt="Yhanko Logo" 
                className="h-8 w-auto"
              />
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Plataforma de inteligência e gestão escolar desenvolvida para transformar a administração de escolas, colégios e institutos em Angola.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ● Servidores Ativos em Luanda
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegação Rápidas</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#FF5777] transition-colors">Início</a></li>
              <li><a href="#demonstracao" className="hover:text-[#FF5777] transition-colors">Módulos & Funcionalidades</a></li>
              <li><a href="#vantagens" className="hover:text-[#FF5777] transition-colors">Vantagens Comerciais</a></li>
              <li><a href="#simulador" className="hover:text-[#FF5777] transition-colors">Simulador de ROI</a></li>
              <li><a href="#planos" className="hover:text-[#FF5777] transition-colors">Planos & Preços Kz</a></li>
              <li><a href="#faq" className="hover:text-[#FF5777] transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Portal Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Acessos</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="http://localhost:3000/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF5777] flex items-center gap-1 font-semibold"
                >
                  Portal da Escola <ArrowUpRight className="w-3 h-3 text-[#FF5777]" />
                </a>
              </li>
              <li>
                <button onClick={onOpenLeadModal} className="hover:text-[#FF5777] text-left">
                  Solicitar Proposta
                </button>
              </li>
              <li><a href="#depoimentos" className="hover:text-[#FF5777]">Casos de Sucesso</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts in Angola */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contactos em Angola</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#FF5777] shrink-0" />
                <span>Talatona, Luanda — Angola</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#FF5777] shrink-0" />
                <span>+244 923 000 000 / 990 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-[#FF5777] shrink-0" />
                <span>comercial@yhankoeduca.ao</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} yhankoEduca. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Segurança de Dados</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
