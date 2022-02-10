import Card from "../Card/Card";

import { H2, CardListComponent } from "../../jsStyles/CardListStyles";
import { useContext, useEffect } from "react";
import ResultsContext from "../../store/contexts/ResultsContext";
import useMagicApi from "../../hooks/useMagicApi";

import styled from "styled-components";
import BoosterCardsContext from "../../store/contexts/BoosterCardsContext";
import MyDeckCard from "../MyDeckCard/MyDeckCard";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`;

const MyDeckList = () => {
  const { loadMyDeckCardsAPI } = useMagicApi();
  const { boosterCards } = useContext(BoosterCardsContext);

  useEffect(() => {
    loadMyDeckCardsAPI();
  }, [loadMyDeckCardsAPI]);

  return (
    <>
      <HeaderContainer>
        <H2>MY DECK:</H2>
      </HeaderContainer>

      <CardListComponent>
        {boosterCards.map((card) => (
          <MyDeckCard key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

export default MyDeckList;
