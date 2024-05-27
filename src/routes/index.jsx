import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/HomePage";
import ProductDetail from "../components/products/ProductDetail";
import ProductDetailsLayout from "../layouts/ProductDetailsLayout";
import BasketList from "../components/basket/BasketList";
import SiparisVer from "../components/siparirver/SiparisVer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <BasketList />,
      },
      {
        path: "/siparis-ver",
        element: <SiparisVer />,
      },

      {
        path: "/product-detail/:id",
        element: <ProductDetailsLayout />,
        children: [
          {
            index: true,
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
