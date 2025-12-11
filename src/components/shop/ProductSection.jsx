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
      <div className="w-[95%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-md overflow-hidden flex flex-col shadow-sm"
          >
            {/* تصویر */}
            <div
              className="
                relative w-full 
                sm:h-120 md:h-150 lg:h-215
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

            {/* متن و دکمه */}
            <div className="flex items-center justify-between gap-2 p-4 md:p-5 lg:h-40">
              <div className="flex flex-col w-2/3">
                {/* مدل ساعت (بدون truncate – با واکنش‌پذیری واقعی) */}
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

                {/* قیمت */}
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

              {/* دکمه */}
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
          </article>
        ))}
      </div>
    </section>
  );
}
