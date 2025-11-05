import Navbar from "../components/navbar";
import PricingHero from "../components/pricing-hero";
import SubscriptionPlans from "../components/subscription-plans";
import FeatureComparison from "../components/feature-comparison";
import PricingFAQ from "../components/pricing-faq";
import Footer from "../components/footer";

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <PricingHero />
      <SubscriptionPlans />
      <FeatureComparison />
      <PricingFAQ />
      <Footer />
    </main>
  );
}

