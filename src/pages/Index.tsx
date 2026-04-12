import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryDiscovery from "@/components/CategoryDiscovery";
import SignatureRingSection from "@/components/SignatureRingSection";
import BraceletSection from "@/components/BraceletSection";
import BestSellers from "@/components/BestSellers";
import SilverSetSection from "@/components/SilverSetSection";
import SpotlightSection from "@/components/SpotlightSection";
import GemstoneDiscovery from "@/components/GemstoneDiscovery";
import StonePersonalityFinder from "@/components/StonePersonalityFinder";
import TrustSection from "@/components/TrustSection";
import SilverBullionSection from "@/components/SilverBullionSection";
import GiftSection from "@/components/GiftSection";
import BespokeDesignSection from "@/components/BespokeDesignSection";
import ReviewsSection from "@/components/ReviewsSection";
import BrandStory from "@/components/BrandStory";
import MagazinePreview from "@/components/MagazinePreview";
import FAQSection from "@/components/FAQSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <CategoryDiscovery />
        <SignatureRingSection />
        <BestSellers />
        <BraceletSection />
        <SilverSetSection />
        <SpotlightSection />
        <GemstoneDiscovery />
        <StonePersonalityFinder />
        <TrustSection />
        <SilverBullionSection />
        <GiftSection />
        <ReviewsSection />
        <BrandStory />
        <MagazinePreview />
        <FAQSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
