import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../components/home/Footer";
import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const HIDE_LAYOUT = ["/login", "/signup"];

export default function RootLayout() {
  const { pathname } = useLocation();
  const navigation = useNavigation();

  const shouldHide = HIDE_LAYOUT.includes(pathname);
  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {!shouldHide && <Navbar />}
      {!shouldHide && <ScrollProgress />}

      <Outlet />

      {!shouldHide && <Footer />}
    </>
  );
}
