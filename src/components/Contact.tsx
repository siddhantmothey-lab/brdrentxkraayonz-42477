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
    "Review this Phase 1 proposal",
    "Schedule strategy session to finalize details",
    "Sign partnership agreement",
    "Begin Month 1 execution"
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get Started</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to build a predictable lead-generation system?
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Phase 1 Summary */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <h3 className="text-3xl font-bold mb-8 text-center">Phase 1 Summary</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-sm text-muted-foreground mb-2 uppercase">Timeline</div>
                <div className="text-3xl font-black text-primary">3 Months</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2 uppercase">Investment</div>
                <div className="text-3xl font-black text-primary">₹75,000/mo</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2 uppercase">Target Leads</div>
                <div className="text-3xl font-black text-primary">50-60/mo</div>
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
                Performance Marketing Agency
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
