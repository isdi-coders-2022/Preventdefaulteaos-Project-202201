import styled from "styled-components";
import fakeArrayOfCards from "../../data/fakedata";
import {
  OpenPackButtonContainer,
  OpenPackButtonContainerImage,
} from "../../jsStyles/OpenPackButtonContainer";
import Button from "../Button/Button";
import PackOpenerCardList from "../PackOpenerCardList/PackOpenerCardList";

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const PackOpenerContainer = () => {
  const boosterPackAPI = fakeArrayOfCards;

  return (
    <>
      <OpenPackButtonContainer>
        <DivButton>
          <Button type="create" text="OPEN PACK!" />
        </DivButton>
        <OpenPackButtonContainerImage src="images/OpenPackButtonContainer-background.png"></OpenPackButtonContainerImage>
      </OpenPackButtonContainer>
      <PackOpenerCardList arrayOfCards={boosterPackAPI} />;
    </>
  );
};

export default PackOpenerContainer;
