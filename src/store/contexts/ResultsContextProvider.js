import { useReducer, useState } from "react";

import resultsCardsReducer from "../reducers/resultsCardsReducer";
import ResultsContext from "./ResultsContext";

const ResultsContextProvider = ({ children }) => {
  const [resultsCards, dispatch] = useReducer(resultsCardsReducer, []);
  const [moreInfoCard, setMoreInfoCard] = useState();

  return (
    <ResultsContext.Provider
      value={{ resultsCards, dispatch, moreInfoCard, setMoreInfoCard }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
