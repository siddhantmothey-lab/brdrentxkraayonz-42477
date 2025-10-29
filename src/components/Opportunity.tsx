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
    <section id="opportunity" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            You Have Something <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Special</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            27 years of legacy. Mumbai's trust. A brand people recognize.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">But here's what we discovered:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <challenge.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold max-w-2xl mx-auto">
            The gap between <span className="text-primary">where you are</span> and{" "}
            <span className="text-accent">where you should be?</span>
            <br />
            <span className="text-3xl mt-4 inline-block">That's our job.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
