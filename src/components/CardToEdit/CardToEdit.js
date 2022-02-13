// import PropTypes from "prop-types";

import {
  CreatedCardComponentBlack,
  CreatedCardComponentBlue,
  CreatedCardComponentGreen,
  CreatedCardComponentRed,
  CreatedCardComponentWhite,
} from "../../jsStyles/CreatedCard";

const CardToEdit = ({ card: { imageUrl, name, types, color, text, id } }) => {
  const cardColor = color ? color.toLowerCase() : null;

  return (
    <>
      {cardColor === "red" && (
        <CreatedCardComponentRed>
          <img
            src={imageUrl}
            alt={`${name} card`}
            width={"165"}
            height={"130"}
          ></img>
          <section>
            <h3 className="card--name">{name}</h3>
            <p className="card--type">{types}</p>
            <p className="card--text">{text}</p>
          </section>
        </CreatedCardComponentRed>
      )}
      {cardColor === "blue" && (
        <CreatedCardComponentBlue>
          <img
            src={imageUrl}
            alt={`${name} card`}
            width={"165"}
            height={"130"}
          ></img>
          <section>
            <h3 className="card--name">{name}</h3>
            <p className="card--type">{types}</p>
            <p className="card--text">{text}</p>
          </section>
        </CreatedCardComponentBlue>
      )}
      {cardColor === "black" && (
        <CreatedCardComponentBlack>
          <img
            src={imageUrl}
            alt={`${name} card`}
            width={"165"}
            height={"130"}
          ></img>
          <section>
            <h3 className="card--name">{name}</h3>
            <p className="card--type">{types}</p>
            <p className="card--text">{text}</p>
          </section>
        </CreatedCardComponentBlack>
      )}
      {cardColor === "green" && (
        <CreatedCardComponentGreen>
          <img
            src={imageUrl}
            alt={`${name} card`}
            width={"165"}
            height={"130"}
          ></img>
          <section>
            <h3 className="card--name">{name}</h3>
            <p className="card--type">{types}</p>
            <p className="card--text">{text}</p>
          </section>
        </CreatedCardComponentGreen>
      )}
      {cardColor === "white" && (
        <CreatedCardComponentWhite>
          <img
            src={imageUrl}
            alt={`${name} card`}
            width={"165"}
            height={"130"}
          ></img>
          <section>
            <h3 className="card--name">{name}</h3>
            <p className="card--type">{types}</p>
            <p className="card--text">{text}</p>
          </section>
        </CreatedCardComponentWhite>
      )}
    </>
  );
};

// CreatedCard.propTypes = {
//   card: PropTypes.shape({
//     imageUrl: PropTypes.string,
//     name: PropTypes.string,
//     types: PropTypes.array,

//   }),

export default CardToEdit;
