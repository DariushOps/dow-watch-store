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
      className="
        flex flex-col lg:flex-row

        py-24 md:py-28 lg:py-40
        px-4 sm:px-6 md:px-10 lg:px-36

        items-start lg:items-center
        gap-16 lg:gap-20
      "
    >
      <div className="w-full lg:w-[50%] flex justify-center">
        <h2 className="header-secondary text-center lg:text-left">
          designed to <br />
          defined your moment
        </h2>
      </div>

      <div className="w-full lg:w-[50%] flex justify-center">
        <p
          className="
            font-lato text-center lg:text-justify  text-[1.15rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]
            leading-[1.95]
            lg:leading-normal
            max-w-[90%]
            sm:max-w-[85%]
            md:max-w-[80%]
            lg:max-w-none
            px-0 lg:px-10
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, fugiat
          ipsum corporis quia error nisi dignissimos asperiores numquam,
          molestias magnam possimus eaque delectus nesciunt nam, exercitationem
          dolor molestiae eius quae. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Placeat consequatur, dolor quod ab nobis, quasi
          debitis temporibus eaque veniam, ut saepe eveniet id assumenda alias
          accusantium minima vel sapiente delectus.
        </p>
      </div>
    </motion.section>
  );
}
