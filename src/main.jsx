import { StrictMode } from "react";

import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";
import BookmarkProvider from "./Components/Context/BookmarkProvider.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BookmarkProvider>
        <RouterProvider router={router} />
      </BookmarkProvider>
    </AuthProvider>
  </StrictMode>,
);
