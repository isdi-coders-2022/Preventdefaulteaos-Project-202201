import Button from "../Button/Button";
import PropTypes from "prop-types";
import CardComponent from "../../jsStyles/CardStyles";

const Card = ({ card: { imageUrl, name, types, colors, rarity } }) => {
  return (
    <CardComponent className="card">
      <img src={imageUrl} alt={`${name} card`}></img>
      <section>
        <h3 className="card--name">{name}</h3>
        <p className="card--type">Type: {types}</p>
        <p className="card--color">Color: {colors}</p>
        <p className="card--rarity">Rarity: {rarity}</p>
        <Button type="onCard" text="MORE INFO" />
        <Button type="onCard" text="ADD TO DECK" />
      </section>
    </CardComponent>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
    colors: PropTypes.array,
    rarity: PropTypes.string,
  }),
};

export default Card;
