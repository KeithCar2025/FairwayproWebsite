import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import FAQSection from "../components/landing/FAQSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

const IMAGES = {
  ball: "/assets/shot-tracer-launch.png",
  phone: "/assets/shot-tracer-phone.png",
};

export default function Home() {
  return (
    <div className="site-shell min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection ballImage={IMAGES.ball} phoneImage={IMAGES.phone} />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
