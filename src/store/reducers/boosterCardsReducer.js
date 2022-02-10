import actionsTypes from "../actions/BoosterCards/actionsTypes";

const boosterCardsReducer = (currentBoosterCards, action) => {
  let newBoosterCards;

  switch (action.type) {
    case actionsTypes.loadBoosterCards:
      newBoosterCards = [...action.boosterCards.cards];
      break;
    case actionsTypes.emptyBoosterCards:
      newBoosterCards = [];
      break;
    case actionsTypes.addCard:
      newBoosterCards = [...currentBoosterCards, action.card];
      break;
    case actionsTypes.deleteCard:
      newBoosterCards = currentBoosterCards.filter(
        (card) => card.id !== action.id
      );
      break;
    case actionsTypes.loadMyDeckCards:
      newBoosterCards = [...action.myDeckCards];
      break;

    default:
      newBoosterCards = [...currentBoosterCards];
  }
  return newBoosterCards;
};

export default boosterCardsReducer;
