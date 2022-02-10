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

    default:
      newBoosterCards = [...currentBoosterCards];
  }
  return newBoosterCards;
};

export default boosterCardsReducer;
