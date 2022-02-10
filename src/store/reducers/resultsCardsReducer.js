import actionsTypes from "../actions/ResultsCards/actionTypes";

const resultsCardsReducer = (currentResultsCards, action) => {
  let newResultsCards;
  switch (action.type) {
    case actionsTypes.loadResultsCards:
      newResultsCards = [...action.resultsCards.cards];
      break;
    default:
      newResultsCards = [...currentResultsCards];
  }

  return newResultsCards;
};

export default resultsCardsReducer;
