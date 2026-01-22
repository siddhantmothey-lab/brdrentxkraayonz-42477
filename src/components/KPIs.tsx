import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, BarChart3, DollarSign, Percent } from "lucide-react";

export const KPIs = () => {
  const kpis = [
    {
      icon: Users,
      label: "Qualified Leads",
      value: "50-60",
      unit: "per month",
    },
    {
      icon: DollarSign,
      label: "Cost Per Lead (CPL)",
      value: "₹700-₹1,000",
      unit: "",
    },
    {
      icon: Percent,
      label: "Website Conversion Rate",
      value: ">3%",
      unit: "",
    },
    {
      icon: Target,
      label: "Booking Rate",
      value: ">40%",
      unit: "",
    },
    {
      icon: TrendingUp,
      label: "Return on Ad Spend (ROAS)",
      value: "2.5:1",
      unit: "",
    },
    {
      icon: BarChart3,
      label: "Revenue Attribution",
      value: "₹2-3 Lakhs",
      unit: "per month",
    },
  ];

  return (
    <section id="kpis" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            KPIs & <span className="text-primary">Goals</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-bold">
            By End of Month 3
          </p>
        </div>

        {/* Primary Objective */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 sm:p-8 bg-primary/10 border-2 border-primary">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-center uppercase">Primary Objective</h3>
            <p className="text-center text-base sm:text-lg text-muted-foreground">
              Establish a <span className="text-primary font-bold">predictable, repeatable lead-generation system</span> with an immediate <span className="text-primary font-bold">ROI focus</span>, backed by clean attribution and performance data.
            </p>
          </Card>
        </div>

        {/* KPI Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary flex items-center justify-center mb-4 border-2 border-primary">
                  <kpi.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <div className="text-xs sm:text-sm font-black mb-2 uppercase tracking-wider text-muted-foreground">{kpi.label}</div>
                <div className="text-2xl sm:text-3xl font-black text-primary">{kpi.value}</div>
                {kpi.unit && <div className="text-xs text-muted-foreground uppercase mt-1">{kpi.unit}</div>}
              </div>
            </Card>
          ))}
        </div>

        {/* Reporting Framework */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="p-6 sm:p-8 bg-card border-2 border-border">
            <h3 className="text-xl sm:text-2xl font-black mb-6 uppercase">Monthly Performance Report</h3>
            <ul className="space-y-3">
              {[
                "Lead flow and volume",
                "Traffic sources and channel performance",
                "Conversion metrics",
                "CPL trends",
                "ROAS and revenue attribution"
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary mt-2" />
                  <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-2 border-border">
            <h3 className="text-xl sm:text-2xl font-black mb-6 uppercase">Weekly WhatsApp Summaries</h3>
            <ul className="space-y-3">
              {[
                "High-level performance snapshot",
                "Ad spend updates",
                "Key observations and signals"
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary mt-2" />
                  <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
