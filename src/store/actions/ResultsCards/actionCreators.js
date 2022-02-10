import actionsTypes from "./actionTypes";

export const loadResultsCardsAction = (resultsCards) => ({
  type: actionsTypes.loadResultsCards,
  resultsCards,
});

export const filterBlueResultsCardsAction = (resultsCards) => ({
  type: actionsTypes.filterBlueResultsCards,
  resultsCards,
});
export const filterWhiteResultsCardsAction = (resultsCards) => ({
  type: actionsTypes.filterWhiteResultsCards,
  resultsCards,
});
export const filterBlackResultsCardsAction = (resultsCards) => ({
  type: actionsTypes.filterBlackResultsCards,
  resultsCards,
});
