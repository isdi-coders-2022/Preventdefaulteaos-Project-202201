import actionsTypes from "./actionsTypes";

export const loadBoosterCards = (boosterCards) => ({
  type: actionsTypes.loadBoosterCards,
  boosterCards,
});

export const emptyBoosterCards = () => ({
  type: actionsTypes.emptyBoosterCards,
});
