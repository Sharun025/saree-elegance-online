import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import StorySection from "@/components/StorySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PromoBanner from "@/components/PromoBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <StorySection />
      <WhyChooseUs />
      <PromoBanner />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;