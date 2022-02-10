import { useCallback, useContext } from "react";
import { loadBoosterCardsAction } from "../store/actions/BoosterCards/actionCreators";
import { loadResultsCardsAction } from "../store/actions/ResultsCards/actionCreators";
import BoosterCardsContext from "../store/contexts/BoosterCardsContext";
import ResultsContext from "../store/contexts/ResultsContext";

const useMagicApi = () => {
  const { dispatch } = useContext(BoosterCardsContext);
  const { dispatch: dispatchResults } = useContext(ResultsContext);

  const apiGetBoosterPackURL =
    "https://api.magicthegathering.io/v1/sets/ktk/booster";

  const apiGetResultsCardsURL = "https://api.magicthegathering.io/v1/cards";

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

  return { loadBoosterCardsAPI, loadResultsCardsAPI };
};

export default useMagicApi;
