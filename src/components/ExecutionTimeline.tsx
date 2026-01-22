import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FlaskConical, Rocket } from "lucide-react";

export const ExecutionTimeline = () => {
  const months = [
    {
      icon: Search,
      month: "Month 1",
      title: "Foundation & Audience Intelligence",
      activities: [
        "Market, demand & competitor analysis",
        "Ideal audience definition:",
        "Type A (Growth Engine): Low-ticket, high-volume clients (students, first-time tattoo clients)",
        "Type B (Value Segment): High-ticket, trust & word-of-mouth driven clients",
        "Primary focus on building a consistent Type A acquisition engine",
        "Launch Google Search, Meta Lead Gen & retargeting campaigns",
        "Clean attribution & conversion tracking setup"
      ]
    },
    {
      icon: FlaskConical,
      month: "Month 2",
      title: "Testing, Optimisation & Signal Identification",
      activities: [
        "Structured A/B testing across creatives, hooks, copy, visuals & audiences",
        "Performance shortlisting every 1–2 weeks based on quality & CPL",
        "Budget reallocation toward high-performing ads & segments",
        "Offer positioning & messaging refinement"
      ]
    },
    {
      icon: Rocket,
      month: "Month 3",
      title: "Scaling, Stability & Systemisation",
      activities: [
        "Scale winning campaigns",
        "Reduce spend on underperforming variations",
        "Strengthen retargeting & lookalike audiences",
        "Tight monitoring of lead quality & consistency",
        "End-of-month survey (intent, experience, conversion feedback)",
        "Finalise repeatable performance framework"
      ]
    }
  ];

  const ongoingActivities = [
    "Daily performance monitoring (Google & Meta)",
    "Daily WhatsApp performance updates",
    "Weekly review calls (if required)",
    "Creative iteration based on performance",
    "Budget pacing & ad optimisation"
  ];

  return (
    <section id="execution" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Phase 1 <span className="text-primary">Execution Timeline</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-bold">
            3-Month Roadmap
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {months.map((period, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-2 border-border hover:border-primary transition-all"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-1 sm:h-2 bg-primary" />
              <div className="p-6 sm:p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                  {/* Icon and header */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary flex items-center justify-center mb-4 border-2 border-primary">
                      <period.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                    </div>
                    <Badge className="mb-2 bg-primary text-primary-foreground border-none font-black uppercase text-xs">{period.month}</Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase">{period.title}</h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {period.activities.map((item, itemIndex) => (
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

          {/* Ongoing Activities */}
          <Card className="p-6 sm:p-8 md:p-12 bg-primary/10 border-2 border-primary">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 uppercase text-center">Ongoing During Phase 1</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ongoingActivities.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary mt-2" />
                  <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
