import actionsTypes from "../actions/BoosterCards/actionsTypes";
import boosterCardsReducer from "./boosterCardsReducer";

describe("Given a boosterCardsReducer component", () => {
  describe("When it receives two cards and the action 'loadBoosterCards'", () => {
    test("Then it should return an array with the same information", () => {
      const currentState = [];
      const twoCardsArray = {
        cards: [
          {
            id: 1,
            name: "Overtaker",
            imageUrl:
              "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
          },
          {
            id: 2,
            name: "Heart-Piercer Bow",
            imageUrl:
              "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
          },
        ],
      };

      const expectedArrayofCards = [
        {
          id: 1,
          name: "Overtaker",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
        {
          id: 2,
          name: "Heart-Piercer Bow",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
        },
      ];

      const action = {
        type: actionsTypes.loadBoosterCards,
        boosterCards: twoCardsArray,
      };

      const newArrayOfCards = boosterCardsReducer(currentState, action);

      expect(newArrayOfCards).toEqual(expectedArrayofCards);
    });
  });
  describe("When it receives the action 'emptyBoosterCards'", () => {
    test("Then it should return an empty array", () => {
      const currentState = [
        {
          id: 1,
          name: "Overtaker",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
      ];

      const action = {
        type: actionsTypes.emptyBoosterCards,
      };

      const newArrayOfCards = boosterCardsReducer(currentState, action);

      expect(newArrayOfCards).toEqual([]);
    });
  });
});
