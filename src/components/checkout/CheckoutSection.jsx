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
    <section className=" mx-auto py-30">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center text-[3.5rem] font-cinzel text-style">
          <h2>Total price : {currencyFormatter.format(totalPrice)}</h2>
        </div>

        <form action="" className="w-270 mx-auto">
          <CustomInput formInput="fullName" />
          <CustomInput formInput="email" type="email" />
          <CustomInput formInput="country" />
          <CustomInput formInput="city" />

          <div className="flex w-270 gap-14">
            <CustomInput
              formInput="postalCode"
              type="number"
              style={{ width: "320px" }}
            />
            <CustomInput formInput="street" style={{ width: "320px" }} />
          </div>

          <div className="flex w-270 rounded-md h-18 hover:bg-red-700 hover:-translate-y-1 active:translate-y-1 transition-all duration-500 text-[2.2rem] font-cinzel border-3 tracking-[.5rem] border-red-700 hover:tracking-[1rem] mt-12 justify-center items-center">
            <button className="uppercase w-full h-full">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
