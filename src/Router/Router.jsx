import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,

    children: [
      {
        index: true,
        Component: App,
      },
      //   {
      //     path: "/about",
      //     Component: About,
      //   },
    ],
  },
]);
