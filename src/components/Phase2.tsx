import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Repeat, Users, TrendingUp, Gift, Star, Target, BarChart3, Calendar, RefreshCw } from "lucide-react";

export const Phase2 = () => {
  const objectives = [
    "Transition from acquisition-first to retention-first",
    "Build monthly recurring revenue through memberships",
    "Increase customer lifetime value and repeat bookings",
    "Establish referral flywheel"
  ];

  const loyaltyProgram = {
    title: "Soulprints Insider",
    features: [
      "Tiered membership structure (Silver, Gold, Black)",
      "Points-based reward system",
      "Exclusive member pricing & perks",
      "Birthday rewards & early access"
    ]
  };

  const mrrModel = {
    title: "Monthly Care Membership",
    features: [
      "₹499–₹999/month subscription tiers",
      "Includes touch-ups, priority booking, exclusive perks",
      "Target: 100+ subscribers within 6 months"
    ]
  };

  const referralProgram = {
    title: "Refer & Earn",
    features: [
      "₹500 credit per successful referral",
      "Referral leaderboard & seasonal rewards",
      "Trackable referral links"
    ]
  };

  const kpis = [
    { icon: Repeat, label: "Repeat Booking Rate", value: ">30%" },
    { icon: Users, label: "Membership Subscribers", value: "100+" },
    { icon: TrendingUp, label: "Referral Contribution", value: ">15%" },
    { icon: BarChart3, label: "MRR from Memberships", value: "₹50K+" }
  ];

  const timeline = [
    {
      month: "Month 4",
      title: "Loyalty & Membership Infrastructure",
      activities: [
        "Design & implement membership tiers",
        "CRM setup for lifecycle marketing",
        "Email/SMS automation flows",
        "Referral system build-out"
      ]
    },
    {
      month: "Month 5",
      title: "Activation & Early Adoption",
      activities: [
        "Launch membership to existing customer base",
        "Referral program soft launch",
        "Post-session upsell flows",
        "Birthday & anniversary automation"
      ]
    },
    {
      month: "Month 6",
      title: "Optimization & Growth",
      activities: [
        "Analyse early subscriber behaviour",
        "Refine pricing & perks based on uptake",
        "Scale referral incentives",
        "Introduce seasonal loyalty campaigns"
      ]
    }
  ];

  return (
    <section id="phase2" className="py-16 sm:py-24 border-t border-border bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-block mb-4 px-4 py-2 border border-primary rounded-none">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Phase 2: Loyalty & MRR Engine
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Retention & <span className="text-primary">Recurring Revenue</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-bold">
            Timeline: 3 Months (Post Phase 1)
          </p>
        </div>

        {/* Objectives */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 sm:p-8 bg-primary/10 border-2 border-primary">
            <h3 className="text-xl sm:text-2xl font-black mb-6 text-center uppercase">Objective</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {objectives.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary mt-2" />
                  <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Core Components */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center uppercase">Core Components</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Loyalty Program */}
            <Card className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary flex items-center justify-center mb-4 border-2 border-primary">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h4 className="text-lg sm:text-xl font-black mb-4 uppercase">{loyaltyProgram.title}</h4>
              <ul className="space-y-3">
                {loyaltyProgram.features.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary mt-2" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* MRR Model */}
            <Card className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary flex items-center justify-center mb-4 border-2 border-primary">
                <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h4 className="text-lg sm:text-xl font-black mb-4 uppercase">{mrrModel.title}</h4>
              <ul className="space-y-3">
                {mrrModel.features.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary mt-2" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Referral Program */}
            <Card className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary flex items-center justify-center mb-4 border-2 border-primary">
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h4 className="text-lg sm:text-xl font-black mb-4 uppercase">{referralProgram.title}</h4>
              <ul className="space-y-3">
                {referralProgram.features.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary mt-2" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* KPIs */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center uppercase">Phase 2 KPIs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, index) => (
              <Card key={index} className="p-6 bg-card border-2 border-border hover:border-primary transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-3 border-2 border-primary">
                    <kpi.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-black mb-1 uppercase tracking-wider text-muted-foreground">{kpi.label}</div>
                  <div className="text-2xl font-black text-primary">{kpi.value}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center uppercase">Phase 2 Execution Timeline</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((period, index) => (
              <Card key={index} className="overflow-hidden border-2 border-border hover:border-primary transition-all">
                <div className="h-1 bg-primary" />
                <div className="p-6">
                  <Badge className="mb-3 bg-primary text-primary-foreground border-none font-black uppercase text-xs">{period.month}</Badge>
                  <h4 className="text-lg font-black mb-4 uppercase">{period.title}</h4>
                  <ul className="space-y-2">
                    {period.activities.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary mt-2" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Phase 2 Commercials */}
        <div className="max-w-md mx-auto mt-12">
          <Card className="p-8 sm:p-10 bg-card border-2 border-primary">
            <div className="text-center">
              <div className="text-sm font-black mb-2 uppercase tracking-wider text-muted-foreground">Phase 2 Monthly Retainer</div>
              <div className="text-4xl sm:text-5xl font-black text-primary">₹55,000</div>
              <div className="text-sm uppercase tracking-wider mt-2 text-muted-foreground">Per Month</div>
              <p className="text-xs text-muted-foreground mt-4">
                + Platform/tool costs (CRM, loyalty software) billed separately
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
