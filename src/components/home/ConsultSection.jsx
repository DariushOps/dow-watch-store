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
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section className="py-35">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        className="flex justify-center items-center pb-45"
      >
        <h2 className="header-secondary">Consult with Experts</h2>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="flex w-full bg-slate-900/60 overflow-hidden"
      >
        <motion.div
          variants={leftVariant}
          className="flex w-1/2 h-180 overflow-hidden "
        >
          <img
            src={Watch}
            alt="watch"
            className="flex h-full w-full object-cover scale-120 object-center opacity-65 hover:scale-100 transition-all duration-3000 cursor-pointer "
          />
        </motion.div>
        <motion.div
          variants={rightVariant}
          className="flex w-1/2 h-180 flex-col py-35 px-35 gap-8"
        >
          <h6 className="capitalize text-xl md:text-[1.5rem] lg:text-[2rem] font-light font-lato">
            you can trust us
          </h6>
          <h2 className="flex w-full justify-start cursor-context-menu font-cormorant text-gray-200  hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[4rem] font-normal capitalize ">
            Guided by Specialists
          </h2>
          <p className="flex  text-sm lg:text-[1.8rem] font-lato justify-start text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            itaque temporibus, delectus perferendis rem qui! Quos itaque
            possimus tempore deserunt, exercitationem in ea quas quasi voluptate
            .
          </p>
          <Link to="shop" className="flex justify-start items-center w-70 pt-4">
            <motion.span
              className=" flex mx-auto justify-center items-center w-70 h-18 bg-transparent border-2 border-amber-500/60 text-gray-200 text-[1.8rem] font-montserrat capitalize"
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
              type="button"
            >
              contact us
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
