import { useState } from "react";
import LoginImg from "../assets/watchPic/login.jpg";

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
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-slate-800/40 w-[35%] h-150 rounded-2xl z-50">
        <div className="flex items-center justify-center font-cinzel text-[4rem] p-8 pb-12 ">
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
                className=" w-175 h-18 px-4 bg-slate-700/40 border-b-2 border-transparent
                           focus:border-b-2 focus:border-amber-600 rounded-sm  transition-all duration-500 focus:outline-0 placeholder:text-2xl placeholder:font-cinzel font-cormorant text-3xl capitalize"
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
                className=" w-175 h-18 px-4 bg-slate-700/40 border-b-2 border-transparent
                           focus:border-b-2 focus:border-amber-600 rounded-sm  transition-all duration-500 focus:outline-0 placeholder:text-2xl placeholder:font-cinzel font-cormorant text-3xl capitalize"
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
            <div className="flex justify-center mx-auto gap-10 w-175">
              <button className="flex w-85 justify-center hover:bg-amber-600  hover:-translate-y-1 active:translate-y-1 transition-all duration-500 border-2 tracking-[.1rem] hover:tracking-[.3rem] border-amber-600  h-18 items-center rounded-md font-montserrat uppercase text-3xl cursor-pointer">
                signup
              </button>
              <button className="flex w-85 justify-center hover:bg-emerald-700  hover:-translate-y-1 active:translate-y-1 transition-all duration-500  tracking-[.1rem] hover:tracking-[.3rem] bg-emerald-800 h-18 items-center rounded-md font-montserrat uppercase text-3xl cursor-pointer">
                login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute inset-0  bg-slate-800/30 blur-[100px]"></div>
    </div>
  );
}
