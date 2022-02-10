import Button from "../Button/Button";
import PropTypes from "prop-types";

const CardMoreInfo = ({
  infoCard: { imageUrl, name, types, colors, rarity, set, number, artist },
}) => {
  return (
    <CardMoreInfo className="card">
      {<img src={imageUrl} alt={`${name} card`}></img>}
      <section>
        <h3 className="card--name">{name}</h3>
        <p className="card--type">Type: {types}</p>
        <p className="card--color">Color: {colors}</p>
        <p className="card--rarity">Rarity: {rarity}</p>
        <p className="card--set">Set: {set}</p>
        <p className="card--number">Number: {number}</p>
        <p className="card--artist">Artist: {artist}</p>
        <Button type="onCard" text="ADD TO DECK" />
      </section>
    </CardMoreInfo>
  );
};

CardMoreInfo.propTypes = {
  infoCard: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
    colors: PropTypes.array,
    rarity: PropTypes.string,
    set: PropTypes.string,
    number: PropTypes.string,
    artist: PropTypes.string,
  }),
};

export default CardMoreInfo;
