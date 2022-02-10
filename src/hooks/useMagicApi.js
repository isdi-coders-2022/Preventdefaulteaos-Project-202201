import { useContext } from "react";
import {
  addCardAction,
  deleteCardAction,
  loadBoosterCardsAction,
} from "../store/actions/BoosterCards/actionCreators";
import { loadResultsCardsAction } from "../store/actions/ResultsCards/actionCreators";
import BoosterCardsContext from "../store/contexts/BoosterCardsContext";
import ResultsContext from "../store/contexts/ResultsContext";

const useMagicApi = () => {
  const { dispatch } = useContext(BoosterCardsContext);
  const { dispatch: dispatchResults } = useContext(ResultsContext);

  const apiGetBoosterPackURL =
    "https://api.magicthegathering.io/v1/sets/ktk/booster";

  const apiGetResultsCardsURL = "https://api.magicthegathering.io/v1/cards";

  const localApiURL = "https://magic-world-api.herokuapp.com/magicWorld/";

  const loadBoosterCardsAPI = async () => {
    const response = await fetch(apiGetBoosterPackURL);
    const boosterCards = await response.json();
    dispatch(loadBoosterCardsAction(boosterCards));
  };

  const loadResultsCardsAPI = async () => {
    const response = await fetch(apiGetResultsCardsURL);
    const boosterCards = await response.json();
    dispatchResults(loadResultsCardsAction(boosterCards));
  };

  const addCardsAPI = async (card) => {
    const response = await fetch(localApiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
    const newCard = await response.json();
    dispatch(addCardAction(newCard));
  };

  const deleteCardAPI = async (id) => {
    const response = await fetch(`${localApiURL}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(deleteCardAction(id));
    } else {
      throw new Error();
    }
  };

  return {
    loadBoosterCardsAPI,
    loadResultsCardsAPI,
    addCardsAPI,
    deleteCardAPI,
  };
};

export default useMagicApi;
