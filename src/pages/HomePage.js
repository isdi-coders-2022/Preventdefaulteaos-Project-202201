import PackOpenerContainer from "../components/PackOpenerContainer/PackOpenerContainer";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";

const HomePage = () => {
  return (
    <>
      <SearchContainer />
      <BoosterCardsContextProvider>
        <PackOpenerContainer />
      </BoosterCardsContextProvider>
    </>
  );
};

export default HomePage;
