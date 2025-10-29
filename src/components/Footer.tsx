export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            BRDR Entertainment
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Marketing Agency Specialized in Tattoo Industry Growth
          </p>
          <div className="pt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} BRDR Entertainment. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
