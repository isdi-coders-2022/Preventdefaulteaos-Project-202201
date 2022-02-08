import PackOpenerCard from "../PackOpenerCard/PackOpenerCard";
import PackOpenerCardListContainer from "../../jsStyles/packOpenerStyle";

const PackOpenerCardList = ({ arrayOfCards }) => {
  return (
    <PackOpenerCardListContainer>
      {arrayOfCards.map((card) => (
        <PackOpenerCard key={card.id} card={card} />
      ))}
    </PackOpenerCardListContainer>
  );
};

export default PackOpenerCardList;
