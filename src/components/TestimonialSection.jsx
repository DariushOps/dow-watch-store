import { useEffect, useState } from "react";
import testimonials from "../../dataTest";
import ImgBg from "../assets/watchPic/5.webp";
import { AnimatePresence, motion } from "framer-motion";

const slides = testimonials.length;

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((index + 1) % slides);
    }, 7000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides) % slides);
  };

  const secondIndex = (index + 2) % slides;

  const cartVariants = {
    hidden: (dir) => ({ opacity: 0, x: -40 * dir }),
    show: { opacity: 1, x: 0, transition: { duration: 0.75 } },
    exit: (dir) => ({
      opacity: 0,
      x: 40 * dir,
      transition: { duration: 0.75 },
    }),
  };

  return (
    <section className="pt-10">
      <div className="relative w-full h-140">
        <img
          src={ImgBg}
          alt="background watch pic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-600/80"></div>

        <div className="absolute inset-0 flex w-[80%] mx-auto justify-center items-center gap-10">
          <AnimatePresence custom={direction} mode="popLayout">
            {[index, secondIndex].map((i) => {
              const item = testimonials[i];
              return (
                <motion.div
                  key={`${item.id}-${index}`}
                  custom={direction}
                  variants={cartVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-1/2 text-white text-center"
                >
                  <p className="text-[2rem] italic">"{item.comment}"</p>
                  <h4 className="mt-4 font-semibold text-2xl text-amber-300">
                    — {item.name}
                  </h4>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="absolute top-[43%] left-40 opacity-10 hover:opacity-90 transition-opacity duration-300">
          <button onClick={prevSlide} className="text-[3rem] italic">
            &lt;
          </button>
        </div>
        <div className="absolute top-[43%] right-40 opacity-10 hover:opacity-90 transition-opacity duration-300">
          <button onClick={nextSlide} className="text-[3rem] italic">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
