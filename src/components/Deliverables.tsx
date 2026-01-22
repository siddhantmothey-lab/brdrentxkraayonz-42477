import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const Deliverables = () => {
  const deliverables = [
    {
      category: "Campaigns & Ads",
      items: [
        "Google Search Campaigns (live and optimized)",
        "Meta Lead Gen Campaigns (live and optimized)",
        "Retargeting Campaigns (across platforms)",
        "A/B tested ad variations with performance data"
      ]
    },
    {
      category: "Creative Assets",
      items: [
        "Ad creatives (static + video)",
        "Landing page optimization recommendations",
        "Social media content calendar",
        "Monthly content pieces for social"
      ]
    },
    {
      category: "Analytics & Reporting",
      items: [
        "Clean attribution and tracking setup",
        "Weekly WhatsApp performance summaries",
        "Monthly comprehensive performance reports",
        "Documented learnings and benchmarks"
      ]
    },
    {
      category: "Strategy & Systems",
      items: [
        "Audience segmentation framework",
        "Repeatable content creation framework",
        "Performance benchmarks for Phase 2",
        "Optimization playbook based on learnings"
      ]
    }
  ];

  return (
    <section id="deliverables" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Phase 1 <span className="text-primary">Deliverables</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-bold">
            What You'll Receive
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {deliverables.map((section, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-black mb-6 uppercase text-primary">{section.category}</h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
