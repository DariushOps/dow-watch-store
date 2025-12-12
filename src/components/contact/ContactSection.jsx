import CustomInput from "../../utilities/CustomInput";
import CustomText from "../../utilities/CustomText";
import HeadImg from "../../assets/watchPic/9.webp";

export default function ContactSection() {
  return (
    <section className="flex w-[80%] gap-10 h-200 mx-auto py-30">
      <div className="flex w-1/2 flex-col -mt-8 ">
        <form action="" className="w-220 mx-auto">
          <CustomInput formInput="fullName" style={{ width: "100%" }} />
          <CustomInput
            formInput="email"
            type="email"
            style={{ width: "100%" }}
          />
          <CustomText formInput="comment" style={{ width: "100%" }} />

          <div className="flex w-220 rounded-md h-18 hover:bg-emerald-700  hover:-translate-y-1 active:translate-y-1 transition-all duration-500 text-[2.2rem] font-montserrat border-2 tracking-[.5rem] border-emerald-700 hover:tracking-[1rem] mt-14 justify-center items-center">
            <button
              type="button"
              className="flex uppercase w-220 h-18 justify-center items-center cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-1/2 justify-center items-center overflow-hidden rounded-2xl py-4 hover:scale-103 transition-transform duration-1000">
        <img
          src={HeadImg}
          alt=""
          className="w-full h-full object-cover object-center rounded-2xl opacity-70"
        />
      </div>
    </section>
  );
}
