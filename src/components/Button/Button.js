import { ButtonWood } from "../../jsStyles/buttonStyles";

const ButtonComponent = ({ className, actionOnClick, text, type }) => {
  return (
    <>
      {type === "wood" && (
        <ButtonWood className={className} onClick={actionOnClick}>
          {text}
        </ButtonWood>
      )}
    </>
  );
};
export default ButtonComponent;
