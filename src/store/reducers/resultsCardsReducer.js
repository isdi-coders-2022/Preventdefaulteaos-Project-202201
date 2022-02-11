import actionsTypes from "../actions/ResultsCards/actionsTypes";

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
    case actionsTypes.addCard:
      newResultsCards = [...currentResultsCards, action.card];
      break;
    case actionsTypes.deleteCard:
      newResultsCards = currentResultsCards.filter(
        (card) => card.id !== action.id
      );
      break;
    case actionsTypes.loadMyDeckCards:
      newResultsCards = [...action.myDeckCards];
      break;
    default:
      newResultsCards = [...currentResultsCards];
  }

  return newResultsCards;
};

export default resultsCardsReducer;
