import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded"></div>
            <span className="text-xl font-bold text-foreground">Races Games</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#games" className="text-muted-foreground hover:text-foreground transition-colors">
              Jogos
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
          
          <Button variant="outline-glow" size="sm">
            Fale Conosco
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;