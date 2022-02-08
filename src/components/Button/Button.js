import {
  ButtonCreate,
  ButtonFilter,
  ButtonOnCard,
  ButtonWood,
} from "../../jsStyles/buttonStyles";
import PropTypes from "prop-types";

const Button = ({ className, actionOnClick, text, type }) => {
  return (
    <>
      {type === "wood" && (
        <ButtonWood className={className} onClick={actionOnClick}>
          {text}
        </ButtonWood>
      )}
      {type === "onCard" && (
        <ButtonOnCard className={className} onClick={actionOnClick}>
          {text}
        </ButtonOnCard>
      )}
      {type === "filter" && (
        <ButtonFilter className={className} onClick={actionOnClick}>
          {text}
        </ButtonFilter>
      )}
      {type === "create" && (
        <ButtonCreate className={className} onClick={actionOnClick}>
          {text}
        </ButtonCreate>
      )}
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  actionOnClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
