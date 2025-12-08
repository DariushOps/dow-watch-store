import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../utilities/formatting";
import { cartActions } from "../store/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImSad2 } from "react-icons/im";

export default function CartItems({ onClick }) {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  function handleIncrease(product) {
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

  function handleDecrease(id) {
    dispatch(cartActions.removeFromCart(id));
  }

  return (
    <>
      {products.length > 0 ? (
        <div className="flex w-full flex-col h-full">
          {products.map((item) => (
            <>
              <div className="flex w-full flex-wrap px-8 mb-4">
                <div className="flex w-1/3 justify-start items-center h-full overflow-hidden gap-0">
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="flex object-cover w-full h-40 bg-white hover:scale-95 transition-transform duration-300 rounded-xl"
                  />
                </div>
                <div className="flex w-2/3 items-center flex-col justify-center h-full text-slate-50 text-[1.2rem] font-semibold gap-0 pl-3">
                  <h3>{item.model}</h3>
                  <p className="mb-2">
                    {currencyFormatter.format(item.price * item.quantity)}
                  </p>
                  <div className="flex w-[45%] h-10 mx-auto  border rounded-lg border-gray-400 justify-center items-center pb-2">
                    <div className="flex w-2/5 h-full justify-center items-center text-[2.2rem] text-red-500">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className=" cursor-pointer"
                      >
                        {item.quantity === 1 ? (
                          <FaTrashAlt className="w-7 h-7 pt-2" />
                        ) : (
                          "-"
                        )}
                      </button>
                    </div>
                    <div className="flex w-1/5 items-center justify-center h-full text-[1.5rem] text-slate-50 pt-2">
                      <p>{item.quantity}</p>
                    </div>
                    <div className="flex w-2/5 h-full justify-center text-[2.2rem] items-center text-red-500 ">
                      <button
                        onClick={() => handleIncrease(item)}
                        className=" cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="py-10 w-[85%] mx-auto text-gray-400">
            <hr />
          </div>
          <div className="flex w-full px-8 pb-20">
            <div className=" flex w-4/6 justify-start items-center">
              <div className="flex w-full">
                <Link
                  to="checkout"
                  onClick={onClick}
                  className="flex w-[80%] text-[1.4rem]   h-15 font-montserrat justify-center items-center uppercase ml-2"
                >
                  <motion.span
                    whileHover={{
                      borderRadius: "15px",
                      background: "oklch(50.7% 0.300 27.325)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 500,
                      damping: 100,
                    }}
                    className="flex w-full h-full  justify-center rounded-md  border-red-600 border-2 items-center transition-colors duration-500"
                  >
                    checkout
                  </motion.span>
                </Link>
              </div>
            </div>
            <div className="flex w-2/6 justify-center items-center">
              <div className="font-lato text-[1.4rem] font-semibold justify-start items-center -ml-7">
                <p>{currencyFormatter.format(totalPrice).replace("£", "£ ")}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-[80%] mx-auto h-30 rounded-3xl bg-slate-500/80 justify-center items-center text-2xl font-montserrat capitalize">
          <p className="flex items-center gap-2 justify-center">
            Your Cart is empty
            <span>
              <ImSad2 className="w-6 h-6" />
            </span>
          </p>
        </div>
      )}
    </>
  );
}
