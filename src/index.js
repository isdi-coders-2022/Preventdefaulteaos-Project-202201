import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import ResultsContextProvider from "./store/contexts/ResultsContextProvider";
import BoosterCardsContextProvider from "./store/contexts/BoosterCardsContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BoosterCardsContextProvider>
        <ResultsContextProvider>
          <App />
        </ResultsContextProvider>
      </BoosterCardsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
