import {
  ButtonCreate,
  ButtonFilter,
  ButtonOnCard,
  ButtonWood,
} from "../../jsStyles/buttonStyles";

const ButtonComponent = ({ className, actionOnClick, text, type }) => {
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
export default ButtonComponent;
