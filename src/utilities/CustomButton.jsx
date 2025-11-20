import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CustomButton() {
  return (
    <Link
      to="shop"
      className="flex absolute bottom-20 left-1/2 -translate-x-1/2 justify-center items-center w-70 opacity-0 translate-y-15 transition-all duration-600
      group-hover:opacity-100 group-hover:translate-y-0"
    >
      <motion.span
        className=" flex  mx-auto justify-center items-center w-70 h-18 bg-amber-400/70 transition-colors duration-500  border-2 border-amber-400/80 text-gray-200 text-[1.8rem] font-lato font-semibold"
        whileHover={{
          borderRadius: "10px",
          color: "#e5e7eb",
          backgroundColor: "#f59e0b80",
          boxShadow: "0 0 12px rgba(255,255,255,0.15)",
        }}
        whileTap={{ scale: 0.97 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 100,
        }}
        type="button"
      >
        Let's go
      </motion.span>
    </Link>
  );
}
