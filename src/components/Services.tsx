import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Desenvolvimento de Jogos",
      description: "Criação completa de jogos desde o conceito até o lançamento, com foco em qualidade e inovação.",
      features: ["Design de gameplay", "Arte e animações", "Programação", "Testes e QA"],
      icon: "🎮"
    },
    {
      title: "Consultoria Técnica",
      description: "Orientação especializada para projetos de games, otimização e melhorias técnicas.",
      features: ["Análise de performance", "Otimização de código", "Consultoria de gameplay", "Code review"],
      icon: "⚙️"
    },
    {
      title: "Porting e Adaptação",
      description: "Adaptação de jogos existentes para diferentes plataformas e dispositivos.",
      features: ["Multi-plataforma", "Mobile adaptation", "Console porting", "Web deployment"],
      icon: "📱"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Serviços Personalizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar suas ideias em realidade. 
            Do conceito ao lançamento, estamos aqui para ajudar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button variant="outline-glow" size="sm" className="w-full">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-card border border-border/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Tem uma ideia? Vamos conversar!</h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco para discutir seu projeto. Oferecemos consulta gratuita 
              para avaliar viabilidade e escopo do desenvolvimento.
            </p>
            <Button variant="hero" size="lg">
              Agendar Reunião
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;