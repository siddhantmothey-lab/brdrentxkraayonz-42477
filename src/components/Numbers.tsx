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
    <section id="numbers" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Why ₹75,000 Makes <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Business Sense</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's talk numbers honestly, Sameer Sir.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className={`p-8 bg-gradient-to-br ${highlight.color} text-white shadow-2xl animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                  <highlight.icon className="w-8 h-8" />
                </div>
                <div className="text-sm font-medium mb-2 opacity-90">{highlight.label}</div>
                <div className="text-4xl font-black">{highlight.value}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* ROI Timeline */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">Expected Return: 5X ROI</h3>
            
            <div className="space-y-4">
              {months.map((data, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-6 rounded-lg border transition-all ${
                    isVisible ? 'animate-slide-in' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    borderColor: index === months.length - 1 ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    background: index === months.length - 1 ? 'hsl(var(--primary) / 0.05)' : 'hsl(var(--background) / 0.5)'
                  }}
                >
                  <div className="flex-shrink-0 w-20">
                    <div className="text-sm text-muted-foreground">Month {data.month}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Revenue</div>
                        <div className="text-2xl font-bold text-primary">{data.revenue}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Net Gain</div>
                        <div className={`text-2xl font-bold ${data.net.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                          {data.net}
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                          <span className="text-sm font-semibold text-primary">{data.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6 text-center">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="text-lg text-muted-foreground mb-2">Annual Impact</div>
                <div className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ₹36-45 Lakh
                </div>
                <div className="text-sm text-muted-foreground mt-2">Additional Revenue</div>
              </div>
              
              <p className="text-xl font-semibold max-w-2xl mx-auto">
                Revenue swings reduce from <span className="text-red-500">20-50%</span> to <span className="text-green-500">10-15%</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
