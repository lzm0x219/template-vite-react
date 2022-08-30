import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";
import App from "@/App";

const Index = lazy(() => import("@/routes/index"));
const Notfound = lazy(() => import("@/routes/404"));

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
    // TODO: errorElement
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Index />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <Notfound />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
