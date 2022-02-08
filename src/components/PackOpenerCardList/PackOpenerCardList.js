import styled from "styled-components";
import PackOpenerCard from "../PackOpenerCard/PackOpenerCard";

const PackOpenerCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 280px;
  height: 400px;
  gap: 10px;
`;

const PackOpenerCardList = ({ fakeArrayOfCards }) => {
  return (
    <PackOpenerCardListContainer>
      {fakeArrayOfCards.map((card) => (
        <PackOpenerCard key={card.id} card={card} />
      ))}
    </PackOpenerCardListContainer>
  );
};

export default PackOpenerCardList;
