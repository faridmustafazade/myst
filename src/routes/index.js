import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import ProductDetail from "../pages/ProductDetail";

export const ROUTER = [
  {
    element: <MainRoot />,
    path: "",
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <ProductDetail />,
        path: "/work/:title",
      },
    ],
  },
];
