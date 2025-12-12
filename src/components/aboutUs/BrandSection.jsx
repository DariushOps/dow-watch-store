import Rolex from "../../assets/watchPic/28.webp";
import Img from "../../assets/watchPic/2.webp";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function BrandSection() {
  return (
    <section>
      <div className="w-full bg-slate-900/60">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 3,
            type: "spring",
          }}
          className="flex gap-0 h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-[50%] group overflow-hidden">
            <img
              src={Rolex}
              alt="Watch pic"
              className="h-full w-full object-cover scale-105 object-center opacity-85 hover:opacity-60 hover:scale-100 transition-all duration-600 cursor-pointer "
            />
          </div>
          <div className="flex w-[50%] px-10 flex-col gap-12 ">
            <h2 className="block w-[70%]  cursor-context-menu ml-8 font-cormorant text-gray-200 hover:text-amber-500  hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[4rem] font-light uppercase">
              Time Refined by DOW
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
            <Link
              to="shop"
              className="flex justify-start items-center px-10 w-90"
            >
              <motion.span
                className=" flex justify-center items-center w-70 h-18 bg-transparent border-2 border-amber-500/60 text-gray-200 text-[1.8rem] font-montserrat capitalize"
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
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 3,
            type: "spring",
          }}
          className="flex gap-0 h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-[50%] px-10 flex-col gap-12 ">
            <h2 className="block w-[70%] -ml-15  cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500  hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[4.5rem] font-light uppercase">
              Timeless by DOW
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
            <Link
              to="shop"
              className="flex justify-start items-center px-10 w-90"
            >
              <motion.span
                className=" flex justify-center items-center w-70 h-18 bg-transparent border-2 border-amber-500/60 text-gray-200 text-[1.8rem] font-montserrat capitalize"
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
          <div className="flex w-[50%] group overflow-hidden">
            <img
              src={Img}
              alt="Watch pic"
              className="h-full w-full object-cover scale-105 object-center opacity-85 hover:opacity-60 hover:scale-100 transition-all duration-600 cursor-pointer "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
