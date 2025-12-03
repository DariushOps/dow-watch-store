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
          Luxury Watches, <br />
          Crafted for You
        </h2>
      </div>
      <div className="flex w-[50%] justify-center items-center">
        <p className="text-sm lg:text-[1.8rem] px-10 m-0 font-lato ">
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
