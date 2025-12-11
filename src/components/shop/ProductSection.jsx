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
    <section className="py-60">
      <div className="flex flex-wrap w-[80%] gap-4 m-auto">
        {data.map((item) => (
          <article
            key={item.id}
            className="w-full sm:w-[40%] md:w-[32.5%] h-215 flex bg-white flex-col items-center justify-center rounded-md mb-1 relative"
          >
            <div className="relative w-full h-full overflow-hidden group ">
              <img
                src={item.image}
                alt={item.model}
                className="w-full h-full scale-75 object-cover rounded-lg group-hover:scale-79 transition-transform duration-400 backface-hidden"
              />
              <div className="absolute inset-0 opacity-10 bg-black "></div>
            </div>
            <div className="flex w-full h-40 pt-4">
              <div className=" flex text-stone-950 w-[60%] flex-col items-start">
                <p className="h-1/2 font-lato italic font-semibold text-[1.6rem] flex items-center pl-6">
                  {item.model}
                </p>
                <p className="h-1/2 font-montserrat font-semibold text-[1.6rem] flex items-start px-6">
                  {currencyFormatter.format(item.price).replace("£", "£ ")}
                </p>
              </div>
              <div className="flex w-[40%] justify-center items-center">
                <motion.button
                  onClick={() => addToCart(item)}
                  whileHover={{
                    borderRadius: "15px",
                    color: "#fff",
                  }}
                  whileTap={{ scale: 0.93 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 500,
                    damping: 100,
                  }}
                  className="w-45 h-18 bg-emerald-800 border-2 border-emerald-900 text-xl font-montserrat font-medium rounded-md cursor-pointer text-white hover:bg-emerald-600 transition-colors duration-400 capitalize"
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
