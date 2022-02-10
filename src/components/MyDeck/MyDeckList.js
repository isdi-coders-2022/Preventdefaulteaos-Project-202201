import { H2, CardListComponent } from "../../jsStyles/CardListStyles";
import { useContext, useEffect } from "react";

import useMagicApi from "../../hooks/useMagicApi";

import styled from "styled-components";
import MyDeckCard from "../MyDeckCard/MyDeckCard";
import ResultsContext from "../../store/contexts/ResultsContext";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`;

const MyDeckList = () => {
  const { loadMyDeckCardsAPI } = useMagicApi();
  const { resultsCards } = useContext(ResultsContext);

  useEffect(() => {
    loadMyDeckCardsAPI();
  }, [loadMyDeckCardsAPI]);

  return (
    <>
      <HeaderContainer>
        <H2>MY DECK:</H2>
      </HeaderContainer>

      <CardListComponent>
        {resultsCards.map((card) => (
          <MyDeckCard key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

export default MyDeckList;
