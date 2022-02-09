import actionsTypes from "./actionTypes";

export const loadResultsCardsAction = (resultsCards) => ({
  type: actionsTypes.loadResultsCards,
  resultsCards,
});
