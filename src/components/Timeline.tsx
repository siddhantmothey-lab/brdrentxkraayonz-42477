import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export const Timeline = () => {
  const months = [
    {
      month: "Month 1",
      title: "Setup & Foundation",
      activities: [
        "Complete brand and market audit",
        "Google My Business optimization",
        "Social media profile enhancement",
        "First video content production using existing assets",
        "Google Ads and Meta campaigns launch"
      ],
      experience: "You'll see professional content starting to flow, initial traffic increases, and the foundation being built."
    },
    {
      month: "Month 2",
      title: "Content & Campaigns",
      activities: [
        "5-7 high-quality video pieces published",
        "Full content calendar execution",
        "Campaign optimization based on early data",
        "Local SEO and citation building"
      ],
      experience: "Social media starts looking professional and consistent. First qualified leads coming through. Hitting your 35-40 leads/month target."
    },
    {
      month: "Month 3",
      title: "Authority Building",
      activities: [
        "Local event participation",
        "Influencer partnerships",
        "PR campaign initiation",
        "Premium positioning messaging ('Since 1998' everywhere)"
      ],
      experience: "You start seeing 40+ qualified leads monthly. People recognize the brand more in Pune. Revenue swings reducing."
    },
    {
      month: "Month 4-6",
      title: "Market Domination",
      activities: [
        "Top 5 Google rankings achieved",
        "40-50 qualified leads monthly (exceeding target)",
        "Media coverage and recognition",
        "Foundation for adding chairs/artists"
      ],
      experience: "Waitlist starting to build. Premium pricing capability. Revenue predictability. Market leadership position established."
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Timeline: What Happens <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">When</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A clear month-by-month breakdown of your journey to market domination
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-green-500 hidden md:block" />

            <div className="space-y-12">
              {months.map((period, index) => (
                <Card 
                  key={index}
                  className="relative md:ml-20 p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-8 hidden md:block">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <Badge className="text-sm">{period.month}</Badge>
                      <h3 className="text-2xl font-bold">{period.title}</h3>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Activities:</h4>
                      <ul className="space-y-2">
                        {period.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                      <h4 className="font-semibold mb-2 text-accent">Your Experience:</h4>
                      <p className="text-sm text-muted-foreground">{period.experience}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 text-center">Timeline to Start</h3>
            <p className="text-center text-lg">
              <span className="text-3xl font-black text-green-500">1-2 weeks</span>
              <br />
              <span className="text-muted-foreground">from agreement to execution</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
