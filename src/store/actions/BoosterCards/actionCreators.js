import actionsTypes from "./actionsTypes";

export const loadBoosterCardsAction = (boosterCards) => ({
  type: actionsTypes.loadBoosterCards,
  boosterCards,
});

export const emptyBoosterCardsAction = () => ({
  type: actionsTypes.emptyBoosterCards,
});

export const addCardAction = (card) => ({
  type: actionsTypes.addCard,
  card,
});

export const deleteCardAction = (id) => ({
  type: actionsTypes.deleteCard,
  id,
});

export const loadMyDeckCardAction = (myDeckCards) => ({
  type: actionsTypes.loadMyDeckCards,
  myDeckCards,
});
