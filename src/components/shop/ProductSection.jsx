import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { currencyFormatter } from "../../utilities/formatting";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

export default function ProductSection() {
  const data = useLoaderData();
  const dispatch = useDispatch();

  function addToCart(product) {
    dispatch(
      cartActions.addToCart({
        id: product.id,
        model: product.model,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  }

  return (
    <section className="py-12 md:py-28 lg:py-60">
      <div className="sm:w-[85%] md:w-[95%] lg:w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.02 }}
            transition={{
              duration: 2,
              type: "spring",
              staggerChildren: 0.4,
            }}
            key={item.id}
            className="bg-white rounded-md overflow-hidden flex flex-col shadow-sm"
          >
            <div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="
                relative w-full 
                h-56 sm:h-120 md:h-150 lg:h-215
                overflow-hidden group
              "
            >
              <img
                src={item.image}
                alt={item.model}
                className="
                  w-full h-full object-cover rounded-t-md
                  transition-transform duration-500
                  sm:scale-55
                  sm:group-hover:scale-60
                  md:scale-60
                  md:group-hover:scale-65
                  lg:scale-68 lg:group-hover:scale-73
                "
              />
              <div className="absolute inset-0 bg-black opacity-10 pointer-events-none" />
            </div>

            <div className="flex items-center justify-between gap-2 p-4 md:p-5 lg:h-40">
              <div className="flex flex-col w-2/3">
                <p
                  className="
                    font-lato italic font-semibold
                    text-[1.2rem] text-stone-900
                    sm:text-[1.4rem] 
                    md:text-[1.3rem] 
                    lg:text-[1.6rem]
                 
                  "
                >
                  {item.model}
                </p>

                <p
                  className="
                    font-montserrat font-semibold text-stone-900
                    mt-1
                    text-[1rem] sm:text-[1.2rem] md:text-[1.15rem] lg:text-[1.45rem]
                  "
                >
                  {currencyFormatter.format(item.price).replace("£", "£ ")}
                </p>
              </div>

              <div className="flex w-1/3 justify-center items-center">
                <motion.button
                  onClick={() => addToCart(item)}
                  whileHover={{ borderRadius: "12px", color: "#fff" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    duration: 0.28,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="
                    w-28 h-10 text-sm
                    md:w-36 md:h-12 md:text-base
                    lg:w-45 lg:h-18 lg:text-xl
                    bg-emerald-800 border-2 border-emerald-900
                    font-montserrat font-medium rounded-md cursor-pointer
                    text-white hover:bg-emerald-600 transition-colors duration-300
                    flex items-center justify-center
                  "
                >
                  Add to cart
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
