import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "virtual:windi.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
