import { useContext } from "react";
import styled from "styled-components";
import useMagicApi from "../../hooks/useMagicApi";

import {
  OpenPackButtonContainer,
  OpenPackButtonContainerImage,
} from "../../jsStyles/OpenPackButtonContainer";

import BoosterCardsContext from "../../store/contexts/BoosterCardsContext";
import Button from "../Button/Button";
import PackOpenerCardList from "../PackOpenerCardList/PackOpenerCardList";

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const PackOpenerContainer = () => {
  const { loadBoosterCardsAPI } = useMagicApi();

  const { boosterCards } = useContext(BoosterCardsContext);
  const loadBoosterCards = () => {
    loadBoosterCardsAPI();
  };

  return (
    <>
      <OpenPackButtonContainer>
        <DivButton>
          <Button
            type="create"
            text="OPEN PACK!"
            actionOnClick={loadBoosterCards}
          />
        </DivButton>
        <OpenPackButtonContainerImage src="images/OpenPackButtonContainer-background.png"></OpenPackButtonContainerImage>
      </OpenPackButtonContainer>
      <PackOpenerCardList arrayOfCards={boosterCards} />
    </>
  );
};

export default PackOpenerContainer;
