import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target } from "lucide-react";

export const Numbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const months = [
    { month: 1, revenue: "75K", net: "-38K", status: "Foundation" },
    { month: 2, revenue: "1.13L", net: "38K", status: "Building" },
    { month: 3, revenue: "1.5L", net: "75K", status: "Growing" },
    { month: 4, revenue: "2.25L", net: "1.5L", status: "Scaling" },
    { month: 5, revenue: "3L", net: "2.25L", status: "Thriving" },
    { month: 6, revenue: "3.75L", net: "3L", status: "Dominating" }
  ];

  const highlights = [
    {
      icon: DollarSign,
      label: "Monthly Investment",
      value: "₹75,000",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      label: "Expected Return (Month 6)",
      value: "₹3.75L",
      color: "from-primary to-accent"
    },
    {
      icon: Target,
      label: "Net Gain (Month 6)",
      value: "₹3L",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="numbers" ref={sectionRef} className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Why ₹75,000 Makes <span className="text-primary">Business Sense</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-bold">
            Let's talk numbers honestly, Sameer Sir.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 bg-primary text-primary-foreground border-2 border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background flex items-center justify-center mb-4 border-2 border-background">
                  <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="text-xs sm:text-sm font-black mb-2 uppercase tracking-wider">{highlight.label}</div>
                <div className="text-3xl sm:text-4xl font-black">{highlight.value}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* ROI Timeline */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-12 bg-card border-2 border-primary">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 text-center uppercase">Expected Return: 5X ROI</h3>
            
            <div className="space-y-3 sm:space-y-4">
              {months.map((data, index) => (
                <div 
                  key={index}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 border-2 transition-all ${
                    isVisible ? 'animate-slide-in' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    borderColor: index === months.length - 1 ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    background: index === months.length - 1 ? 'hsl(var(--primary) / 0.1)' : 'transparent'
                  }}
                >
                  <div className="flex-shrink-0 w-16 sm:w-20">
                    <div className="text-xs sm:text-sm text-muted-foreground font-black uppercase">Month {data.month}</div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-1 font-bold uppercase">Revenue</div>
                        <div className="text-xl sm:text-2xl font-black text-primary">{data.revenue}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-1 font-bold uppercase">Net Gain</div>
                        <div className={`text-xl sm:text-2xl font-black ${data.net.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                          {data.net}
                        </div>
                      </div>
                      <div className="sm:text-right flex-1">
                        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 border border-primary">
                          <span className="text-xs sm:text-sm font-black text-primary uppercase">{data.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 space-y-6 text-center">
              <div className="p-6 sm:p-8 bg-primary/10 border-2 border-primary">
                <div className="text-base sm:text-lg text-muted-foreground mb-2 font-black uppercase">Annual Impact</div>
                <div className="text-4xl sm:text-5xl font-black text-primary">
                  ₹36-45 Lakh
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase font-bold">Additional Revenue</div>
              </div>
              
              <p className="text-lg sm:text-xl font-black max-w-2xl mx-auto uppercase">
                Revenue swings reduce from <span className="text-red-500">20-50%</span> to <span className="text-green-500">10-15%</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
