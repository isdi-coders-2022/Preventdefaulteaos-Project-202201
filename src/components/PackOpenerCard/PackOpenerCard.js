import styled from "styled-components";

const CardImage = styled.img`
  height: 160px;
  width: 120px;
  border: 1px solid black;
`;

const PackOpenerCard = ({ card }) => {
  return <CardImage src={card.imageUrl} alt={card.name} />;
};

export default PackOpenerCard;
