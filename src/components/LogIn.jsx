import { useState } from "react";
import LoginImg from "../assets/watchPic/login.jpg";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  return (
    <div className="flex w-full h-screen justify-center items-end relative">
      <img
        src={LoginImg}
        alt="login image"
        className="w-full h-full object-cover opacity-65"
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-slate-800/60 w-[90%] sm:w-[40%] md:w-[30%]  h-150 rounded-2xl z-50">
        <div className="flex items-center justify-center font-cinzel text-[3rem] p-8 pb-12 ">
          <h2>Welcome, back!</h2>
        </div>
        <div className="w-full px-10 flex justify-center">
          <form action="" className="w-full flex flex-col">
            <div className="flex flex-col mx-auto gap-2 pb-4">
              <input
                autoComplete="off"
                type="text"
                value={value.username}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, username: e.target.value }))
                }
                required
                id="username"
                name="username"
                className="w-120 sm:w-135 md:160 h-18 px-4 bg-slate-700/40 border-b-2 border-transparent
                           focus:border-b-2 focus:border-amber-600 rounded-2xl  transition-all duration-500 focus:outline-0 placeholder:text-2xl placeholder:font-cinzel font-cormorant text-3xl capitalize"
                placeholder="UserNAme"
              />
              <label
                htmlFor="username"
                className={` text-xl flex justify-start px-4 font-cinzel transition-all duration-400 ${
                  value.username.length > 0
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }
  `}
              >
                username
              </label>
            </div>

            <div className="flex flex-col mx-auto gap-2 pb-4">
              <input
                autoComplete="off"
                type="password"
                value={value.pass}
                onChange={(e) =>
                  setValue((prev) => ({ ...prev, pass: e.target.value }))
                }
                required
                id="pass"
                name="pass"
                className=" w-120 sm:w-135 md:160 h-18 px-4 bg-slate-700/40 border-b-2 border-transparent
                           focus:border-b-2 focus:border-amber-600 rounded-2xl  transition-all duration-500 focus:outline-0 placeholder:text-2xl placeholder:font-cinzel font-cormorant text-3xl capitalize"
                placeholder="Password"
              />
              <label
                htmlFor="pass"
                className={`text-xl flex justify-start px-4 font-cinzel transition-all duration-400 ${
                  value.pass.length > 0
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }  flex justify-start px-4 font-cinzel`}
              >
                password
              </label>
            </div>
            <div className="flex flex-col gap-3 justify-center mx-auto w-120 sm:w-135 md:160">
              <button
                className="flex w-full justify-center hover:bg-emerald-600/90  hover:-translate-y-1 active:translate-y-1 transition-all duration-500  tracking-[.1rem] hover:tracking-[.3rem] bg-emerald-700 h-18 items-center rounded-2xl font-montserrat uppercase text-3xl cursor-pointer"
                type="button"
              >
                login
              </button>
              <div className="flex justify-center items-center  text-[1.4rem] font-lato font-medium">
                <p>
                  Don't have an account?{"  "}
                  <Link to="/signup">
                    <span className="font-semibold capitalize hover:text-amber-500 transition-colors duration-300">
                      {"  "}Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute inset-0  bg-slate-800/30 blur-[100px]"></div>
    </div>
  );
}
