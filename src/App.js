import HeaderComponent from "./components/Header/Header";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import PackOpenerContainer from "./components/PackOpenerContainer/PackOpenerContainer";

function App() {
  return (
    <>
      <HeaderComponent />
      <SearchContainer />

      <PackOpenerContainer />
      {/* <Button type="onCard" text="More Info" />
      <Button type="filter" text="Kamigawa" />
      <Button type="wood" text="MAKE YOUR CARD" />
      <Button type="create" text="CREATE!" /> */}
    </>
  );
}

export default App;
