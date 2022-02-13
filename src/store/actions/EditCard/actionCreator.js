import actionsTypes from "./actionsTypes";

export const editCreatedCardAction = (card) => ({
  type: actionsTypes.editCreatedCardAction,
  card,
});
