import { useContext } from "react";
import { loadBoosterCardsAction } from "../store/actions/BoosterCards/actionCreators";
import BoosterCardsContext from "../store/contexts/BoosterCardsContext";

const useMagicApi = () => {
  const { dispatch } = useContext(BoosterCardsContext);
  const apiGetBoosterPackURL =
    "https://api.magicthegathering.io/v1/sets/ktk/booster";

  const loadBoosterCardsAPI = async () => {
    const response = await fetch(apiGetBoosterPackURL);
    const boosterCards = await response.json();
    dispatch(loadBoosterCardsAction(boosterCards));
  };

  return { loadBoosterCardsAPI };
};

export default useMagicApi;
