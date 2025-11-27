import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <section className="h-175 w-full">
        <div className=" flex w-full h-150 bg-slate-900/60 flex-col">
          <div className="flex w-full h-[35%] justify-center items-end">
            <Link>
              <h2 className="font-greatVibes text-[4.5rem] font-semibold text-center">
                DOW
              </h2>
            </Link>
          </div>
          <div className="flex w-[90%] mx-auto gap-10">
            <div className="flex flex-col w-1/2 h-[65%] items-center justify-center py-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-cinzel">
                Follow us
              </h3>
              <hr className="text-gray-200 border-t w-[60%] mx-auto my-6 opacity-50" />
            </div>
            <div className="flex flex-col w-1/2 h-[65%] items-center justify-center py-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-cinzel">
                Follow us
              </h3>
              <hr className="text-gray-200 border-t w-[60%] mx-auto my-6 opacity-50" />
              <div className="flex gap-5 text-[2.2rem] text-gray-300">
                <Link className="w-17 h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
                  <FaInstagram />
                </Link>

                <Link className="w-17 h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
                  <FaFacebookF />
                </Link>

                <Link className="w-17 h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
                  <SiX />
                </Link>

                <Link className="w-17 h-17 flex items-center justify-center border border-amber-400/80 rounded-md text-gray-100 hover:bg-amber-300/70 hover:shadow-md hover:shadow-amber-200/30 transition-all duration-300">
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
