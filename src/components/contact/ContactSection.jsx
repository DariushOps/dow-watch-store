import CustomInput from "../../utilities/CustomInput";
import CustomText from "../../utilities/CustomText";
import HeadImg from "../../assets/watchPic/9.webp";

export default function ContactSection() {
  return (
    <section className="flex w-[80%] gap-10 justify-center items-center md:h-200 mx-auto py-20 md:py-30">
      <div className="flex xl:w-1/2 flex-col -mt-8 ">
        <form action="" className="md:w-220 sm:w-200 w-135 mx-auto">
          <CustomInput formInput="fullName" style={{ width: "100%" }} />
          <CustomInput
            formInput="email"
            type="email"
            style={{ width: "100%" }}
          />
          <CustomText formInput="comment" style={{ width: "100%" }} />

          <div className="flex md:w-220 sm:w-200 w-135 rounded-md h-15 md:h-18 hover:bg-emerald-700  hover:-translate-y-1 active:translate-y-1 transition-all duration-500 text-[2.2rem] font-montserrat border-2 tracking-[.5rem] border-emerald-700 hover:tracking-[1rem] mt-14 justify-center items-center">
            <button
              type="button"
              className="flex uppercase md:w-270 sm:w-200 w-135 h-18 justify-center items-center cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="hidden xl:flex w-1/2 h-150 justify-center items-center overflow-hidden rounded-2xl py-8 mt-1 hover:scale-103 transition-transform duration-1000">
        <img
          src={HeadImg}
          alt=""
          className="w-full h-full object-cover object-center rounded-2xl opacity-70"
        />
      </div>
    </section>
  );
}
