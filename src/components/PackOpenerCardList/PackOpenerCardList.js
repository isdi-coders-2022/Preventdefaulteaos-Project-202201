import styled from "styled-components";
import fakeArrayOfCards from "../../data/fakedata";
import PackOpenerCard from "../PackOpenerCard/PackOpenerCard";

const PackOpenerCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;
  height: 400px;
`;

const PackOpenerCardList = () => {
  return (
    <PackOpenerCardListContainer>
      {fakeArrayOfCards.map((card) => (
        <PackOpenerCard key={card.id} card={card} />
      ))}
    </PackOpenerCardListContainer>
  );
};

export default PackOpenerCardList;
