import Button from "../Button/Button";
import PropTypes from "prop-types";
import CardComponent from "../../jsStyles/CardStyles";
import useMagicApi from "../../hooks/useMagicApi";

import { Link } from "react-router-dom";
import { useState } from "react";

import CardMoreInfo from "../CardMoreInfo/CardMoreInfo";
const Card = ({ card: { imageUrl, name, types, colors, rarity, id } }) => {







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

        <Link to={`/moreinfo/${id}`}>
          <Button type="onCard" text="MORE INFO" />
        </Link>
        
      
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
