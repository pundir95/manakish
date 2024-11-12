import ContactSection from "@/_components/ContactSection";
import Footer from "@/_components/Footer";
import HeaderSection from "@/_components/HeaderSection";
import LimitedTimeOffers from "@/_components/LimitedTimeOffers";
import Navbar from "@/_components/Navbar";
import OurStorySection from "@/_components/OurStorySection";
import ProductsSection from "@/_components/ProductsSection";
import SignatureDelightBanner from "@/_components/SignatureDelightBanner";

export default function Home() {
  return (
    <div className="home-page">
      <HeaderSection />
      <OurStorySection />
      <ProductsSection />
      <SignatureDelightBanner />
      <LimitedTimeOffers />
    </div>
  );
}
