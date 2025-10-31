import FaqSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import ProductCard from "@/components/ProductCard";
import ProductsSection from "@/components/ProductSection";
import TestimonialSection from "@/components/ProofOfConcept";
import SecurityPrioritySection from "@/components/SecurityAsTopPriority";
import TechnicalInterviewResource from "@/components/TechnicalInterviewResource";
import { guides } from "@/data/GuideData";

export default function Home() {
  return (
    <div>
      <TechnicalInterviewResource />
      <SecurityPrioritySection />
      <TestimonialSection />
      <ProductsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
