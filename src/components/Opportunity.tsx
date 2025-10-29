import { Card } from "@/components/ui/card";
import { TrendingDown, Users, Megaphone, Calendar } from "lucide-react";

export const Opportunity = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Revenue Volatility",
      description: "Revenue swings 20-50% monthly, barely breaking even most months"
    },
    {
      icon: Users,
      title: "Limited Lead Sources",
      description: "Lead sources: Walk-ins and friends only"
    },
    {
      icon: Megaphone,
      title: "Sporadic Marketing",
      description: "Paid marketing: Occasional post boosts (no strategic campaigns)"
    },
    {
      icon: Calendar,
      title: "Inconsistent Content",
      description: "Content posting: Irregular despite having premium assets"
    }
  ];

  return (
    <section id="opportunity" className="py-16 sm:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            You Have Something <span className="text-primary">Special</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-bold">
            27 years of legacy. Mumbai's trust. A brand people recognize.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <Card className="p-6 sm:p-8 md:p-12 bg-card border-primary/30">
            <h3 className="text-xl sm:text-2xl font-black mb-6 text-center uppercase">But here's what we discovered:</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 sm:p-6 bg-background border border-border hover:border-primary transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 flex items-center justify-center border border-primary">
                      <challenge.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black mb-2 uppercase text-sm sm:text-base">{challenge.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-black max-w-3xl mx-auto uppercase leading-relaxed">
            The gap between <span className="text-primary">where you are</span> and{" "}
            <span className="text-primary">where you should be?</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl mt-4 inline-block">That's our job.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
