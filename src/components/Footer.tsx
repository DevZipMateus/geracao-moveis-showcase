import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/610b3a93-1b90-4d25-b450-50b074d745cb.png" 
                alt="Geração Móveis Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Geração Móveis</h3>
                <p className="text-sm text-primary-foreground/80">Inovando a forma de comprar</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Especializada em móveis de qualidade para todos os ambientes. 
              Transforme sua casa em um lar dos sonhos conosco.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+5563997576272" 
                  className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (63) 99757-6272
                </a>
              </li>
              <li>
                <a 
                  href="mailto:vendasgeracaome@gmail.com" 
                  className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  vendasgeracaome@gmail.com
                </a>
              </li>
              <li className="flex items-start text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Rua 17, Qd 33, Lt 11<br />Palmas - TO</span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horário de Funcionamento</h4>
            <div className="text-primary-foreground/80">
              <p className="font-medium">Segunda a Sexta-feira</p>
              <p>08:00 às 18:00</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Redes Sociais</h5>
              <a 
                href="https://instagram.com/geracaomoveisoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @geracaomoveisoficial
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {currentYear} Geração Móveis. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            CNPJ: 53.201.394/0001-02
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;