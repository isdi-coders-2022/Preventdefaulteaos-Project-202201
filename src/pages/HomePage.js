import PackOpenerContainer from "../components/PackOpenerContainer/PackOpenerContainer";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";

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
