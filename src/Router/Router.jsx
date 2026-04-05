import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Write from "../Pages/Write";
import Blogs from "../Pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,

    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/blogs"),
        Component: Home,
      },
      {
        path: "/write",
        Component: Write,
      },
      {
        path: "/blogs",
        loader: async () => {
          const response = await fetch("http://localhost:3000/blogs");
          console.log("Response status:", response.status); // 200 expected
          const data = await response.json();
          console.log("Loader data:", data); // check
          return data;
        },
        Component: Blogs,
      },
    ],
  },
]);
