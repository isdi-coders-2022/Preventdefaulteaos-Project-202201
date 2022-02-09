import { useContext, useEffect } from "react";
import styled from "styled-components";
import useMagicApi from "../../hooks/useMagicApi";

import {
  OpenPackButtonContainer,
  OpenPackButtonContainerImage,
} from "../../jsStyles/OpenPackButtonContainer";
import { loadBoosterCardsAction } from "../../store/actions/BoosterCards/actionCreators";
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

  const arrayFromApi = [
    {
      id: 1,
      name: "Overtaker",
      imageUrl:
        "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
    },
    {
      id: 2,
      name: "Heart-Piercer Bow",
      imageUrl:
        "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
    },
  ];

  const { boosterCards } = useContext(BoosterCardsContext);
  const cargarCartas = async () => {
    await loadBoosterCardsAPI();
  };

  // const openBooster = () => {
  //   dispatch(loadBoosterCardsAction(arrayFromApi));
  // };
  return (
    <>
      <OpenPackButtonContainer>
        <DivButton>
          <Button
            type="create"
            text="OPEN PACK!"
            actionOnClick={cargarCartas}
          />
        </DivButton>
        <OpenPackButtonContainerImage src="images/OpenPackButtonContainer-background.png"></OpenPackButtonContainerImage>
      </OpenPackButtonContainer>
      <PackOpenerCardList arrayOfCards={boosterCards} />;
    </>
  );
};

export default PackOpenerContainer;
