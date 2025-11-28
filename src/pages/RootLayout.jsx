import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function RootLayout() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <Outlet />
      <Footer />
    </>
  );
}
