import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre a Races Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma produtora indie apaixonada por velocidade e tecnologia, 
            criando jogos de corrida inovadores e experiências personalizadas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏁</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Especialistas em Corrida</h3>
              <p className="text-muted-foreground">
                Nossa expertise está focada em jogos de corrida, desde simuladores realistas 
                até experiências arcade emocionantes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-speed-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Tecnologia Avançada</h3>
              <p className="text-muted-foreground">
                Utilizamos as mais modernas tecnologias de desenvolvimento para criar 
                experiências fluidas e visualmente impressionantes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Projetos Personalizados</h3>
              <p className="text-muted-foreground">
                Além dos nossos jogos, desenvolvemos soluções personalizadas para 
                clientes que buscam experiências únicas e inovadoras.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;