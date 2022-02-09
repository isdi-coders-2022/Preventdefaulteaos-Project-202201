import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import BoosterCardsContextProvider from "./store/contexts/BoosterCardsContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BoosterCardsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BoosterCardsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
