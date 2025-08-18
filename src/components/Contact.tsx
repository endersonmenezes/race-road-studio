import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para acelerar seu projeto? Entre em contato conosco e vamos 
            transformar suas ideias em jogos incríveis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Informações de Contato</h3>
            
            <div className="space-y-6">
              <Card className="bg-card border-border/50">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-tech-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contato@races.games</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-speed-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Website</h4>
                    <p className="text-muted-foreground">races.games</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="p-6 flex items-center">
                  <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Discord</h4>
                    <p className="text-muted-foreground">races.games/discord</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="bg-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Envie sua Mensagem</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Projeto</label>
                    <select className="w-full p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-foreground">
                      <option>Desenvolvimento de Jogo</option>
                      <option>Consultoria Técnica</option>
                      <option>Porting e Adaptação</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Conte-nos sobre seu projeto..."
                    ></textarea>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;