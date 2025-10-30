import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sofa, Bed, Table, Archive, Home, Sparkles } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      icon: Sofa,
      title: "Móveis para Sala",
      description: "Sofás, poltronas, racks, mesas de centro e tudo que você precisa para uma sala confortável e elegante.",
      features: ["Sofás modulares", "Racks para TV", "Mesas de centro", "Poltronas decorativas"]
    },
    {
      icon: Bed,
      title: "Móveis para Quarto",
      description: "Camas, guarda-roupas, cômodas e criados-mudos para criar o quarto dos seus sonhos.",
      features: ["Camas e cabeceiras", "Guarda-roupas", "Cômodas", "Criados-mudos"]
    },
    {
      icon: Table,
      title: "Móveis para Cozinha",
      description: "Mesas, cadeiras, armários e tudo para tornar sua cozinha funcional e bonita.",
      features: ["Mesas de jantar", "Cadeiras", "Armários", "Balcões"]
    },
    {
      icon: Archive,
      title: "Móveis para Escritório",
      description: "Mesas de trabalho, cadeiras ergonômicas e estantes para um ambiente produtivo.",
      features: ["Mesas de escritório", "Cadeiras ergonômicas", "Estantes", "Gaveteiros"]
    },
    {
      icon: Home,
      title: "Móveis Planejados",
      description: "Projetos personalizados para otimizar cada espaço da sua casa com design único.",
      features: ["Projetos 3D", "Medição gratuita", "Instalação inclusa", "Garantia total"]
    },
    {
      icon: Sparkles,
      title: "Decoração",
      description: "Objetos decorativos, tapetes, almofadas e tudo para deixar sua casa com sua cara.",
      features: ["Objetos decorativos", "Tapetes", "Almofadas", "Quadros e espelhos"]
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos Serviços
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Oferecemos uma ampla variedade de móveis para todos os ambientes da sua casa. 
            Desde peças clássicas até designs modernos, temos tudo que você precisa 
            para criar ambientes únicos e funcionais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group p-6 hover:shadow-medium transition-all duration-300 bg-white border-l-4 border-l-transparent hover:border-l-primary">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="https://wa.me/5563997576272?text=Olá! Gostaria de saber mais sobre os móveis para [AMBIENTE].">
                    Solicitar Orçamento
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white shadow-strong">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Pronto para transformar sua casa?
          </h3>
          <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Entre em contato conosco e descubra como podemos ajudar a criar 
            o ambiente perfeito para você e sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white/20 text-white border-white/40 hover:bg-white hover:text-primary shadow-medium backdrop-blur-sm"
              asChild
            >
              <a href="https://wa.me/5563997576272?text=Olá! Gostaria de conhecer mais sobre os produtos da Geração Móveis.">
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/60 hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-medium backdrop-blur-sm"
              asChild
            >
              <a href="mailto:vendasgeracaome@gmail.com">
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;