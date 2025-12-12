import AboutImg from "../assets/watchPic/check.webp";
import BrandSection from "../components/aboutUs/BrandSection";
import IntroSection from "../components/aboutUs/IntroSection";

export default function About() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative flex w-full h-120 overflow-hidden  justify-center items-center">
          <img
            src={AboutImg}
            alt="watch pic"
            className="flex w-full h-fit object-cover opacity-20"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-style text-4xl md:text-6xl lg:text-[5.5rem] font-normal text-center pt-24 font-cinzel hover:scale-110 transition-transform duration-500">
              About Us
            </h1>
          </div>
        </div>
      </div>
      <IntroSection />
      <BrandSection />
      <div className="py-50 w-[80%] mx-auto text-3xl">
        <p>
          At DOW, we believe that every second counts, and choosing the right
          watch can elevate your style, personality, and special moments. Our
          store was created to provide a simple, secure, and enjoyable online
          shopping experience — a place where you can find everything from the
          latest trends to classic designs with ease. We carefully curate a wide
          range of watches from reputable brands to cater to all tastes. Whether
          you are looking for a formal, classic timepiece for special occasions
          or a modern, sporty watch for everyday wear, our collection has the
          perfect choice for you. Shopping with us is designed to be effortless:
          Easy & Quick Selection: Detailed features, high-quality images, and
          smart filters to find your perfect watch Secure Purchases: Safe online
          payments and protection of customer information Support & Service:
          Responsive assistance for any questions or guidance throughout your
          shopping journey We are here to make your watch shopping experience
          enjoyable — from your first click to the moment your watch reaches
          your wrist. Adorn your time with the best, with DOW.
        </p>
      </div>
    </section>
  );
}
