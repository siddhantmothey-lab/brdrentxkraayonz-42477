import { Card } from "@/components/ui/card";
import { Sparkles, Heart, BarChart3 } from "lucide-react";

export const WhyBRDR = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Tattoo Industry Specialists",
      points: [
        "Deep understanding of tattoo business dynamics",
        "Knowledge of premium positioning in service industry",
        "Experience with luxury customer journeys"
      ]
    },
    {
      icon: Heart,
      title: "Customized for Kraayonz",
      points: [
        "We studied your business assessment data point by point",
        "We understand your cautious risk style (small tests preferred)",
        "We respect your need for immediate returns (<30 days visibility)",
        "We communicate via WhatsApp weekly summaries (your preference)"
      ]
    },
    {
      icon: BarChart3,
      title: "Your Success = Our Success",
      points: [
        "We measure ourselves by your revenue growth",
        "No fluff metrics - only business-impacting results (CAC/CPL/ROAS)",
        "Long-term partnership approach, not quick contracts"
      ]
    }
  ];

  return (
    <section id="why-brdr" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">BRDR Entertainment?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We're Not Just Another Agency
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all animate-slide-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-6">{reason.title}</h3>
                  <ul className="space-y-4">
                    {reason.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                        <p className="text-lg text-muted-foreground">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent text-white shadow-2xl">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">The Real Question</h3>
              <p className="text-xl opacity-90">
                Can you afford NOT to invest?
              </p>
              <div className="pt-4 space-y-3 text-lg">
                <p>You already have the foundation. The portfolio. The brand kit.</p>
                <p>The luxury infrastructure. The 27-year heritage.</p>
                <p className="font-bold text-2xl pt-2">
                  You're already spending energy — it's just not working efficiently.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
