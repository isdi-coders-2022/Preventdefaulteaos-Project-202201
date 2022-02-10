import actionsTypes from "../actions/ResultsCards/actionTypes";

const resultsCardsReducer = (currentResultsCards, action) => {
  let newResultsCards;
  switch (action.type) {
    case actionsTypes.loadResultsCards:
      newResultsCards = [...action.resultsCards.cards];
      break;
    case actionsTypes.filterBlueResultsCards:
      newResultsCards = action.resultsCards.filter(
        (card) => card.colors[0] === "Blue"
      );
      break;
    case actionsTypes.filterWhiteResultsCards:
      newResultsCards = action.resultsCards.filter(
        (card) => card.colors[0] === "White"
      );
      break;
    case actionsTypes.filterBlackResultsCards:
      newResultsCards = action.resultsCards.filter(
        (card) => card.colors[0] === "Black"
      );
      break;
    default:
      newResultsCards = [...currentResultsCards];
  }

  return newResultsCards;
};

export default resultsCardsReducer;
