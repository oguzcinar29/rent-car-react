import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import CarContextProvider from "./components/Context/CarContext";

ReactDOM.render(
  <CarContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CarContextProvider>,
  document.getElementById("root")
);
