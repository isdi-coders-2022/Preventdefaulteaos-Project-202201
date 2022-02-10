import Button from "../Button/Button";
import PropTypes from "prop-types";
import CardComponent from "../../jsStyles/CardStyles";
import useMagicApi from "../../hooks/useMagicApi";
import { useState } from "react";

const Card = ({ card: { imageUrl, name, types, colors, rarity } }) => {
  const { addCardsAPI } = useMagicApi();
  const [isAdded, setIsAdded] = useState("");

  const addCards = () => {
    setIsAdded("added");
    addCardsAPI({ imageUrl, name, types, colors, rarity });
  };

  return (
    <CardComponent className="card">
      <img src={imageUrl} alt={`${name} card`}></img>
      <section>
        <h3 className="card--name">{name}</h3>
        <p className="card--type">Type: {types}</p>
        <p className="card--color">Color: {colors}</p>
        <p className="card--rarity">Rarity: {rarity}</p>
        <Button type="onCard" text="MORE INFO" />
        <Button
          className={isAdded}
          type="onCard"
          text="ADD TO DECK"
          actionOnClick={addCards}
        />
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
