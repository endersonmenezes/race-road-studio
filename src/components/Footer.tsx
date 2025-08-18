const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded"></div>
              <span className="text-xl font-bold text-foreground">Races Games</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Produtora indie especializada em jogos de corrida e projetos personalizados. 
              Transformamos ideias em experiências emocionantes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#games" className="hover:text-foreground transition-colors">Jogos</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Races Games. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;