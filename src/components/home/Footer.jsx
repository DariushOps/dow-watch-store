import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <section className="h-150 w-full">
        <div className=" flex w-full h-auto pt-13 sm:pt-0 sm:h-130 bg-slate-900/60 flex-col gap-0 sm:gap-10">
          <div className="flex w-full h-[35%] justify-center items-end">
            <Link>
              <h2 className="font-greatVibes text-[4.5rem] font-semibold text-center hover:text-amber-400/80 duration-500 transition-colors">
                DOW
              </h2>
            </Link>
          </div>
          <div className="flex w-full sm:flex-row flex-col lg:w-[85%] mx-auto ">
            <div className="flex flex-col w-full sm:w-[30%] h-full items-center justify-start py-8">
              <h3 className="text-[2rem] sm:text-2xl md:text-3xl lg:text-4xl font-cinzel">
                About us
              </h3>
              <hr className="text-gray-200 border-t w-[90%] mx-auto my-6 opacity-50" />
              <div className="flex items-center justify-center w-[80%] mx-auto">
                <p className="font-lato text-2xl sm:text-[1rem] md:text-xl lg:text-2xl text-center lg:text-justify ">
                  At DOW, we believe that every second counts, and choosing the
                  right watch can elevate your style, personality, and special
                  moments.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-[40%] h-full items-center justify-start py-8">
              <h3 className="text-[2rem] sm:text-2xl md:text-3xl lg:text-4xl font-cinzel text-gray-100">
                Features
              </h3>
              <hr className="text-gray-200 border-t w-[90%] mx-auto my-6 opacity-50" />
              <div className="flex gap-5 sm:gap-3 lg:gap-6 text-2xl sm:text-[1.1rem] md:text-xl lg:text-[1.5rem] capitalize font-lato justify-center items-center">
                {[
                  "career",
                  "brand identify",
                  "investment",
                  "agency partner",
                ].map((text) => (
                  <Link
                    key={text}
                    className="relative flex items-center justify-center cursor-pointer group py-1"
                  >
                    {text}
                    <span className="absolute left-0 -bottom-2 w-full h-px pt-1 bg-amber-400/80 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-[30%] h-full items-center justify-start py-8">
              <h3 className="text-[2rem] sm:text-2xl md:text-3xl lg:text-4xl font-cinzel">
                Follow us
              </h3>
              <hr className="text-gray-200 border-t w-[90%] mx-auto my-6 opacity-50" />
              <div className="flex gap-5 text-2xl md:text-[1.9rem] lg:text-[2.2rem] text-gray-300 justify-center items-center">
                <Link className="w-12 h-12 md:w-14 md:h-14 lg:w-17 lg:h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
                  <FaInstagram />
                </Link>

                <Link className="w-12 h-12 md:w-14 md:h-14 lg:w-17 lg:h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
                  <FaFacebookF />
                </Link>

                <Link className="w-12 h-12 md:w-14 md:h-14 lg:w-17 lg:h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
                  <SiX />
                </Link>

                <Link className="w-12 h-12 md:w-14 md:h-14 lg:w-17 lg:h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-25 flex items-center justify-center ">
          <p className="font-montserrat  font-normal text-[1.4rem] tracking-[.05rem]">
            &copy; 2025 Copyrights{"  "}
            <a href="https://github.com/DariushOps">
              <b className="inline-block hover:text-amber-500 transition-all duration-400 scale-100 hover:scale-103 backface-hidden px-1">
                DariushOps
              </b>
            </a>
            {"  "}
            All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}
