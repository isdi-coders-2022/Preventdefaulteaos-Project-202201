import actionsTypes from "./actionsTypes";

export const loadBoosterCardsAction = (boosterCards) => ({
  type: actionsTypes.loadBoosterCards,
  boosterCards,
});

export const emptyBoosterCardsAction = () => ({
  type: actionsTypes.emptyBoosterCards,
});
