
import HeroSection from "./components/HeroSection";
import ServerUptime from "./components/server-uptime";
import KeyFeatures from "./components/key-features";
import SubscriptionPlans from "./components/subscription-plans";
import Testimonials from "./components/testimonials";
import DownloadApp from "./components/download-app";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServerUptime />
      <KeyFeatures />
      <SubscriptionPlans />
      <DownloadApp />
      <Testimonials />
      <FAQ />
    </main>
  );
}
