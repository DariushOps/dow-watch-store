import { Link, NavLink } from "react-router-dom";
import { PiShoppingBagOpenFill } from "react-icons/pi";

function CartIcon({ count }) {
  return (
    <div className="relative">
      <PiShoppingBagOpenFill className="w-7 h-7 text-gray-200" />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-emerald-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export default function Navbar() {
  const linkClasses = `hover:text-amber-400/90 transition-color duration-500 backface-hidden `;
  return (
    <nav className="flex fixed top-0 left-0 right-0 text-3xl font-montserrat font-semibold justify-between py-16 px-12 z-30 bg-transparent uppercase">
      <div className="flex items-center justify-center  pl-2 text-5xl animate-fadeIn ">
        <Link className="text-3xl font-semibold text-amber-400 font-dancing">
          DariushOps
        </Link>
      </div>
      <div className="flex items-center justify-center gap-16  animate-fadeIn ml-28">
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
      <div className="flex items-center justify-center  gap-5 animate-fadeIn">
        <CartIcon count={2} />
        <Link className="hover:text-amber-400/90 duration-500" to="login">
          Log In
        </Link>
        <Link className="hover:text-amber-400/90 duration-500" to="signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
