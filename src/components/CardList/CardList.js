import Card from "../Card/Card";
import PropTypes from "prop-types";
import CardListComponent from "../../jsStyles/CardListStyles";

const CardList = ({ arrayOfCards }) => {
  return (
    <>
      <CardListComponent>
        <h2>RESULTS:</h2>
        {arrayOfCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

CardList.propTypes = {
  arrayOfCards: PropTypes.array.isRequired,
};

export default CardList;
