import styled from "styled-components";
import PropTypes from "prop-types";

const CardImage = styled.img`
  height: 160px;
  width: 120px;
  border: 1px solid black;
`;

const PackOpenerCard = ({ card }) => {
  return <CardImage src={card.imageUrl} alt={card.name} />;
};

export default PackOpenerCard;

PackOpenerCard.propTypes = {
  card: PropTypes.object.isRequired,
};
