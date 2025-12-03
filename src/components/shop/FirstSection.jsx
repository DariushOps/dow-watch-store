import HeadImg from "../../assets/watchPic/4.webp";

export default function FirstSection() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative flex w-full h-140 overflow-hidden  justify-center items-center">
          <img
            src={HeadImg}
            alt="watch pic"
            className="flex w-full h-fit object-cover opacity-15"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-style text-4xl md:text-6xl lg:text-[6.5rem] font-normal text-center pt-24 font-cinzel hover:scale-110 transition-transform duration-500">
              Shop
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
