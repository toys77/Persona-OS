import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { registerServiceWorker } from "./registerServiceWorker";
import "./styles/global.css";

const savedTheme = window.localStorage.getItem("persona-os:theme");
document.documentElement.dataset.theme = savedTheme || "persona";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

registerServiceWorker();
