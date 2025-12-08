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
    <section className="flex w-[70%] mx-auto py-20">
      <div>
        <div className="flex justify-start text-5xl font-cinzel pb-4">
          <h2>Total price : {currencyFormatter.format(totalPrice)}</h2>
        </div>
        <form action="">
          <CustomInput formInput="fullName" />
          <CustomInput formInput="email" type="email" />
          <CustomInput formInput="country" />
          <CustomInput formInput="city" />
          <div className="flex w-240 gap-12">
            <CustomInput
              formInput="postalCode"
              type="number"
              style={{ width: "100%" }}
            />
            <CustomInput formInput="street" style={{ width: "100%" }} />
          </div>
        </form>
      </div>
    </section>
  );
}
