import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="NAME, SETS, TYPES" />
      </div>
    </>
  );
};

export default SearchBar;
