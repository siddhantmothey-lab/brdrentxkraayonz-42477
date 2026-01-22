import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const Deliverables = () => {
  const phase1Deliverables = [
    "Google Search & Meta Campaigns (live & optimised)",
    "Retargeting Campaigns",
    "A/B tested creatives & ad copy",
    "Clean conversion tracking & attribution",
    "Weekly + monthly performance reports",
    "End-of-phase benchmark documentation"
  ];

  const phase2Deliverables = [
    "Membership & loyalty infrastructure",
    "CRM + automation flows (email/SMS)",
    "Referral tracking system",
    "Lifecycle marketing automation",
    "Retention reporting framework"
  ];

  const terms = [
    {
      title: "Payment Terms",
      items: [
        "Monthly invoicing, due within 7 days of receipt",
        "Ad spend handled directly by client"
      ]
    },
    {
      title: "Scope Boundaries",
      items: [
        "Excludes: Organic social media management, influencer management, website development",
        "Includes: Paid performance marketing, campaign management, reporting & optimisation"
      ]
    },
    {
      title: "Engagement Terms",
      items: [
        "30-day notice period for termination after Phase 1",
        "Phase 2 engagement optional, to be confirmed at end of Phase 1"
      ]
    }
  ];

  return (
    <section id="deliverables" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-primary">Deliverables</span> & Terms
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {/* Phase 1 Deliverables */}
          <Card className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all">
            <h3 className="text-xl sm:text-2xl font-black mb-6 uppercase text-primary">Phase 1 Deliverables</h3>
            <ul className="space-y-4">
              {phase1Deliverables.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Phase 2 Deliverables */}
          <Card className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all">
            <h3 className="text-xl sm:text-2xl font-black mb-6 uppercase text-primary">Phase 2 Deliverables</h3>
            <ul className="space-y-4">
              {phase2Deliverables.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Terms */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center uppercase">Terms & Conditions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {terms.map((term, index) => (
              <Card key={index} className="p-6 sm:p-8 bg-card border-2 border-border">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-black uppercase">{term.title}</h4>
                </div>
                <ul className="space-y-3">
                  {term.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary mt-2" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
