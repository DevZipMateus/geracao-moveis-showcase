import { Card } from "@/components/ui/card";
import { Heart, Star, Users, Clock } from "lucide-react";

const Sobre = () => {
  const features = [
    {
      icon: Heart,
      title: "Paixão por móveis",
      description: "Cada peça é selecionada com cuidado para oferecer o melhor em design e funcionalidade."
    },
    {
      icon: Star,
      title: "Qualidade garantida",
      description: "Trabalhamos apenas com fornecedores de confiança e produtos de alta qualidade."
    },
    {
      icon: Users,
      title: "Atendimento personalizado",
      description: "Nossa equipe especializada está pronta para ajudar você a escolher o móvel perfeito."
    },
    {
      icon: Clock,
      title: "Experiência no mercado",
      description: "Anos de experiência no setor moveleiro nos permite oferecer o melhor serviço."
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sobre a Móveis Click
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa dedicada a transformar ambientes através de móveis de qualidade. 
            Nossa missão é inovar a forma de comprar, oferecendo uma experiência única e 
            produtos que combinam funcionalidade, beleza e durabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
                <div className="mb-4">
                  <IconComponent className="h-12 w-12 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
            <p className="text-foreground leading-relaxed">
              Oferecer móveis de qualidade superior com atendimento personalizado, 
              tornando o processo de compra uma experiência única e satisfatória para nossos clientes.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-soft">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">Nossa Visão</h3>
            <p className="text-foreground leading-relaxed">
              Ser reconhecida como a melhor loja de móveis de Palmas - TO, 
              referência em qualidade, variedade e inovação no atendimento ao cliente.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-border shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-foreground leading-relaxed">
              Qualidade, transparência, compromisso com o cliente, inovação e 
              responsabilidade social são os pilares que guiam todas as nossas ações.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sobre;