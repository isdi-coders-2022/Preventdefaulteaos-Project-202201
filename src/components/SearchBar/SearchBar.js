import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBarContainer } from "../../jsStyles/SearchBarStyle";

const SearchBar = () => {
  return (
    <>
      <SearchBarContainer className="searchBarContainer">
        <label htmlFor="searchBar">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </label>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="NAME, SETS, TYPES"
        />
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
