const Footer = () => {
  return (
    <footer className="bg-dark-footer text-dark-footer-foreground py-12 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {/* Legal Text */}
        <p className="text-sm leading-relaxed">
          US, CA, UK, AU residents, 18+. Ends December 31, 2025. No purchase needed. 
          Void where prohibited. Odds of winning depend on number of eligible entries 
          received. One grand prize winner will be selected.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <a href="#" className="hover:text-card transition-colors">Official Rules</a>
          <span className="text-muted-foreground">|</span>
          <a href="#" className="hover:text-card transition-colors">Privacy Policy</a>
          <span className="text-muted-foreground">|</span>
          <a href="#" className="hover:text-card transition-colors">Contact Us</a>
        </div>

        {/* Powered By */}
        <p className="text-uber-green font-bold">
          Powered by Uber Eats
        </p>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 2025 Uber Eats Sweepstakes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
