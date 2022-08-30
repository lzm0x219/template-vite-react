import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import useDebugRender from "tilg";

export default function App() {
  useDebugRender();

  return (
    <Fragment>
      <Outlet />
      <ScrollRestoration />
    </Fragment>
  );
}
