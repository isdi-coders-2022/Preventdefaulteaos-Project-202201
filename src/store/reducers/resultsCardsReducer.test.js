import actionsTypes from "../actions/ResultsCards/actionTypes";
import resultsCardsReducer from "./resultsCardsReducer";

describe("Given a resultsCardsReducer component", () => {
  describe("When it recives two cards and the action 'loadResultsCards'", () => {
    test("Then it should return", () => {
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
        type: actionsTypes.loadResultsCards,
        resultsCards: twoCardsArray,
      };

      const newArrayOfCards = resultsCardsReducer(currentState, action);

      expect(newArrayOfCards).toEqual(expectedArrayofCards);
    });
  });
});
