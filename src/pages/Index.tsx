import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryDiscovery from "@/components/CategoryDiscovery";
import BestSellers from "@/components/BestSellers";
import SpotlightSection from "@/components/SpotlightSection";
import GemstoneDiscovery from "@/components/GemstoneDiscovery";
import TrustSection from "@/components/TrustSection";
import GiftSection from "@/components/GiftSection";
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
        <BestSellers />
        <SpotlightSection />
        <GemstoneDiscovery />
        <TrustSection />
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
