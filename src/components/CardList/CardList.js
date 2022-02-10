import Card from "../Card/Card";

import { H2, CardListComponent } from "../../jsStyles/CardListStyles";
import { useContext, useEffect } from "react";
import ResultsContext from "../../store/contexts/ResultsContext";
import useMagicApi from "../../hooks/useMagicApi";
import Button from "../Button/Button";
import {
  filterBlackResultsCardsAction,
  filterBlueResultsCardsAction,
  filterWhiteResultsCardsAction,
} from "../../store/actions/ResultsCards/actionCreators";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`;

const CardList = () => {
  const { resultsCards, dispatch: dispatchResults } =
    useContext(ResultsContext);
  const { loadResultsCardsAPI } = useMagicApi();

  useEffect(() => {
    loadResultsCardsAPI();
  }, [loadResultsCardsAPI]);

  const cardListWithImages = resultsCards.filter((card) =>
    card.hasOwnProperty("imageUrl")
  );


  const filterBlue = () => {
    dispatchResults(filterBlueResultsCardsAction(cardListWithImages));
  };

  const filterWhite = () => {
    dispatchResults(filterWhiteResultsCardsAction(cardListWithImages));
  };
  const filterBlack = () => {
    dispatchResults(filterBlackResultsCardsAction(cardListWithImages));
  };

  return (
    <>
      <HeaderContainer>
        <H2>RESULTS:</H2>
      </HeaderContainer>
      <ButtonContainer>
        <Button
          text="Blue Cards"
          actionOnClick={filterBlue}
          type="filter"
        ></Button>
        <Button
          text="White Cards"
          actionOnClick={filterWhite}
          type="filter"
        ></Button>
        <Button
          text="Black Cards"
          actionOnClick={filterBlack}
          type="filter"
        ></Button>
      </ButtonContainer>
      <CardListComponent>
        {cardListWithImages.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

export default CardList;
