import { H2, CardListComponent } from "../../jsStyles/CardListStyles";

import styled from "styled-components";

import CreatedCard from "../CreatedCard/CreatedCard";

import { useContext, useEffect } from "react";
import ResultsContext from "../../store/contexts/ResultsContext";
import useMagicApi from "../../hooks/useMagicApi";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  & h2 {
    color: #fab827;
  }
  @media (min-width: 600px) {
    margin-top: -50px;
  }
`;

const CreatedCardList = () => {
  const { resultsCards } = useContext(ResultsContext);
  const { loadMyDeckCardsAPI } = useMagicApi();

  useEffect(() => {
    loadMyDeckCardsAPI();
  }, [loadMyDeckCardsAPI]);

  const resultsCardsCreated = resultsCards.filter((card) =>
    card.hasOwnProperty("created")
  );

  return (
    <>
      <HeaderContainer>
        <H2>CREATED CARDS:</H2>
      </HeaderContainer>

      <CardListComponent>
        {resultsCardsCreated.map((card) => (
          <CreatedCard key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

export default CreatedCardList;
