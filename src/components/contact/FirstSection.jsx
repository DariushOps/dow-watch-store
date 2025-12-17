import HeadImg from "../../assets/watchPic/checkout.jpg";

export default function FirstSection() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div
          className="
            relative flex w-full 
            h-[35vh] sm:h-[45vh] md:h-[60vh] 
            lg:h-110     
            overflow-hidden 
            justify-center items-center
          "
        >
          <img
            src={HeadImg}
            alt="watch pic"
            className="
              w-full 
              h-full lg:h-fit   
              object-cover object-center 
              opacity-15
            "
          />

          <div className="absolute inset-0 flex justify-center items-center">
            <h1
              className="
                text-style
                text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem]
                font-normal text-center
                pt-16 md:pt-24 lg:pt-24 
                font-cinzel
                hover:scale-110 transition-transform duration-500
              "
            >
              Contact us
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
