import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import HelmetChanger from "./Shared/Helmet/Helmet.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      {/* <HelmetProvider context={HelmetChanger}> */}
      <RouterProvider router={router} />
      {/* </HelmetProvider> */}
    </React.StrictMode>
  </React.StrictMode>
);
