import Rolex from "../../assets/watchPic/7.webp";
import Omega from "../../assets/watchPic/12.webp";
import Seiko from "../../assets/watchPic/21.webp";
import Breitling from "../../assets/watchPic/3.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function BrandSection() {
  return (
    <section>
      <div className="w-full bg-slate-900/60">
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 4,
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
          <div className="flex w-[50%] px-10 flex-col gap-16 ">
            <h2 className="block w-[30%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[5.2rem] font-light uppercase">
              Rolex
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
            <Link
              to="shop"
              className="flex mx-auto justify-center items-center w-70"
            >
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
                explore
              </motion.span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 3, type: "spring" }}
          className="flex gap-0 h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-[50%] px-10 flex-col gap-16">
            <h2 className="block w-[30%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-2xl md:text-[2rem] lg:text-[5.2rem] font-light uppercase">
              Omega
            </h2>
            <p className=" text-sm lg:text-[1.8rem] px-10 m-0 font-lato text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aperiam pariatur enim eius id
            </p>
            <Link
              to="shop"
              className="flex mx-auto justify-center items-center w-70"
            >
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
                explore
              </motion.span>
            </Link>
          </div>
          <div className="flex w-[50%] group overflow-hidden">
            <img
              src={Omega}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-85 hover:opacity-60 scale-105 hover:scale-100 transition-all transform-gpu duration-600 cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
