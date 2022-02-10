import { loadBoosterCardsAction } from "../store/actions/BoosterCards/actionCreators";
import { useCallback, useContext } from "react";
import {
  addCardAction,
  deleteCardAction,
  loadMyDeckCardAction,
  loadResultsCardsAction,
} from "../store/actions/ResultsCards/actionCreators";
import BoosterCardsContext from "../store/contexts/BoosterCardsContext";
import ResultsContext from "../store/contexts/ResultsContext";

const useMagicApi = () => {
  const { dispatch } = useContext(BoosterCardsContext);
  const { dispatch: dispatchResults } = useContext(ResultsContext);

  const apiGetBoosterPackURL = process.env.REACT_APP_URLAPI;

  const apiGetResultsCardsURL = process.env.REACT_APP_URLAPI100CARDS;

  const localApiURL = process.env.REACT_APP_URLAPILOCAL;

  const loadBoosterCardsAPI = async () => {
    const response = await fetch(apiGetBoosterPackURL);
    const boosterCards = await response.json();
    dispatch(loadBoosterCardsAction(boosterCards));
  };

  const loadResultsCardsAPI = useCallback(async () => {
    const response = await fetch(apiGetResultsCardsURL);
    const resultsCards = await response.json();
    dispatchResults(loadResultsCardsAction(resultsCards));
  }, [apiGetResultsCardsURL, dispatchResults]);

  const addCardsAPI = async (card) => {
    const response = await fetch(localApiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
    const newCard = await response.json();
    dispatchResults(addCardAction(newCard));
  };

  const deleteCardAPI = async (id) => {
    const response = await fetch(`${localApiURL}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatchResults(deleteCardAction(id));
    } else {
      throw new Error();
    }
  };
  const loadMyDeckCardsAPI = useCallback(async () => {
    const response = await fetch(localApiURL);
    const resultsCards = await response.json();
    dispatchResults(loadMyDeckCardAction(resultsCards));
  }, [localApiURL, dispatchResults]);

  return {
    loadBoosterCardsAPI,
    loadResultsCardsAPI,
    addCardsAPI,
    deleteCardAPI,
    loadMyDeckCardsAPI,
  };
};

export default useMagicApi;
