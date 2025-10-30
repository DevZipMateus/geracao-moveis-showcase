import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import logoMoveisClick from "@/assets/logo-moveis-click.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="pt-20 bg-white/95 text-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img 
                src={logoMoveisClick} 
                alt="Móveis Click - Compre no conforto do seu lar" 
                className="h-56 lg:h-72 w-auto mx-auto lg:mx-0"
              />
            </div>
            <h2 className="text-xl lg:text-2xl mb-6 text-muted-foreground font-light">
              Transforme sua casa em um lar dos sonhos com nossa ampla seleção de móveis de qualidade
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Somos uma loja especializada em móveis em geral, localizada em Palmas - TO. 
              Com anos de experiência no mercado, oferecemos produtos de qualidade superior 
              e atendimento personalizado para tornar sua casa ainda mais especial.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-medium"
                onClick={() => scrollToSection("servicos")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conheça nossos produtos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-medium"
                asChild
              >
                <a href="https://wa.me/5563997576272?text=Olá! Gostaria de conhecer mais sobre os móveis da Móveis Click.">
                  <Phone className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8 text-muted-foreground">
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="mr-2 h-4 w-4" />
                <span>(63) 99757-6272</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Palmas - TO</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 shadow-strong border-2 border-primary/20">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/610b3a93-1b90-4d25-b450-50b074d745cb.png" 
                  alt="Móveis Click - Logo" 
                  className="mx-auto mb-6 h-24 w-auto"
                />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Inovando a Forma de Comprar</h3>
                <p className="text-muted-foreground mb-6">
                  Qualidade, variedade e atendimento excepcional em um só lugar.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">+1000</div>
                    <div className="text-sm text-muted-foreground">Produtos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Qualidade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">24h</div>
                    <div className="text-sm text-muted-foreground">Atendimento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;