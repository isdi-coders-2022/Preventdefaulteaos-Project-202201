import actionsTypes from "./actionsTypes";

export const loadResultsCardsAction = (resultsCards) => ({
  type: actionsTypes.loadResultsCards,
  resultsCards,
});
