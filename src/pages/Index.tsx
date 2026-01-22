import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { KPIs } from "@/components/KPIs";
import { ExecutionTimeline } from "@/components/ExecutionTimeline";
import { Budget } from "@/components/Budget";
import { Deliverables } from "@/components/Deliverables";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <KPIs />
      <ExecutionTimeline />
      <Budget />
      <Deliverables />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
