
import PricingHero from "../components/pricing-hero";
import SubscriptionPlans from "../components/subscription-plans";
import FeatureComparison from "../components/feature-comparison";
import PricingFAQ from "../components/pricing-faq";

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <SubscriptionPlans />
      <FeatureComparison />
      <PricingFAQ />
    </main>
  );
}

