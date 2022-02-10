import { useReducer } from "react";

import resultsCardsReducer from "../reducers/resultsCardsReducer";
import ResultsContext from "./ResultsContext";

const ResultsContextProvider = ({ children }) => {
  const [resultsCards, dispatch] = useReducer(resultsCardsReducer, []);

  return (
    <ResultsContext.Provider value={{ resultsCards, dispatch }}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
