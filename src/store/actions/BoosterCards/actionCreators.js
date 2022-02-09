import actionsTypes from "./actionsTypes";

export const loadBoosterCards = (boosterCards) => ({
  type: actionsTypes.loadBoosterCards,
  boosterCards,
});

export const deleteAllBoosterCards = (boosterCards) => ({
  type: actionsTypes.deleteAllBoosterCards,
  boosterCards,
});
