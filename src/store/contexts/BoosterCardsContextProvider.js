import { useReducer } from "react";
import BoosterCardsContext from "./BoosterCardsContext";

const BoosterCardsContextProvider = ({ children }) => {
  const [boosterCards, dispatch] = useReducer();

  return (
    <BoosterCardsContext.Provider>{children}</BoosterCardsContext.Provider>
  );
};

export default BoosterCardsContextProvider;
