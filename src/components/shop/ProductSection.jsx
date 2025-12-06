import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductSection() {
  const data = useLoaderData();

  return (
    <section className="py-40">
      <div className="flex flex-wrap w-[80%] gap-0 m-auto">
        {data.map((item) => (
          <article
            key={item.id}
            className="w-full sm:w-[40%] md:w-[32.5%] mx-auto h-215 flex bg-white flex-col items-center justify-center rounded-sm mb-4 relative"
          >
            <div className="relative w-full h-full overflow-hidden group ">
              <img
                src={item.image}
                alt={item.model}
                className="w-full h-full scale-75 object-cover rounded-md group-hover:scale-79 transition-transform duration-400 backface-hidden"
              />
              <div className="absolute inset-0 opacity-10 bg-black "></div>
            </div>
            <div className="flex w-full h-40 pt-4">
              <div className=" flex text-stone-950 w-[60%] flex-col items-start">
                <p className="h-1/2 font-lato italic font-semibold text-[1.6rem] flex items-center pl-6">
                  {item.model}
                </p>
                <p className="h-1/2 font-montserrat font-semibold text-[1.6rem] flex items-start px-6">
                  {item.price}
                </p>
              </div>
              <div className="flex w-[40%] justify-center items-center">
                <motion.button
                  whileHover={{
                    borderRadius: "10px",
                    color: "#fff",
                    boxShadow: "0 0 12px rgba(255,255,255,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 500,
                    damping: 100,
                  }}
                  className="w-45 h-18 bg-slate-700 border-2 border-slate-900 text-xl font-montserrat font-medium rounded-md cursor-pointer text-white hover:bg-slate-800 transition-colors duration-400 capitalize"
                >
                  Add to card
                </motion.button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
