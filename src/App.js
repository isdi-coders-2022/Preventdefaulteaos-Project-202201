import PackOpenerCardList from "./components/PackOpenerCardList/PackOpenerCardList";
import SearchBar from "./components/SearchBar/SearchBar";
import HeaderComponent from "./components/Header/Header";
import fakeArrayOfCards from "./data/fakedata";
import SearchButtonsContainer from "./components/SearchButtonContainer/SearchButtonContainer";

function App() {
  const BoosterPackAPI = fakeArrayOfCards;
  return (
    <>
      <HeaderComponent />
      <PackOpenerCardList />
      <SearchBar />
      <SearchButtonsContainer />
      <PackOpenerCardList fakeArrayOfCards={BoosterPackAPI} />
      {/* <Button type="onCard" text="More Info" />
      <Button type="filter" text="Kamigawa" />
      <Button type="wood" text="MAKE YOUR CARD" />
      <Button type="create" text="CREATE!" /> */}
    </>
  );
}

export default App;
