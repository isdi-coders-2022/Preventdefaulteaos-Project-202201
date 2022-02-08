import PackOpenerCard from "../PackOpenerCard/PackOpenerCard";
import PackOpenerCardListContainer from "../../jsStyles/packOpenerStyle";
import PropTypes from "prop-types";

const PackOpenerCardList = ({ arrayOfCards }) => {
  return (
    <PackOpenerCardListContainer>
      {arrayOfCards.map((card) => (
        <PackOpenerCard key={card.id} card={card} />
      ))}
    </PackOpenerCardListContainer>
  );
};

PackOpenerCardList.propTypes = {
  arrayOfCards: PropTypes.array,
};

export default PackOpenerCardList;
