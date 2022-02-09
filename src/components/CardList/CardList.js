import Card from "../Card/Card";
import PropTypes from "prop-types";

const CardList = ({ arrayOfCards }) => {
  return (
    <div>
      {arrayOfCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  arrayOfCards: PropTypes.array.isRequired,
};

export default CardList;
