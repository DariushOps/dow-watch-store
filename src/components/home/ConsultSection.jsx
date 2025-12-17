import Watch from "../../assets/watchPic/13.webp";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const leftVariant = {
  hidden: {
    x: -200,
    opacity: 0,
    transition: { duration: 3.5, type: "spring" },
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, type: "spring" },
  },
};

const rightVariant = {
  hidden: { x: 200, opacity: 0, transition: { duration: 3.5, type: "spring" } },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 3, type: "spring" },
  },
};

export default function ConsultSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (isInView) controls.start("show");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <section className="pt-20 md:pt-28 lg:pt-35">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, type: "spring" }}
        className="flex justify-center items-center pb-16 md:pb-20 lg:pb-45"
      >
        <h2 className="header-secondary text-center">Consult with Experts</h2>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="flex flex-col lg:flex-row w-full bg-slate-900/60 overflow-hidden"
      >
        <motion.div
          variants={leftVariant}
          className="w-full lg:w-1/2 h-[260px] sm:h-80 md:h-[380px] lg:h-full overflow-hidden"
        >
          <img
            src={Watch}
            alt="watch"
            className="w-full h-full object-cover object-center scale-120 hover:scale-100 opacity-65 transition-all duration-4000 cursor-pointer"
          />
        </motion.div>

        <motion.div
          variants={rightVariant}
          className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-8 py-8 sm:py-10 md:py-12 lg:py-35 px-6 sm:px-10 lg:px-35"
        >
          <h6 className="capitalize text-lg sm:text-xl md:text-[1.5rem] lg:text-[2rem] font-light font-lato text-center lg:text-left">
            you can trust us
          </h6>
          <h2 className="text-2xl sm:text-[2.2rem] md:text-[2.5rem] lg:text-[4rem] font-cormorant text-gray-200 font-normal capitalize text-center lg:text-left hover:drop-shadow-lg transition-all duration-500">
            Guided by Specialists
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-lato text-center lg:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            itaque temporibus, delectus perferendis rem qui! Quos itaque
            possimus tempore deserunt, exercitationem in ea quas quasi
            voluptate.
          </p>
          <Link
            to="/contactus"
            className="flex justify-center lg:justify-start pt-4"
          >
            <motion.span
              className="flex justify-center items-center w-50 sm:w-60 md:w-65 lg:w-70 h-13 sm:h-16 md:h-18 border-2 border-amber-500/60 text-gray-200 text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem] font-montserrat capitalize"
              whileHover={{
                borderRadius: "10px",
                color: "#e5e7eb",
                backgroundColor: "#fe9a0099",
                boxShadow: "0 0 12px rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 500,
                damping: 100,
              }}
            >
              contact us
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
