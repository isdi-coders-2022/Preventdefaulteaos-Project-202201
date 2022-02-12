import { H2, CardListComponent } from "../../jsStyles/CardListStyles";

import styled from "styled-components";

import CreatedCard from "../CreatedCard/CreatedCard";
import fakedata from "../../fakedata/fakedata";
import { useContext } from "react";
import ResultsContext from "../../store/contexts/ResultsContext";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`;
const CreatedCardList = () => {
  const { resultsCards } = useContext(ResultsContext);
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
