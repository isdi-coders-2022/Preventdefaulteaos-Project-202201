import { SearchButtonContainer } from "../../jsStyles/SearchButtonContainer";
import Button from "../Button/Button";

const SearchButtonsContainer = () => {
  return (
    <SearchButtonContainer className="searchButtonContainer">
      <p>Latest expansions:</p>
      <Button type="filter" text="Kamigawa" />
      <Button type="filter" text="Innastrad" />
      <Button type="filter" text="Commander" />
    </SearchButtonContainer>
  );
};

export default SearchButtonsContainer;
