import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToKPIs = () => {
    document.getElementById('kpis')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden pt-20">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-50">
        <div 
          id="progress-bar" 
          className="h-full bg-red-500 transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Title Badge */}
          <div className="inline-block mb-8 px-6 py-3 border-2 border-red-500 rounded-none">
            <span className="text-red-500 text-sm font-bold tracking-[0.3em] uppercase">
              Growth Partnership Proposal
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="mb-12">
            <div className="text-white text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-4">
              BRDR ENTERTAINMENT
            </div>
            <div className="text-zinc-600 text-4xl md:text-6xl font-black tracking-tight leading-none mt-4">
              ×
            </div>
            <div className="text-white text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mt-4">
              SOULPRINTS
            </div>
          </h1>
          
          {/* Engagement Overview */}
          <div className="max-w-3xl mx-auto mb-12 space-y-4">
            <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide leading-relaxed">
              A <span className="text-red-500 font-bold">two-phase growth partnership</span> designed to first establish predictable, ROI-driven acquisition and then scale into a long-term <span className="text-red-500 font-bold">Loyalty & MRR Engine</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToKPIs}
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-6 text-lg font-bold tracking-wider rounded-none border-none transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              VIEW PHASE 1
            </Button>
            <Button 
              onClick={() => document.getElementById('phase2')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-bold tracking-wider rounded-none transition-all duration-300 w-full sm:w-auto"
            >
              VIEW PHASE 2
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent animate-bounce"></div>
            <span className="text-zinc-600 text-xs tracking-widest mt-2 uppercase">Scroll</span>
          </div>
        </div>
      </div>

      {/* Decorative X Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-zinc-800">
          <path d="M8 8L32 32M32 8L8 32" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
        </svg>
      </div>
    </section>
  );
};
