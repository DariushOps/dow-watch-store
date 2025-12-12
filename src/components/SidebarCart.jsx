import CartItems from "./CartItems";
import { motion } from "framer-motion";

export default function SidebarCart({ onClick }) {
  return (
    <section>
      <motion.div
        key="sidebar"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        layout
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 50,
        }}
        className="fixed top-0 right-0 bottom-0 bg-slate-800 w-[20%] z-100"
      >
        <div className="absolute top-10 right-105 text-white z-100 pb-40">
          <button
            onClick={onClick}
            className="relative w-8 h-2 flex items-center justify-center text-4xl cursor-pointer group"
          >
            <span className="absolute w-8 h-1 bg-white  group-hover:opacity-0 mb-4 transition-all duration-200 origin-center"></span>
            <span className="absolute w-8 h-1 bg-white group-hover:bg-red-500  group-hover:rotate-45 transition-all duration-200  origin-center"></span>
            <span className="absolute w-8 h-1 bg-white group-hover:bg-red-500  group-hover:-rotate-45 transition-all duration-200  origin-center"></span>
            <span className="absolute w-8 h-1 bg-white  group-hover:opacity-0  mt-4 transition-all duration-200  origin-center"></span>
          </button>
        </div>
        <div
          className="flex overflow-y-auto"
          style={{ marginTop: "7rem", height: "calc(100% - 7rem)" }}
        >
          <CartItems onClick={onClick} />
        </div>
      </motion.div>
    </section>
  );
}
