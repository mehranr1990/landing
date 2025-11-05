import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import ServerUptime from "./components/server-uptime";
import KeyFeatures from "./components/key-features";
import SubscriptionPlans from "./components/subscription-plans";
import Testimonials from "./components/testimonials";
import DownloadApp from "./components/download-app";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServerUptime />
      <KeyFeatures />
      <SubscriptionPlans />
      <DownloadApp />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
