import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBarContainer } from "../../jsStyles/SearchBarStyle";

const SearchBar = () => {
  return (
    <>
      <SearchBarContainer className="searchBarContainer">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input type="text" placeholder="NAME, SETS, TYPES" />
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
