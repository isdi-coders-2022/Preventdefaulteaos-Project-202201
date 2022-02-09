import BoosterCardsContext from "./BoosterCardsContext";

const BoosterCardsContextProvider = ({ children }) => {
  return (
    <BoosterCardsContext.Provider value={"hola"}>
      {children}
    </BoosterCardsContext.Provider>
  );
};

export default BoosterCardsContextProvider;
