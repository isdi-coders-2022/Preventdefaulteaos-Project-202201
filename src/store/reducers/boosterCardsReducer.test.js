import actionsTypes from "../actions/BoosterCards/actionsTypes";
import boosterCardsReducer from "./boosterCardsReducer";

describe("Given a boosterCardsReducer component", () => {
  describe("When it receives two cards and the action 'loadBoosterCards'", () => {
    test("Then it should return an array with the same information", () => {
      const twoCardsArray = [
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

      const action = (boosterCards) => ({
        type: actionsTypes.loadBoosterCards,
        boosterCards,
      });

      const newArrayOfCards = boosterCardsReducer(twoCardsArray, action);

      expect(newArrayOfCards).toEqual(twoCardsArray);
    });
  });
});
