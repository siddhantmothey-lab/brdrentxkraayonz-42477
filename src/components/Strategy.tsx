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
    <section id="strategy" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            The Strategy: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hybrid Domination</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            You're not a startup. You're not an established Pune giant either.
            <br />
            You're something better: <span className="font-bold text-foreground">27-year heritage with untapped local potential.</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <Card 
              key={index}
              className="overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon and header */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4`}>
                      <phase.icon className="w-10 h-10 text-white" />
                    </div>
                    <Badge className="mb-2">{phase.phase}</Badge>
                    <div className="text-sm text-muted-foreground">{phase.timeline}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-6">{phase.title}</h3>
                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                          <p className="text-muted-foreground flex-1">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <h3 className="text-2xl font-bold mb-4 text-center">What's Missing?</h3>
            <p className="text-lg text-center text-muted-foreground">
              You already have high-end photography, storytelling videos, brand kit, certifications, and luxury infrastructure.
              <br />
              <span className="font-bold text-foreground mt-2 inline-block">
                What's missing: Systematic visibility and lead generation to fill that premium experience.
              </span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
