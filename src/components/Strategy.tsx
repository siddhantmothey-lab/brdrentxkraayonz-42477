import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, TrendingUp, Crown } from "lucide-react";

export const Strategy = () => {
  const phases = [
    {
      icon: Wrench,
      phase: "Phase 1",
      title: "Fix What's Broken",
      timeline: "Month 1-2",
      color: "from-red-500 to-orange-500",
      items: [
        "Google Ads Management targeting 'tattoo near me,' 'best tattoo artist Pune'",
        "Meta Campaign Overhaul with professional audience targeting",
        "Content Consistency with 90-day content calendar",
        "Lead redirection to WhatsApp (your preferred platform)"
      ]
    },
    {
      icon: TrendingUp,
      phase: "Phase 2",
      title: "Build Local Authority",
      timeline: "Month 3-4",
      color: "from-primary to-accent",
      items: [
        "Rank #1 for 'tattoo Pune' on Google",
        "Local influencer partnerships",
        "Event participation leveraging community programs",
        "'Since 1998' messaging in every content piece",
        "Mumbai celebrity clientele social proof"
      ]
    },
    {
      icon: Crown,
      phase: "Phase 3",
      title: "Market Leadership",
      timeline: "Month 5-6",
      color: "from-accent to-green-500",
      items: [
        "Waitlist creation strategy (exclusivity marketing)",
        "Premium service tier introduction",
        "Media coverage building on press features",
        "Foundation for expansion (add chairs/artists)"
      ]
    }
  ];

  return (
    <section id="strategy" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            The Strategy: <span className="text-primary">Hybrid Domination</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground font-bold">
            You're not a startup. You're not an established Pune giant either.
            <br className="hidden sm:block" />
            You're something better: <span className="text-foreground">27-year heritage with untapped local potential.</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {phases.map((phase, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-2 border-border hover:border-primary transition-all"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-1 sm:h-2 bg-primary`} />
              <div className="p-6 sm:p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                  {/* Icon and header */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary flex items-center justify-center mb-4 border-2 border-primary">
                      <phase.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                    </div>
                    <Badge className="mb-2 bg-primary text-primary-foreground border-none font-black uppercase text-xs">{phase.phase}</Badge>
                    <div className="text-xs sm:text-sm text-muted-foreground font-bold uppercase">{phase.timeline}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase">{phase.title}</h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary mt-2" />
                          <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 bg-primary/10 border-2 border-primary">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-center uppercase">What's Missing?</h3>
            <p className="text-sm sm:text-lg text-center text-muted-foreground">
              You already have high-end photography, storytelling videos, brand kit, certifications, and luxury infrastructure.
              <br className="hidden sm:block" />
              <span className="font-black text-foreground mt-2 inline-block uppercase">
                What's missing: Systematic visibility and lead generation to fill that premium experience.
              </span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
