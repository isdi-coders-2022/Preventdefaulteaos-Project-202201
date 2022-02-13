import Button from "../Button/Button";
// import PropTypes from "prop-types";
import useMagicApi from "../../hooks/useMagicApi";
import {
  CreatedCardComponentBlack,
  CreatedCardComponentBlue,
  CreatedCardComponentGreen,
  CreatedCardComponentRed,
  CreatedCardComponentWhite,
} from "../../jsStyles/CreatedCard";
import { Link } from "react-router-dom";

const CreatedCard = ({ card: { imageUrl, name, types, color, text, id } }) => {
  const { deleteCardAPI } = useMagicApi();

  const cardColor = color ? color.toLowerCase() : null;
  const deleteCreatedCard = () => {
    deleteCardAPI(id);
  };

  return (
    <>
      {cardColor === "red" && (
        <CreatedCardComponentRed className="red">
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
            <Link to={`/editcreatedcard/${id}`}>
              <Button className="edit" type="onCard" text="EDIT" />
            </Link>
            <Button
              type="onCard"
              text="DELETE"
              actionOnClick={deleteCreatedCard}
            />
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
            <Link to={`/editcreatedcard/${id}`}>
              <Button className="edit" type="onCard" text="EDIT" />
            </Link>
            <Button
              type="onCard"
              text="DELETE"
              actionOnClick={deleteCreatedCard}
            />
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
            <Link to={`/editcreatedcard/${id}`}>
              <Button className="edit" type="onCard" text="EDIT" />
            </Link>{" "}
            <Button
              type="onCard"
              text="DELETE"
              actionOnClick={deleteCreatedCard}
            />
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
            <Link to={`/editcreatedcard/${id}`}>
              <Button className="edit" type="onCard" text="EDIT" />
            </Link>
            <Button
              type="onCard"
              text="DELETE"
              actionOnClick={deleteCreatedCard}
            />
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
            <Link to={`/editcreatedcard/${id}`}>
              <Button className="edit" type="onCard" text="EDIT" />
            </Link>
            <Button
              type="onCard"
              text="DELETE"
              actionOnClick={deleteCreatedCard}
            />
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

export default CreatedCard;
