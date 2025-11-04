import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import ServerUptime from "./components/server-uptime";
import KeyFeatures from "./components/key-features";
import SubscriptionPlans from "./components/subscription-plans";
import DownloadApp from "./components/download-app";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServerUptime />
      <KeyFeatures />
      <SubscriptionPlans />
      <DownloadApp />
    </main>
  );
}
