import BrandSection from "../components/BrandSection";
import CartSection from "../components/CartSection";
import ConsultSection from "../components/ConsultSection";
import IntroSection from "../components/IntroSection";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <BrandSection />
      <CartSection />
      <ConsultSection />
      <TestimonialSection />
    </main>
  );
}
