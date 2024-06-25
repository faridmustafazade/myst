import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
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
        element: <About />,
        path: "about",
      },
      {
        element: <Blog />,
        path: "blog",
      },
      {
        element: <Contact />,
        path: "contact",
      },
      {
        element: <ProductDetail />,
        path: "/work/:title",
      },
      {
        element: <BlogDetails />,
        path: "/blog-posts/:name",
      },
    ],
  },
];
