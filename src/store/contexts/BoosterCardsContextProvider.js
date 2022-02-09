import { useReducer } from "react";
import BoosterCardsContext from "./BoosterCardsContext";
import boosterCardsReducer from "../reducers/boosterCardsReducer";

const BoosterCardsContextProvider = ({ children }) => {
  const [boosterCards, dispatch] = useReducer(boosterCardsReducer, []);

  return (
    <BoosterCardsContext.Provider value={{ boosterCards, dispatch }}>
      {children}
    </BoosterCardsContext.Provider>
  );
};

export default BoosterCardsContextProvider;
