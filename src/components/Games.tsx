import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gameScreenshot1 from "@/assets/game-screenshot-1.jpg";
import gameScreenshot2 from "@/assets/game-screenshot-2.jpg";
import gameScreenshot3 from "@/assets/game-screenshot-3.jpg";

const Games = () => {
  const games = [
    {
      title: "Neon Rush",
      description: "Corrida futurística em ambiente cyberpunk com carros personalizáveis e pistas dinâmicas.",
      image: gameScreenshot1,
      status: "Em Desenvolvimento"
    },
    {
      title: "Garage Master",
      description: "Simule a experiência completa de tuning e personalização de carros esportivos.",
      image: gameScreenshot2,
      status: "Beta Disponível"
    },
    {
      title: "Split Speed",
      description: "Modo competitivo local e online com split-screen e rankings globais.",
      image: gameScreenshot3,
      status: "Lançamento 2024"
    }
  ];

  return (
    <section id="games" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossos Jogos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os projetos que estamos desenvolvendo e os jogos já disponíveis 
            para a comunidade gamer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Card key={index} className="bg-card border-border/50 overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {game.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{game.title}</h3>
                <p className="text-muted-foreground mb-4">{game.description}</p>
                <Button variant="outline-glow" size="sm" className="w-full">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="speed" size="lg">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Games;