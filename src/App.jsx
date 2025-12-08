import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import { shopLoader } from "./utilities/shopLoader";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        loader: shopLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
