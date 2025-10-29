import { Card } from "@/components/ui/card";
import { Award, MapPin, Building, Briefcase, TrendingUp } from "lucide-react";

export const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: "Heritage No One Can Match",
      items: [
        "'Since 1998' is 27+ years of trust",
        "Most competitors started in last 5-10 years",
        "Mumbai celebrity clientele = instant credibility"
      ],
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: MapPin,
      title: "Premium Location",
      items: [
        "Koregaon Park positioning supports premium pricing",
        "Attracts high-value customers naturally",
        "Brand perception already elevated"
      ],
      color: "from-primary to-accent"
    },
    {
      icon: Building,
      title: "Franchise Safety Net",
      items: [
        "Mumbai's success de-risks this investment",
        "Cross-referrals and brand recognition",
        "Proven business model and operational excellence"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Briefcase,
      title: "Existing Assets Ready",
      items: [
        "High-end portfolio content (just needs amplification)",
        "Brand kit and luxury infrastructure (just needs visibility)",
        "Video testimonials and certifications (just needs distribution)"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Market Timing",
      items: [
        "Competitors aren't doing sophisticated digital marketing",
        "Post-COVID recovery in premium services",
        "Growing tattoo acceptance in Indian market (10.6% annual growth)"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="advantages" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Why This Works for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kraayonz</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            You Have Unfair Advantages
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-6`}>
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
              
              <ul className="space-y-3">
                {advantage.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-2 text-sm text-muted-foreground">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <h3 className="text-3xl font-bold mb-6 text-center">What Makes This a No-Brainer</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-xl font-bold mb-4 text-red-500">Low Risk:</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 9.4% of estimated revenue (within comfort zone)</li>
                  <li>• Phased approach with monthly reviews</li>
                  <li>• Flexibility to adjust strategy</li>
                </ul>
              </div>
              
              <div>
                <div className="text-xl font-bold mb-4 text-green-500">High Reward:</div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5X ROI minimum expectation</li>
                  <li>• Market leadership position achievable</li>
                  <li>• Foundation for adding chairs/artists</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
