import actionsTypes from "../actions/EditCard/actionsTypes";
import editCreatedCardReducer from "./editCreatedCardReducer";

describe("Given a editCreatedCardReducer function", () => {
  describe("When it is instantiated with the action editCreatedCard and a card", () => {
    test("Then it should render that card", () => {
      const card = { name: "alejandro", type: "creature", color: "red" };
      const currentState = {};
      const action = {
        type: actionsTypes.editCreatedCardAction,
        card: card,
      };

      const newCard = editCreatedCardReducer(currentState, action);

      expect(newCard).toEqual(card);
    });
  });
  describe("When it is instantiated with and incorrect action", () => {
    test("Then it should render that same card as the currentState", () => {
      const currentState = {
        name: "alejandro",
        type: "creature",
        color: "red",
      };

      const action = {
        type: "error",
      };

      const expectedErrorCard = editCreatedCardReducer(currentState, action);

      expect(expectedErrorCard).toEqual(currentState);
    });
  });
});
