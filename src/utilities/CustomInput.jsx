import { useState } from "react";

export default function CustomInput({
  formInput,
  type = "text",
  move,
  bg,
  ...props
}) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative mt-12">
      <input
        autoComplete="off"
        id={formInput}
        type={type}
        name={formInput}
        placeholder=" "
        defaultValue={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
                w-270 h-17 px-5
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
                    ? `${move || "-top-4 left-4"} text-[1.3rem]
                       ${bg || "bg-slate-950"}
                       px-1 text-amber-400`
                    : "top-5  left-4  text-[1.5rem]"
                }
              `}
      >
        {formInput}
      </label>
    </div>
  );
}
