import { Button } from "@/components/ui/button";
import StepCard from "@/components/StepCard";
import SocialButton from "@/components/SocialButton";
import Footer from "@/components/Footer";
import { CheckCircle, Gift, DollarSign, Share2, MessageCircle } from "lucide-react";
import foodHero from "@/assets/food-hero.jpg";

const Index = () => {
  const affiliateLink = "https://gloffers.org/aff_c?offer_id=1999&aff_id=31368";

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="px-6 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          <span className="text-gradient-primary">Win a $750</span>
          <br />
          <span className="text-gradient-secondary">Uber Eats Voucher!</span>
        </h1>
        
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Order your favorite meals with a $750 Uber Eats credit!
        </p>

        <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="xl" className="w-full max-w-sm mx-auto">
            Start Now
          </Button>
        </a>

        <p className="text-muted-foreground text-sm mt-6">
          Open to US, CA, UK, AU residents, 18+
        </p>

        {/* Food Image */}
        <div className="mt-8 relative max-w-lg mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl" />
          <img
            src={foodHero}
            alt="Delicious food delivery options"
            className="w-full rounded-3xl shadow-card"
          />
          <div className="absolute top-4 right-4 bg-uber-green text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg">
            $750 Sweepstakes
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          <span className="text-gradient-secondary">Claim Your $750</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Voucher in &lt;5 Minutes!
        </p>

        <div className="space-y-4 max-w-md mx-auto">
          <StepCard
            icon={CheckCircle}
            step={1}
            title="Take the Survey"
            description="Answer a quick survey about your food preferences."
          />
          <StepCard
            icon={Gift}
            step={2}
            title="Complete 3-5 Deals"
            description="Sign up for 3-5 offers from our partners."
          />
          <StepCard
            icon={DollarSign}
            step={3}
            title="Get Rewarded"
            description="Receive your $750 Uber Eats voucher!"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl" className="w-full max-w-sm mx-auto">
              Start Now
            </Button>
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <span className="w-4 h-4 border border-muted-foreground/50 rounded" />
            <span>Secure Entry</span>
            <span className="mx-2">•</span>
            <span className="text-uber-green font-semibold">Uber Eats</span>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="px-6 py-12 bg-card">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Boost Your Chances!</h2>
          <p className="text-muted-foreground mb-6">Share for bonus entries!</p>

          <div className="grid grid-cols-2 gap-3">
            <SocialButton icon={Share2} label="X (Twitter)" />
            <SocialButton icon={MessageCircle} label="Instagram" />
          </div>
          <div className="mt-3">
            <SocialButton icon={Share2} label="Facebook" className="w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
