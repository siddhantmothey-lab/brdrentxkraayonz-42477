import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Palette, Video, Scissors } from "lucide-react";

export const Proposal = () => {
  const team = [
    {
      icon: Target,
      role: "Performance Marketing Manager",
      description: "Google Ads + Meta campaigns optimized for bookings"
    },
    {
      icon: Palette,
      role: "Marketing & SMM Specialist",
      description: "Daily content strategy and community building"
    },
    {
      icon: Video,
      role: "Videographer",
      description: "Professional time-lapse videos and studio content"
    },
    {
      icon: Scissors,
      role: "Video Editor",
      description: "Social media optimization and trending content adaptation"
    }
  ];

  return (
    <section id="proposal" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            What We're <span className="text-primary">Proposing</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch mt-8">
            <Card className="p-6 sm:p-8 bg-primary text-primary-foreground border-2 border-primary flex-1 sm:flex-initial">
              <div className="text-center">
                <div className="text-sm sm:text-lg font-black mb-2 uppercase tracking-wider">Monthly Investment</div>
                <div className="text-4xl sm:text-5xl font-black">₹75,000</div>
              </div>
            </Card>
            
            <Card className="p-6 sm:p-8 bg-card border-2 border-foreground flex-1 sm:flex-initial">
              <div className="text-center">
                <div className="text-sm sm:text-lg font-black mb-2 uppercase tracking-wider">Dedicated Team</div>
                <div className="text-4xl sm:text-5xl font-black text-primary">4 People</div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-center mb-8 sm:mb-12 uppercase">Your Dedicated Team</h3>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="p-6 sm:p-8 bg-card border-2 border-border hover:border-primary transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary flex items-center justify-center border-2 border-primary">
                      <member.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-primary text-primary-foreground border-none uppercase text-xs font-black">Specialist {index + 1}</Badge>
                    <h4 className="text-lg sm:text-xl font-black mb-2 uppercase">{member.role}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 sm:mt-12 p-6 sm:p-8 bg-primary/10 border-2 border-primary">
            <h3 className="text-xl sm:text-2xl font-black mb-4 text-center uppercase">What This Means</h3>
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <p className="text-base sm:text-lg font-bold">
                Every rupee is going into people who will work <span className="text-primary uppercase">exclusively</span> on making Kraayonz Pune the <span className="text-primary uppercase">#1 tattoo destination</span> in the city
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                No agency overhead, no hidden costs — pure execution power
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
