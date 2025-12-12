import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 2,
        type: "spring",
      }}
      className="py-40 px-36 items-center  flex gap-20"
    >
      <div className="flex w-[50%] justify-center">
        <h2 className="header-secondary">
          Designed to Define <br /> Your Moment
        </h2>
      </div>
      <div className="flex w-[50%] justify-center items-center">
        <p className="text-sm lg:text-[1.8rem] px-10 m-0 font-lato text-justify">
          At DOW, we believe that every second counts, and choosing the right
          watch can elevate your style, personality, and special moments. Our
          store was created to provide a simple, secure, and enjoyable online
          shopping experience a place where you can find everything from the
          latest trends to classic designs with ease.
        </p>
      </div>
    </motion.section>
  );
}
