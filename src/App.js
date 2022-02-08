import PackOpenerCardList from "./components/PackOpenerCardList/PackOpenerCardList";
import HeaderComponent from "./components/Header/Header";
import fakeArrayOfCards from "./data/fakedata";
import SearchContainer from "./components/SearchContainer/SearchContainer";

function App() {
  const boosterPackAPI = fakeArrayOfCards;

  return (
    <>
      <HeaderComponent />
      <SearchContainer />
      <PackOpenerCardList arrayOfCards={boosterPackAPI} />
      {/* <Button type="onCard" text="More Info" />
      <Button type="filter" text="Kamigawa" />
      <Button type="wood" text="MAKE YOUR CARD" />
      <Button type="create" text="CREATE!" /> */}
    </>
  );
}

export default App;
