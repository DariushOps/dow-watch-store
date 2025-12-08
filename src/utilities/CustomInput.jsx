import { useState } from "react";

export default function CustomInput({ formInput, type = "text", ...props }) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative w-[80%] mt-12">
      <input
        id={formInput}
        type={type}
        name={formInput}
        placeholder=" "
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
                w-240 h-18 px-5
                border border-amber-50 rounded-sm
                bg-transparent
                text-white text-3xl font-medium font-cormorant capitalize
                focus:outline-none
                focus:border-amber-300
              `}
        required
        {...props}
      />

      <label
        htmlFor={formInput}
        className={`
                absolute
                text-amber-50 font-cinzel
                pointer-events-none
                transition-all duration-300

                ${
                  isFocused || input
                    ? "-top-4 left-4 text-[1.4rem] bg-slate-950 px-1 text-amber-400"
                    : "top-4  left-6  text-[1.8rem]"
                }
              `}
      >
        {formInput}
      </label>
    </div>
  );
}
