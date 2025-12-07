import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../utilities/formatting";
import { cartActions } from "../store/cartSlice";

export default function CartItems() {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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
    <div className="flex w-full flex-col h-full">
      {products.map((item) => (
        <div className="flex w-full h-full flex-wrap px-8 mb-4">
          <div className="flex w-1/3 justify-start items-center h-full overflow-hidden gap-0">
            <img
              src={item.image}
              alt={item.brand}
              className="flex object-cover w-full h-full bg-white hover:scale-95 transition-transform duration-300 rounded-xl"
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
                  -
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
      ))}
    </div>
  );
}
