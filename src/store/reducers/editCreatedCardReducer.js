import actionsTypes from "../actions/EditCard/actionsTypes";

const editCreatedCardReducer = (currentCreatedCard, action) => {
  let cardToEdit;
  switch (action.type) {
    case actionsTypes.editCreatedCardAction:
      cardToEdit = action.card;
      break;
    default:
      cardToEdit = [...currentCreatedCard];
  }

  return cardToEdit;
};

export default editCreatedCardReducer;
