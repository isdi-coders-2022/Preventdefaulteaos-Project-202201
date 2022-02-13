import { useReducer } from "react";
import editCreatedCardReducer from "../reducers/editCreatedCardReducer";

import resultsCardsReducer from "../reducers/resultsCardsReducer";
import ResultsContext from "./ResultsContext";

const ResultsContextProvider = ({ children }) => {
  const [resultsCards, dispatch] = useReducer(resultsCardsReducer, []);
  const [cardToEditInfo, dispatchEditCard] = useReducer(
    editCreatedCardReducer,
    {}
  );

  return (
    <ResultsContext.Provider
      value={{ resultsCards, dispatch, cardToEditInfo, dispatchEditCard }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
