import {
  emptyBoosterCardsAction,
  loadBoosterCardsAction,
} from "./actionCreators";

describe("Given a loadBoosterCardsAction function", () => {
  describe("When it receives boosterCards", () => {
    test("Then it should return an action type load-BoosterCards", () => {
      const boosterCards = [
        { name: "Luis" },
        { name: "Carlitos" },
        { name: "Felix" },
      ];
      const expectedAction = {
        type: "load-BoosterCards",
        boosterCards,
      };

      const action = loadBoosterCardsAction(boosterCards);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a emptyBoosterCardsAction function", () => {
  describe("When it receives boosterCards", () => {
    test("Then it should return an action type empty-BoosterCards", () => {
      const boosterCards = [
        { name: "Luis" },
        { name: "Carlitos" },
        { name: "Felix" },
      ];
      const expectedAction = {
        type: "empty-BoosterCards",
      };

      const action = emptyBoosterCardsAction(boosterCards);

      expect(action).toEqual(expectedAction);
    });
  });
});
