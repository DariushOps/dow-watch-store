import BrandSection from "../components/BrandSection";
import CartSection from "../components/CartSection";
import ConsultSection from "../components/ConsultSection";
import IntroSection from "../components/IntroSection";
import TestimonialSection from "../components/TestimonialSection";
import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <IntroSection />
      <BrandSection />
      <CartSection />
      <ConsultSection />
      <TestimonialSection />
    </main>
  );
}
