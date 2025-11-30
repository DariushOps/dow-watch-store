import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Outlet />
      <Footer />
    </>
  );
}
