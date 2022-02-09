import { useReducer } from "react";

import boosterCardsReducer from "../reducers/boosterCardsReducer";
import ResultsContext from "./ResultsContext";

const ResultsContextProvider = ({ children }) => {
  const [boosterCards, dispatch] = useReducer(boosterCardsReducer, []);

  return (
    <ResultsContext.Provider value={{ boosterCards, dispatch }}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
