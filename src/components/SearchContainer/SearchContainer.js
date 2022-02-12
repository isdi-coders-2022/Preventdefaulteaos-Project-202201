import { SearchContainerStyle } from "../../jsStyles/SearchContainer";
import SearchBar from "../SearchBar/SearchBar";
import SearchButtonsContainer from "../SearchButtonsContainer/SearchButtonsContainer";

const SearchContainer = () => {
  return (
    <>
      <SearchContainerStyle>
        <SearchBar />
        <SearchButtonsContainer />
      </SearchContainerStyle>
    </>
  );
};
export default SearchContainer;
