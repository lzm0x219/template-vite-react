import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";
import "./global";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
  </StrictMode>
);
