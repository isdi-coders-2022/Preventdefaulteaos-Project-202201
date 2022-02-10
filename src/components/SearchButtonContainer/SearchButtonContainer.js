import { Link } from "react-router-dom";
import useMagicApi from "../../hooks/useMagicApi";

import { SearchButtonContainer } from "../../jsStyles/SearchButtonContainer";
import Button from "../Button/Button";

const SearchButtonsContainer = () => {
  const { loadResultsCardsAPI } = useMagicApi();
  const loadResults = () => {
    loadResultsCardsAPI();
  };

  return (
    <SearchButtonContainer className="searchButtonContainer">
      <p>Show me the cards</p>
      <Link to="/results">
        <Button type="filter" text="Show Cards" actionOnClick={loadResults} />
      </Link>
    </SearchButtonContainer>
  );
};

export default SearchButtonsContainer;
