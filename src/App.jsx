import React from "react";
import "./assets/css/App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import AllProducts from "./pages/AllProducts";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { allWatchesUrl,allEarbudsUrl,allLaptopsUrl } from "./constants/product_Url";
import { watchCategories,earbudsCategories,laptopsCategories } from "./constants/product_Categories";
import { watchCoverImage,earbudsCoverImage,laptopsCoverImage } from "./constants/product_CoverImage";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <ScrollToTop />
        <Navbar />
        <Outlet />
        <ToastContainer />
        <Footer />
    </Provider>
  );
};

export const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/allwatches",
        element: <AllProducts productUrl={allWatchesUrl} productCategories={watchCategories} productCoverImage={watchCoverImage}/>,
      },
      {
        path: "/products/allearbuds",
        element: <AllProducts productUrl={allEarbudsUrl} productCategories={earbudsCategories} productCoverImage={earbudsCoverImage}/>,
      },
      {
        path: "/products/alllaptops",
        element: <AllProducts productUrl={allLaptopsUrl} productCategories={laptopsCategories} productCoverImage={laptopsCoverImage}/>,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default AppLayout;
