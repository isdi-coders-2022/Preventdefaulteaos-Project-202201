import PackOpenerCardList from "./components/PackOpenerCardList/PackOpenerCardList";

import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import fakeArrayOfCards from "./data/fakedata";

function App() {
  const BoosterPackAPI = fakeArrayOfCards;
  return (
    <>
      <Button type="wood" text="uwu" />
      <SearchBar />
      <PackOpenerCardList fakeArrayOfCards={BoosterPackAPI} />
      {/* <Button type="onCard" text="More Info" />
      <Button type="filter" text="Kamigawa" />
      <Button type="wood" text="MAKE YOUR CARD" />
      <Button type="create" text="CREATE!" /> */}
    </>
  );
}

export default App;
