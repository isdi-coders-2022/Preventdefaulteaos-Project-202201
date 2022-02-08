import PackOpenerCard from "../PackOpenerCard/PackOpenerCard";
import PackOpenerCardListContainer from "../../jsStyles/packOpenerStyle";

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
