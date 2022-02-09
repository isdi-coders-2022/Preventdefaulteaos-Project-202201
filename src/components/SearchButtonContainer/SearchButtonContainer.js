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
      <p>Latest expansions:</p>
      <Link to="/results">
        <Button type="filter" text="Kamigawa" actionOnClick={loadResults} />
      </Link>
      <Button type="filter" text="Innastrad" />
      <Button type="filter" text="Commander" />
    </SearchButtonContainer>
  );
};

export default SearchButtonsContainer;
