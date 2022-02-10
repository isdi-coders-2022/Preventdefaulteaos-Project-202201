import Card from "../Card/Card";

import { H2, CardListComponent } from "../../jsStyles/CardListStyles";
import { useContext, useEffect } from "react";
import ResultsContext from "../../store/contexts/ResultsContext";
import useMagicApi from "../../hooks/useMagicApi";

import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
`;

const MyDeckList = () => {
  return (
    <>
      <HeaderContainer>
        <H2>RESULTS:</H2>
      </HeaderContainer>

      <CardListComponent>
        {cardListWithImages.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

export default MyDeckList;
