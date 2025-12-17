import { useSelector } from "react-redux";
import { currencyFormatter } from "../../utilities/formatting";
import CustomInput from "../../utilities/CustomInput";

export default function CheckoutSection() {
  const products = useSelector((state) => state.cart.items);
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className=" mx-auto py-18 md:py-30">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center text-[2rem] sm:text-[3rem] md:text-[3.5rem] font-cinzel text-style">
          <h2>Total price : {currencyFormatter.format(totalPrice)}</h2>
        </div>

        <form action="" className="md:w-270 w-135 sm:w-200 mx-auto">
          <CustomInput formInput="fullName" />
          <CustomInput formInput="email" type="email" />
          <CustomInput formInput="country" />
          <CustomInput formInput="city" />
          <div className="flex md:hidden flex-col">
            <CustomInput formInput="postalCode" type="number" />
            <CustomInput formInput="street" />
          </div>

          <div className="hidden md:flex w-270 md:gap-14">
            <CustomInput
              formInput="postalCode"
              type="number"
              style={{ width: "320px" }}
            />
            <CustomInput formInput="street" style={{ width: "320px" }} />
          </div>

          <div className="flex w-135 h-15 md:w-270 sm:w-200 rounded-md md:h-18 hover:bg-emerald-700  hover:-translate-y-1 active:translate-y-1 transition-all duration-500 text-3xl md:text-[2.2rem] font-montserrat border-2 tracking-[.5rem] border-emerald-700 hover:tracking-[1rem] mt-12 justify-center items-center">
            <button className="flex uppercase w-270 h-18 justify-center items-center cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
