import { Card } from "@/components/ui/card";
import { DollarSign, Megaphone, Users, Video, Scissors, PenTool } from "lucide-react";

export const Budget = () => {
  const budgetItems = [
    {
      icon: Megaphone,
      category: "Performance Ads",
      amount: "₹40,000",
      description: "Google + Meta Campaigns"
    },
    {
      icon: Users,
      category: "Performance Marketing",
      amount: "₹15,000",
      description: "Campaign Management & Optimization"
    },
    {
      icon: PenTool,
      category: "Graphic Design",
      amount: "₹7,000",
      description: "Ad Creatives & Visual Assets"
    },
    {
      icon: Video,
      category: "Video Production",
      amount: "₹10,000",
      description: "Shoots & Editing"
    },
    {
      icon: Scissors,
      category: "SMM Content Writing",
      amount: "₹3,000",
      description: "Captions, Copy & Hooks"
    }
  ];

  return (
    <section id="budget" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Phase 1 <span className="text-primary">Budget</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-bold">
            Investment Breakdown
          </p>
        </div>

        {/* Total Budget Card */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="p-8 sm:p-12 bg-primary text-primary-foreground border-2 border-primary">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background flex items-center justify-center mx-auto mb-4 border-2 border-background">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <div className="text-sm sm:text-lg font-black mb-2 uppercase tracking-wider">Total Monthly Investment</div>
              <div className="text-5xl sm:text-6xl font-black">₹75,000</div>
              <div className="text-sm uppercase tracking-wider mt-2 opacity-80">Per Month</div>
            </div>
          </Card>
        </div>

        {/* Budget Breakdown */}
        <div className="max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-12 bg-card border-2 border-primary">
            <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center uppercase">Budget Breakdown</h3>
            
            <div className="space-y-4">
              {budgetItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6 border-2 border-border hover:border-primary transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 flex items-center justify-center border border-primary flex-shrink-0">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black uppercase text-sm sm:text-base">{item.category}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-primary">{item.amount}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 border-2 border-primary">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-lg sm:text-xl font-black uppercase">Total</span>
                <span className="text-3xl sm:text-4xl font-black text-primary">₹75,000/month</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="p-6 sm:p-8 bg-card/50 border-2 border-border">
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              <span className="font-bold text-foreground">Note:</span> Budget allocation may be adjusted based on performance data and campaign optimization needs during the 3-month phase.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
