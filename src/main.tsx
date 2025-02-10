import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { RouterProvider } from "react-router-dom";

import { router } from "./presentation/router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
