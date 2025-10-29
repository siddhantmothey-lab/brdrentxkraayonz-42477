import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Opportunity', id: 'opportunity' },
    { label: 'Proposal', id: 'proposal' },
    { label: 'Numbers', id: 'numbers' },
    { label: 'Strategy', id: 'strategy' },
    { label: 'Metrics', id: 'metrics' },
    { label: 'Advantages', id: 'advantages' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Why BRDR', id: 'why-brdr' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bebas tracking-wider hover:text-primary transition-colors"
            >
              BRDR × Kraayonz
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lg font-black tracking-wider hover:text-primary transition-colors uppercase"
              aria-label="Toggle menu"
            >
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-background transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-foreground hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <X className="h-8 w-8" />
        </button>
        
        <div className="flex items-center justify-center min-h-screen">
          <nav className="space-y-6 text-center">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter hover:text-primary transition-all duration-300 uppercase"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 0.05}s`
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
