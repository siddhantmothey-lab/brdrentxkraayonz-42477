import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
  const contacts = [
    {
      name: "Siddhant Mothey",
      role: "Co-founder",
      phone: "7030596336"
    },
    {
      name: "Abhinav Solanki",
      role: "Co-founder",
      phone: "7823896003"
    }
  ];

  const nextSteps = [
    "Review this proposal and discuss with your team",
    "Schedule strategy session to finalize details",
    "Sign partnership agreement",
    "Onboard team and begin Month 1 execution"
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Let's Make <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">This Happen</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to honor the legacy? Let's talk.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Success Vision */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">What Success Looks Like</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-xl font-bold text-primary">In 90 Days:</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ 35-40 qualified leads every month</li>
                  <li>✓ Revenue swings reducing from 20-50% to 15-25%</li>
                  <li>✓ Top 5-10 for "tattoo Pune"</li>
                  <li>✓ "Popular local favorite" status building</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="text-xl font-bold text-accent">In 6 Months:</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ 45-50+ qualified leads monthly</li>
                  <li>✓ Revenue swings at 10-15% (stable)</li>
                  <li>✓ Top 3 ranking for "tattoo Pune"</li>
                  <li>✓ Premium positioning with price lift</li>
                  <li>✓ Foundation for adding chairs/artists</li>
                  <li>✓ ₹15-18 lakh additional revenue</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <h3 className="text-3xl font-bold mb-8 text-center">Next Steps</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white font-black text-xl flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Decision Point */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-center">Your Decision Point</h3>
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <p className="text-lg">
                Sameer Sir, this isn't about whether you need marketing. You already know you do.
              </p>
              <p className="text-lg opacity-90">
                This is about whether you're ready to:
              </p>
              <ul className="space-y-2 text-left inline-block">
                <li>• Leverage your 27-year heritage properly</li>
                <li>• Dominate Pune the way Mumbai dominates its market</li>
                <li>• Turn ₹75K/month into ₹3.75 lakh/month in returns</li>
                <li>• Build stable revenue (10-15% swings instead of 20-50%)</li>
                <li>• Hit your goals: 35-50 leads/month, local rank, steady bookings</li>
              </ul>
              <p className="text-xl font-bold pt-4">
                You took a risk in 1998 when tattooing was taboo.
                <br />
                This isn't that kind of risk.
              </p>
              <p className="text-2xl font-black pt-2">
                Let's make Kraayonz Pune what it was always meant to be:
                <br />
                Pune's #1 tattoo destination.
              </p>
            </div>
          </Card>

          {/* Contact Cards */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all"
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                      <span className="text-3xl font-black text-white">
                        {contact.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{contact.name}</h4>
                      <p className="text-muted-foreground">{contact.role}</p>
                    </div>
                    <div className="flex flex-col gap-3 pt-4">
                      <Button 
                        className="w-full"
                        onClick={() => window.open(`tel:${contact.phone}`)}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {contact.phone}
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open(`https://wa.me/91${contact.phone}`)}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Info */}
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                BRDR Entertainment
              </h3>
              <p className="text-muted-foreground">
                Marketing Agency Specialized in Tattoo Industry Growth
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
