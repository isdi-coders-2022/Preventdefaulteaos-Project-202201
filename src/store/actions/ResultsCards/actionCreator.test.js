import { loadResultsCardsAction } from "./actionCreators";

describe("Given a loadBoosterCardsAction function", () => {
  describe("When it receives resultsCards", () => {
    test("Then it should return an action type load-ResultsCards", () => {
      const resultsCards = [
        { name: "Luis" },
        { name: "Carlitos" },
        { name: "Felix" },
      ];
      const expectedAction = {
        type: "load-ResultsCards",
        resultsCards,
      };

      const action = loadResultsCardsAction(resultsCards);

      expect(action).toEqual(expectedAction);
    });
  });
});
