import { Link } from "react-router-dom";

import { SearchButtonContainer } from "../../jsStyles/SearchButtonContainer";

import Button from "../Button/Button";

const SearchButtonsContainer = () => {
  return (
    <SearchButtonContainer className="searchButtonContainer">
      <p>Show me the cards</p>
      <Link to="/results">

        <Button type="filter" text="Show Cards"  />

      </Link>
    </SearchButtonContainer>
  );
};

export default SearchButtonsContainer;
