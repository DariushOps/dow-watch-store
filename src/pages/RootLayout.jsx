import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/home/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";

const HIDE_LAYOUT = ["/login", "/signup"];

export default function RootLayout() {
  const { pathname } = useLocation();
  const shouldHide = HIDE_LAYOUT.includes(pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      {!shouldHide && <ScrollProgress />}
      <Outlet />
      {!shouldHide && <Footer />}
    </>
  );
}
