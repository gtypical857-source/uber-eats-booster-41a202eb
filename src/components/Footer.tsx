const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-10 px-6 border-t border-border">
      <div className="max-w-md mx-auto text-center space-y-5">
        <p className="text-xs leading-relaxed">
          US, CA, UK, AU residents, 18+. Ends December 31, 2026. No purchase needed. 
          Void where prohibited. Odds of winning depend on number of eligible entries 
          received. One grand prize winner will be selected.
        </p>

        <div className="flex items-center justify-center gap-3 text-xs">
          <a href="#" className="hover:text-foreground transition-colors">Official Rules</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
        </div>

        <p className="text-xs">
          © 2026 Uber Eats Reward. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
