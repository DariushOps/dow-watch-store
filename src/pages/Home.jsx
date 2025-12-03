import BrandSection from "../components/home/BrandSection";
import CartSection from "../components/home/CartSection";
import ConsultSection from "../components/home/ConsultSection";
import IntroSection from "../components/home/IntroSection";
import TestimonialSection from "../components/home/TestimonialSection";
import Header from "../components/home/Header";

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
