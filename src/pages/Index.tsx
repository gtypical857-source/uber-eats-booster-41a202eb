import { Button } from "@/components/ui/button";
import StepCard from "@/components/StepCard";
import SocialButton from "@/components/SocialButton";
import Footer from "@/components/Footer";
import { useRewardCurrency } from "@/hooks/use-reward-currency";
import { ArrowRight, Share2, MessageCircle } from "lucide-react";

const Index = () => {
  const affiliateLink = "https://tr.taghal.com/tr?offer_id=62&pub=70";
  const { display, symbol } = useRewardCurrency();

  const shareMessage = `Claim your ${display} Uber Eats reward!`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 pt-10 pb-8 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-uber-green uppercase mb-4">
          Exclusive Reward
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground mb-3 text-balance">
          Claim Your {display} Uber eats Reward
        </h1>

        <p className="text-muted-foreground text-base max-w-sm mx-auto mb-8">
          Complete the required steps below to continue toward your reward.
        </p>

        {/* Reward Card */}
        <div className="max-w-sm mx-auto rounded-3xl bg-[#0a1f17] p-6 text-left shadow-xl mb-10">
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-white/70 text-sm font-semibold mb-1">Uber eats</p>
              <p className="text-white text-2xl font-extrabold leading-none">REWARD</p>
            </div>
            <div className="bg-uber-green text-white text-xs font-bold px-3 py-1.5 rounded-full">
              DIGITAL REWARD
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-white/60 text-sm mb-1">Total Value</p>
            <p className="text-white text-5xl font-extrabold tracking-tight">{display}</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-sm mx-auto text-left mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">How It Works</h2>
          <div className="space-y-3">
            <StepCard step={1} description={`Click "Continue to Next Step"`} />
            <StepCard step={2} description="Enter the requested information" />
            <StepCard step={3} description="Complete the required sponsored activities" />
            <StepCard step={4} description="Follow the instructions provided" />
          </div>
        </div>

        {/* CTA */}
        <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
          <Button
            variant="cta"
            size="xl"
            className="w-full max-w-sm mx-auto uppercase tracking-wide text-sm font-bold"
          >
            Continue to Next Step
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </a>

        <p className="text-xs text-muted-foreground mt-4 max-w-sm mx-auto leading-relaxed">
          Eligibility and completion requirements may vary. Review all offer terms before participating.
        </p>
      </section>

      {/* Share Section */}
      <section className="px-6 py-10 bg-muted">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-lg font-bold mb-1">Boost Your Chances!</h2>
          <p className="text-muted-foreground text-sm mb-5">Share for bonus entries!</p>

          <div className="grid grid-cols-2 gap-3">
            <SocialButton
              icon={Share2}
              label="X (Twitter)"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(affiliateLink)}`}
            />
            <SocialButton
              icon={MessageCircle}
              label="Instagram"
              href="https://www.instagram.com/"
            />
          </div>
          <div className="mt-3">
            <SocialButton
              icon={Share2}
              label="Facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(affiliateLink)}`}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
