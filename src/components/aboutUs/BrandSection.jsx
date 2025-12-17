import Rolex from "../../assets/watchPic/28.jpg";
import Img from "../../assets/watchPic/2.webp";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function BrandSection() {
  return (
    <section>
      <div className="w-full bg-slate-900/60">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 4,
            type: "spring",
          }}
          className="flex flex-col lg:flex-row h-auto lg:h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-full lg:w-[50%] group overflow-hidden">
            <img
              src={Img}
              alt="Watch pic"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-full object-cover scale-105 hover:scale-100 opacity-80 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>
          <div className="flex w-full lg:w-[50%] px-8 py-8 md:px-10 md:py-12 lg:px-23 flex-col gap-12 md:gap-14 lg:gap-16">
            <h2 className="block w-full lg:w-[75%] text-center lg:text-start mx-auto lg:mx-0 cursor-context-menu font-cormorant text-gray-200 hover:text-amber-500  hover:drop-shadow-lg transition-all transform-gpu duration-500 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-light uppercase">
              Time Refined by DOW
            </h2>
            <p
              className="font-lato text-center lg:text-justify
                text-[1.15rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]
                leading-[1.95] lg:leading-normal
                max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none
                mx-auto"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
            <Link
              to="/shop"
              className="flex mx-auto lg:mx-0 justify-center lg:justify-start items-center w-70"
            >
              <motion.span
                className="flex justify-center  items-center w-50 sm:w-60 md:w-65 lg:w-70 h-13 sm:h-16 md:h-18 bg-transparent border-2 border-amber-500/60 text-gray-200 text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem] font-montserrat capitalize"
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
                explore
              </motion.span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 3,
            type: "spring",
          }}
          className="flex flex-col-reverse lg:flex-row h-auto lg:h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-full lg:w-[50%] px-8 py-8 md:px-10 md:py-12 lg:px-23 flex-col gap-12 md:gap-14 lg:gap-16">
            <h2 className="block w-full text-center lg:text-start lg:w-[60%] mx-auto lg:mx-0 cursor-context-menu  font-cormorant text-gray-200 hover:text-amber-500 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-light uppercase">
              Timeless by DOW
            </h2>
            <p className="font-lato text-center lg:text-justify  text-[1.15rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-[1.95] lg:leading-normal max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
            <Link
              to="/shop"
              className="flex mx-auto lg:mx-0 justify-center lg:justify-start items-center w-70"
            >
              <motion.span
                className="flex justify-center items-center w-50 sm:w-60 md:w-65 lg:w-70 h-13 sm:h-16 md:h-18 bg-transparent border-2 border-amber-500/60 text-gray-200 text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem] font-montserrat capitalize"
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
                explore
              </motion.span>
            </Link>
          </div>
          <div className="flex w-full lg:w-[50%] group overflow-hidden">
            <img
              src={Rolex}
              alt="Watch pic"
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-full object-cover object-center scale-105 hover:scale-100 opacity-80 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
