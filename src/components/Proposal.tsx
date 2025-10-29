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
    <section id="proposal" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            What We're <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Proposing</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <Card className="p-8 bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl">
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Monthly Investment</div>
                <div className="text-5xl font-black">₹75,000</div>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-primary/20 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Dedicated Team</div>
                <div className="text-5xl font-black text-primary">4 People</div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Your Dedicated Team</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <member.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3">Specialist {index + 1}</Badge>
                    <h4 className="text-xl font-bold mb-2">{member.role}</h4>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/30">
            <h3 className="text-2xl font-bold mb-4 text-center">What This Means</h3>
            <div className="space-y-3 text-center max-w-3xl mx-auto">
              <p className="text-lg">
                Every rupee is going into people who will work <span className="font-bold text-primary">exclusively</span> on making Kraayonz Pune the <span className="font-bold text-accent">#1 tattoo destination</span> in the city
              </p>
              <p className="text-muted-foreground">
                No agency overhead, no hidden costs — pure execution power
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
