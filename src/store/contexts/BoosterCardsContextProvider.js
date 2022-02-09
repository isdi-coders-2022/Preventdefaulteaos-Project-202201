import BoosterCardsContext from "./BoosterCardsContext";

const BoosterCardsContextProvider = ({ children }) => {
  return (
    <BoosterCardsContext.Provider>{children}</BoosterCardsContext.Provider>
  );
};

export default BoosterCardsContextProvider;
