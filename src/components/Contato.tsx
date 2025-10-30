import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const Contato = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(63) 99757-6272",
      action: "tel:+5563997576272",
      description: "Ligue para nós"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "vendasgeracaome@gmail.com",
      action: "mailto:vendasgeracaome@gmail.com",
      description: "Envie um e-mail"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua 17, Qd 33, Lt 11",
      action: "#",
      description: "Palmas - TO"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sexta-feira",
      action: "#",
      description: "08:00 às 18:00"
    }
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Estamos prontos para atender você! Entre em contato conosco através 
            dos canais abaixo e descubra como podemos transformar sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            const isClickable = contact.action !== "#";
            
            const CardContent = (
              <Card className={`p-6 text-center shadow-soft transition-all duration-300 ${
                isClickable ? "hover:shadow-medium cursor-pointer border-l-4 border-l-transparent hover:border-l-primary" : ""
              }`}>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {contact.info}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {contact.description}
                  </p>
                </div>
              </Card>
            );

            return isClickable ? (
              <a key={index} href={contact.action} className="block">
                {CardContent}
              </a>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* WhatsApp Card */}
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center shadow-medium">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                WhatsApp
              </h3>
              <p className="text-green-700 mb-6">
                Converse conosco pelo WhatsApp e tire todas as suas dúvidas. 
                Atendimento rápido e personalizado!
              </p>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white shadow-medium w-full"
                asChild
              >
                <a href="https://wa.me/5563997576272?text=Olá! Gostaria de conhecer mais sobre os móveis da Geração Móveis.">
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </Card>

          {/* Instagram Card */}
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-pink-50 to-purple-100 border-pink-200 text-center shadow-medium">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-2">
                Instagram
              </h3>
              <p className="text-purple-700 mb-6">
                Acompanhe nossos produtos e novidades no Instagram. 
                Inspirações para decorar sua casa!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-medium w-full"
                asChild
              >
                <a 
                  href="https://instagram.com/geracaomoveisoficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Seguir no Instagram
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <Card className="p-6 sm:p-8 bg-muted/30">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
              Informações Adicionais
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div>
                <h4 className="font-medium text-foreground mb-2">CNPJ:</h4>
                <p className="text-muted-foreground">53.201.394/0001-02</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Localização:</h4>
                <p className="text-muted-foreground">Região de Palmas - TO</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contato;