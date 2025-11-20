import Omega from "../assets/watchPic/27.webp";
import Seiko from "../assets/watchPic/17.webp";
import Heuer from "../assets/watchPic/18.webp";
import CustomButton from "../utilities/CustomButton";

export default function CartSection() {
  return (
    <section>
      <div className="flex justify-center items-center py-40">
        <h2 className="header-secondary">Header Secondary</h2>
      </div>
      <div className="flex w-[80%] justify-center mx-auto items-center gap-4 my-5">
        <div className="flex w-1/3 h-[500px] group overflow-hidden relative">
          <h3 className="cart-header">New Arrivals</h3>
          <img src={Omega} alt="Omega watch" className="arrival-img" />
          <CustomButton />
        </div>
        <div className="flex w-1/3 h-[500px] group overflow-hidden relative">
          <h3 className="cart-header w-full justify-center">
            Precision & Craftsmanship
          </h3>
          <img src={Seiko} alt="Omega watch" className="arrival-img" />
          <CustomButton />
        </div>
        <div className="flex w-1/3 h-[500px] group overflow-hidden relative">
          <h3 className="cart-header">Service & Guarantee</h3>
          <img src={Heuer} alt="Omega watch" className="arrival-img" />
          <CustomButton />
        </div>
      </div>
    </section>
  );
}
