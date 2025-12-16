import { Link, NavLink } from "react-router-dom";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SidebarCart from "./SidebarCart";
import { motion, AnimatePresence } from "framer-motion";
import { SiX } from "react-icons/si";

function CartIcon({ count, onClick }) {
  return (
    <div className="relative scale-110 cursor-pointer" onClick={onClick}>
      <PiShoppingBagOpenFill className="w-7 h-7 text-gray-200 hover:text-amber-500 transition-colors duration-300 " />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-emerald-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export default function Navbar() {
  const [fixed, setFixed] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const total = useSelector((state) => state.cart.totalQuantities);

  function handelShowCart() {
    setShowCart((prev) => !prev);
  }

  useEffect(() => {
    function handleScroll() {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 70;

      if (window.scrollY >= heroHeight - 20) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = `hover:text-amber-400 transition-color duration-500 backface-hidden `;

  return (
    <>
      <nav
        className={`
    fixed top-0 left-0 right-0 z-100 flex justify-between items-center uppercase font-montserrat sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.9rem] lg:px-12 sm:px-3 px-6 
    transition-all duration-500 ease-in-out
    ${
      fixed
        ? "bg-slate-900/70 backdrop-blur-lg shadow-lg py-6 rounded-b-lg"
        : "bg-transparent py-10"
    }
  `}
      >
        <div className="flex items-center justify-center pl-2">
          <Link className="text-[2.5rem] sm:text-[2rem] lg:text-[2.8rem] font-semibold text-amber-500/90 hover:text-amber-400 transition-colors duration-500 font-greatVibes capitalize text-center">
            DOW
          </Link>
        </div>

        <div className=" items-center justify-center gap-5 sm:ml-20 lg:gap-12 lg:ml-32 hidden sm:flex">
          <NavLink className={linkClasses} to="/">
            Home
          </NavLink>
          <NavLink className={linkClasses} to="shop">
            Shop
          </NavLink>
          <NavLink className={linkClasses} to="about">
            About
          </NavLink>
          <NavLink className={linkClasses} to="contactUs">
            Contact Us
          </NavLink>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-2 lg:gap-5 sm:text-lg md:text-xl lg:text-[1.4rem]">
          <CartIcon count={total} onClick={handelShowCart} />
          <Link className="hover:text-amber-400 duration-500" to="login">
            Log In
          </Link>
          <Link className="hover:text-amber-400 duration-500" to="signup">
            Sign Up
          </Link>
        </div>
        <div className="sm:hidden flex justify-center gap-4 items-start ">
          <div className="-mt-1">
            <CartIcon count={total} onClick={handelShowCart} />
          </div>
          <button
            className="flex flex-col gap-1"
            onClick={() => setShowMenu(true)}
          >
            <span className="block w-10 h-1 bg-gray-200"></span>
            <span className="block w-10 h-1 bg-gray-200"></span>
            <span className="block w-10 h-1 bg-gray-200"></span>
          </button>
        </div>
      </nav>
      <AnimatePresence mode="popLayout">
        {showMenu && (
          <div className="relative">
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              layout
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 50,
              }}
              className="fixed w-full flex-col gap-10 text-4xl font-montserrat uppercase h-screen flex items-center justify-center bg-slate-900 z-100"
            >
              <NavLink className={linkClasses} to="/">
                Home
              </NavLink>
              <NavLink className={linkClasses} to="shop">
                Shop
              </NavLink>
              <NavLink className={linkClasses} to="about">
                About
              </NavLink>
              <NavLink className={linkClasses} to="contactUs">
                Contact Us
              </NavLink>
              <div className="absolute flex top-12 right-12 text-3xl">
                <button onClick={() => setShowMenu(false)}>
                  <SiX />{" "}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {showCart && <SidebarCart onClick={handelShowCart} />}
      </AnimatePresence>
    </>
  );
}
