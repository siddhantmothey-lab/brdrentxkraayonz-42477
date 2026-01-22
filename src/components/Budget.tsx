import { Card } from "@/components/ui/card";
import { DollarSign, Info } from "lucide-react";

export const Budget = () => {
  return (
    <section id="budget" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Phase 1 <span className="text-primary">Commercials</span>
          </h2>
        </div>

        {/* Total Budget Card */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="p-8 sm:p-12 bg-primary text-primary-foreground border-2 border-primary">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background flex items-center justify-center mx-auto mb-4 border-2 border-background">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <div className="text-sm sm:text-lg font-black mb-2 uppercase tracking-wider">Monthly Retainer</div>
              <div className="text-5xl sm:text-6xl font-black">₹55,000</div>
              <div className="text-sm uppercase tracking-wider mt-2 opacity-80">Per Month</div>
            </div>
          </Card>
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 bg-card/50 border-2 border-border">
            <div className="flex gap-4 items-start">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base text-muted-foreground">
                <span className="font-bold text-foreground">Ad Spend:</span> Excluded from the retainer and paid directly by Soulprints. Budget allocation will be recommended based on campaign performance and scaling needs.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
