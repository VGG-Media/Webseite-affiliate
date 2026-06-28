import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";
import TrustSection from "./components/TrustSection";
import DealsSection from "./components/DealsSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Header />
      <Hero />
      <FeaturedSection />
      <TrustSection />
      <DealsSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
