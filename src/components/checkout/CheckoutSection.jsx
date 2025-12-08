import { useSelector } from "react-redux";

export default function CheckoutSection() {
  const product = useSelector((state) => state.items);
  return (
    <section className="py-20">
      <div></div>
    </section>
  );
}
