import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 bg-background border-t-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="text-3xl sm:text-4xl font-black tracking-tighter">
            <span className="text-primary">BRDR</span> ENTERTAINMENT
          </div>
          <p className="text-muted-foreground max-w-md mx-auto font-bold uppercase text-sm tracking-wider">
            Marketing Agency Specialized in Tattoo Industry Growth
          </p>
          
          {/* Portfolio Link */}
          <div className="pt-4">
            <a
              href="https://www.canva.com/design/DAG1UVVnos4/6O1iCJEqylA0KY9yap0ZPA/view?utm_content=DAG1UVVnos4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h22b78d7196"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-black uppercase text-sm tracking-wider hover:bg-primary/90 transition-all border-2 border-primary hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]"
            >
              View Our Portfolio
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="pt-6 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
            © {new Date().getFullYear()} BRDR Entertainment. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
