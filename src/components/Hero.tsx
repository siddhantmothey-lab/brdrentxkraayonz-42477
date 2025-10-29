import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToOpportunity = () => {
    document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tattoo art background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div 
          id="progress-bar" 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">Partnership Proposal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              BRDR Entertainment
            </span>
            <br />
            <span className="text-foreground">×</span>
            <br />
            <span className="text-foreground">Kraayonz Pune</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A Strategic Partnership for Market Domination
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToOpportunity}
            >
              Explore The Opportunity
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
