import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      <Outlet />
      <ScrollRestoration />
    </Fragment>
  );
}
