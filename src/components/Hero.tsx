import { Button } from "@/components/ui/button";
import heroRacing from "@/assets/hero-racing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroRacing})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Races Games
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Produtora indie especializada em jogos de corrida emocionantes. 
            Criamos experiências únicas e também desenvolvemos projetos personalizados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="animate-glow">
              Conheça Nossos Jogos
            </Button>
            <Button variant="outline-glow" size="lg">
              Projetos Personalizados
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-tech-blue rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-speed-orange rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-neon-green rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;