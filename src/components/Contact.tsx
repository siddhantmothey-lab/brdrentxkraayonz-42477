import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

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
    "Review this proposal",
    "Schedule a strategy call",
    "Confirm Phase 1 kickoff",
    "Begin Month 1 execution"
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Next <span className="text-primary">Steps</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Summary Card */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center uppercase">Partnership Summary</h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-center mb-8">
              <div className="p-6 border-2 border-border">
                <div className="text-sm text-muted-foreground mb-2 uppercase">Phase 1</div>
                <div className="text-2xl font-black text-primary mb-1">₹55,000/mo</div>
                <div className="text-sm text-muted-foreground">3 Months • Acquisition Focus</div>
              </div>
              <div className="p-6 border-2 border-border">
                <div className="text-sm text-muted-foreground mb-2 uppercase">Phase 2</div>
                <div className="text-2xl font-black text-primary mb-1">₹55,000/mo</div>
                <div className="text-sm text-muted-foreground">3 Months • Retention Focus</div>
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm">
              Ad spend excluded • Paid directly by Soulprints
            </p>
          </Card>

          {/* Next Steps */}
          <Card className="p-8 md:p-12 bg-primary/10 border-2 border-primary">
            <h3 className="text-2xl font-bold mb-8 text-center uppercase">How to Proceed</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground font-black text-xl flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Contact Cards */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center uppercase">Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur border-2 border-border hover:border-primary transition-all"
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto">
                      <span className="text-3xl font-black text-primary-foreground">
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
          <Card className="p-8 bg-card/50 backdrop-blur border-2 border-border">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-primary">
                BRDR Entertainment
              </h3>
              <p className="text-muted-foreground">
                Growth Partnership Proposal for Soulprints
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
