import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { Proposal } from "@/components/Proposal";
import { Numbers } from "@/components/Numbers";
import { Strategy } from "@/components/Strategy";
import { Metrics } from "@/components/Metrics";
import { Advantages } from "@/components/Advantages";
import { Timeline } from "@/components/Timeline";
import { WhyBRDR } from "@/components/WhyBRDR";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Opportunity />
      <Proposal />
      <Numbers />
      <Strategy />
      <Metrics />
      <Advantages />
      <Timeline />
      <WhyBRDR />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
