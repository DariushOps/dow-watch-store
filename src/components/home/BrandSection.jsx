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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.005 }}
          transition={{ duration: 2, type: "spring" }}
          className="flex flex-col lg:flex-row h-auto lg:h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-full lg:w-[50%] group overflow-hidden">
            <img
              src={Rolex}
              alt="Rolex"
              className="
                w-full
                h-[300px] sm:h-[340px] md:h-[330px]
                lg:h-full
                scale-100
                object-cover object-center
                lg:scale-105 hover:scale-100
                opacity-85 hover:opacity-60
                transition-all duration-600 cursor-pointer
              "
            />
          </div>

          <div className="flex w-full lg:w-[50%] px-8 py-8 md:px-10 md:py-12 lg:px-20 flex-col gap-12 md:gap-14 lg:gap-16">
            <h2 className="block w-full lg:w-[30%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-[2.5rem] md:text-[3.5rem] lg:text-[5.2rem] font-light uppercase">
              Rolex
            </h2>

            <p
              className="
                font-lato text-center lg:text-justify
                text-[1.15rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]
                leading-[1.95] lg:leading-normal
                max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none
                mx-auto
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nemo obcaecati nulla quisquam sapiente voluptatum numquam, ad
              dolore tenetur expedita deserunt deleniti fugiat ratione
              temporibus repellendus, accusantium voluptatem debitis possimus.
            </p>

            <Link
              to="/shop"
              className="flex mx-auto justify-center items-center w-70"
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
              >
                explore
              </motion.span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 2, type: "spring" }}
          className="flex flex-col-reverse lg:flex-row h-auto lg:h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-full lg:w-[50%] px-8 py-8 md:px-10 md:py-12 lg:px-20 flex-col gap-12 md:gap-14 lg:gap-16">
            <h2 className="block w-full lg:w-[30%] mx-auto cursor-context-menu text-center font-cormorant text-gray-200 hover:text-amber-500 hover:scale-115 hover:drop-shadow-lg transition-all transform-gpu duration-500 text-[2.5rem] md:text-[3.5rem] lg:text-[5.2rem] font-light uppercase">
              Omega
            </h2>

            <p className="font-lato text-center lg:text-justify  text-[1.15rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-[1.95] lg:leading-normal max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. In consectetur voluptates architecto
              nostrum voluptatibus quod suscipit fugiat iusto aliquam nisi quis
              natus, fuga exercitationem inventore vitae vel explicabo nobis
              nesciunt.
            </p>

            <Link
              to="shop"
              className="flex mx-auto justify-center items-center w-70"
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
              >
                explore
              </motion.span>
            </Link>
          </div>

          <div className="flex w-full lg:w-[50%] group overflow-hidden">
            <img
              src={Omega}
              alt="Omega"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-full object-cover object-center scale-105 hover:scale-100 opacity-85 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 2, type: "spring" }}
          className="flex flex-col lg:flex-row h-auto lg:h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-full lg:w-[50%] group overflow-hidden">
            <img
              src={Seiko}
              alt="Seiko"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-full object-cover object-center scale-105 hover:scale-100 opacity-85 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>

          <div className="flex w-full lg:w-[50%] px-8 py-8 md:px-10 md:py-12 lg:px-20 flex-col gap-12 md:gap-14 lg:gap-16">
            <h2 className="block w-full lg:w-[30%] mx-auto text-center font-cormorant text-gray-200 text-[2.5rem] md:text-[3.5rem] lg:text-[5.2rem] font-light uppercase">
              Seiko
            </h2>

            <p className="font-lato text-center lg:text-justify  text-[1.15rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-[1.95] lg:leading-normal max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Velit, error
              repellendus. Earum doloremque esse minus blanditiis, ut quis,
              itaque, exercitationem nisi nam possimus necessitatibus illum.
              Ipsam voluptatum fugit qui atque.
            </p>

            <Link
              to="shop"
              className="flex mx-auto justify-center items-center w-70"
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
              >
                explore
              </motion.span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 2, type: "spring" }}
          className="flex flex-col-reverse lg:flex-row h-auto lg:h-180 items-center justify-center w-full overflow-hidden"
        >
          <div className="flex w-full lg:w-[50%] px-8 py-8 md:px-10 md:py-12 lg:px-20 flex-col gap-12 md:gap-14 lg:gap-16">
            <h2 className="block w-full  lg:w-[50%] mx-auto text-center font-cormorant text-gray-200 text-[2.5rem] md:text-[3.5rem] lg:text-[5.2rem] font-light uppercase">
              Breitling
            </h2>

            <p className="font-lato text-center lg:text-justify  text-[1.15rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-[1.95] lg:leading-normal max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              dolor ducimus nulla ex, distinctio, nam ipsam maxime id rerum
              dolore, voluptatem quos est possimus eos officia autem pariatur
              quas tempora! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Eum harum rerum.
            </p>

            <Link
              to="shop"
              className="flex mx-auto justify-center items-center w-70"
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
              >
                explore
              </motion.span>
            </Link>
          </div>

          <div className="flex w-full lg:w-[50%] group overflow-hidden">
            <img
              src={Breitling}
              alt="Breitling"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-full object-cover object-center scale-105 hover:scale-100 opacity-85 hover:opacity-60 transition-all duration-600 cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
