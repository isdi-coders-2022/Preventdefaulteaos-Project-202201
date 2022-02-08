import PackOpenerCardList from "./components/PackOpenerCardList/PackOpenerCardList";
import SearchBar from "./components/SearchBar/SearchBar";
import HeaderComponent from "./components/Header/Header";

function App() {
  return (
    <>
      <HeaderComponent />
      <PackOpenerCardList />
      <SearchBar />
      {/* <Button type="onCard" text="More Info" />
      <Button type="filter" text="Kamigawa" />
      <Button type="wood" text="MAKE YOUR CARD" />
      <Button type="create" text="CREATE!" /> */}
    </>
  );
}

export default App;
