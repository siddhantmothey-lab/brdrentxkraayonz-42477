import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToOpportunity = () => {
    document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tattoo art background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div 
          id="progress-bar" 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-12">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary mb-4">
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Partnership Proposal</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="block" style={{ fontFamily: 'cursive', textTransform: 'lowercase' }}>
              <span className="text-primary">one of a kind</span>
            </span>
            <span className="block mt-2 sm:mt-4">BRDR</span>
            <span className="block">ENTERTAINMENT</span>
            <span className="block text-2xl sm:text-4xl md:text-5xl mt-2 sm:mt-4 text-muted-foreground">×</span>
            <span className="block mt-2 sm:mt-4">KRAAYONZ</span>
            <span className="block">PUNE</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-bold uppercase tracking-wide">
            A Strategic Partnership for Market Domination
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-12">
            <button 
              className="text-base sm:text-lg px-8 py-4 bg-primary text-primary-foreground font-black uppercase tracking-wider hover:bg-primary/90 transition-all border-2 border-primary hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] w-full sm:w-auto"
              onClick={scrollToOpportunity}
            >
              Explore The Opportunity
            </button>
            <button 
              className="text-base sm:text-lg px-8 py-4 bg-transparent text-foreground font-black uppercase tracking-wider border-2 border-foreground hover:bg-foreground hover:text-background transition-all w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
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
