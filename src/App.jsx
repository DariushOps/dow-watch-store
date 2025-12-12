import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import { shopLoader } from "./utilities/shopLoader";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

// Lazy Components
const HomePage = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/Shop"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactUsPage = lazy(() => import("./pages/ContactUs"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const LogInPage = lazy(() => import("./components/LogIn"));
const SignUpPage = lazy(() => import("./components/SignUp"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage />, loader: shopLoader },
      { path: "about", element: <AboutPage /> },
      { path: "contactUs", element: <ContactUsPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "login", element: <LogInPage /> },
      { path: "signup", element: <SignUpPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
