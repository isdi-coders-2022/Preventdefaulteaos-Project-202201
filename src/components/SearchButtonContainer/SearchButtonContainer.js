import { Link } from "react-router-dom";

import { SearchButtonContainer } from "../../jsStyles/SearchButtonContainer";

import Button from "../Button/Button";

const SearchButtonsContainer = () => {
  return (
    <SearchButtonContainer className="searchButtonContainer">
      <p>Latest expansions:</p>
      <Link to="/results">
        <Button type="filter" text="Kamigawa" />
      </Link>
      <Button type="filter" text="Innastrad" />
      <Button type="filter" text="Commander" />
    </SearchButtonContainer>
  );
};

export default SearchButtonsContainer;
