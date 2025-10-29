import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Award } from "lucide-react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

export const Metrics = () => {
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

  const leadMilestones = [
    { month: "Current", leads: 10, color: "bg-red-500" },
    { month: "Month 1", leads: 20, color: "bg-orange-500" },
    { month: "Month 2", leads: 35, color: "bg-yellow-500" },
    { month: "Month 3", leads: 40, color: "bg-primary" },
    { month: "Month 4+", leads: 50, color: "bg-accent" }
  ];

  const performanceMetrics = [
    {
      icon: Target,
      label: "Qualified Leads",
      current: "10/month",
      target: "40-50/month",
      description: "Someone who inquires about bookings, requests consultation, or asks about pricing"
    },
    {
      icon: TrendingUp,
      label: "Revenue Stability",
      current: "20-50% swings",
      target: "10-15% swings",
      description: "Predictable cash flow and consistent monthly revenue"
    },
    {
      icon: Users,
      label: "Social Growth",
      current: "Irregular posts",
      target: "+2,500-3,000 followers",
      description: "Consistent engagement supporting premium positioning"
    },
    {
      icon: Award,
      label: "Local Authority",
      current: "No ranking",
      target: "Top 3 for 'tattoo Pune'",
      description: "Popular local favorite status with premium recognition"
    }
  ];

  return (
    <section id="metrics" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            How You'll Track Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            WhatsApp summaries weekly. No fluff metrics — only business-impacting results.
          </p>
        </div>

        {/* Lead Generation Progress */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">Lead Generation Timeline</h3>
            <p className="text-center text-muted-foreground mb-8">Your stated goal: 35-50 qualified leads/month within 90 days</p>
            
            <div className="space-y-6">
              {leadMilestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-24 text-sm font-semibold">{milestone.month}</div>
                    <div className="flex-1 h-12 bg-muted rounded-lg overflow-hidden">
                      <div 
                        className={`h-full ${milestone.color} flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000`}
                        style={{ width: isVisible ? `${(milestone.leads / 50) * 100}%` : '0%' }}
                      >
                        {isVisible && <AnimatedCounter target={milestone.leads} suffix=" leads" />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-center font-semibold">
                Target Range: <span className="text-2xl text-primary">35-50 qualified leads/month</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Performance Metrics Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Monthly Performance Metrics</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <metric.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{metric.label}</h4>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <span className="text-sm text-muted-foreground">Current</span>
                    <span className="font-semibold text-red-500">{metric.current}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <span className="text-sm text-muted-foreground">Target (Month 6)</span>
                    <span className="font-semibold text-green-500">{metric.target}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">{metric.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/30">
            <h3 className="text-2xl font-bold mb-4 text-center">Conversion Metrics You Already Measure</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Lead-to-Booking Rate</div>
                <div className="text-3xl font-black text-primary">20-25%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Cost Per Qualified Lead</div>
                <div className="text-3xl font-black text-primary">₹1.5-2.5K</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">ROAS (Month 4+)</div>
                <div className="text-3xl font-black text-primary">3-5X</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
