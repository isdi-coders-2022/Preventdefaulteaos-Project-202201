import {
  addCardAction,
  deleteCardAction,
  filterBlackResultsCardsAction,
  filterBlueResultsCardsAction,
  filterWhiteResultsCardsAction,
  loadMyDeckCardAction,
  loadResultsCardsAction,
} from "./actionCreators";

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

describe("Given a loadMyDeckCardsAction function", () => {
  describe("When it receives myDeckCards", () => {
    test("Then it should return an action type load-MyDeckCards", () => {
      const myDeckCards = [
        { name: "Luis" },
        { name: "Carlitos" },
        { name: "Felix" },
      ];
      const expectedAction = {
        type: "load-MyDeckCards",
        myDeckCards,
      };

      const action = loadMyDeckCardAction(myDeckCards);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteCardAction function", () => {
  describe("When it receives id", () => {
    test("Then it should return an action type delete-card", () => {
      const id = [{ name: "Luis" }, { name: "Carlitos" }, { name: "Felix" }];
      const expectedAction = {
        type: "delete-card",
        id,
      };

      const action = deleteCardAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a addCardAction function", () => {
  describe("When it receives card", () => {
    test("Then it should return an action type add-card", () => {
      const card = [{ name: "Luis" }, { name: "Carlitos" }, { name: "Felix" }];
      const expectedAction = {
        type: "add-card",
        card,
      };

      const action = addCardAction(card);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a filterBlueResultsCardsAction function", () => {
  describe("When it receives resultsCards", () => {
    test("Then it should return an action type filterBlue-ResultsCards", () => {
      const resultsCards = [
        { name: "Luis" },
        { name: "Carlitos" },
        { name: "Felix" },
      ];
      const expectedAction = {
        type: "filterBlue-ResultsCards",
        resultsCards,
      };

      const action = filterBlueResultsCardsAction(resultsCards);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a filterWhiteResultsCardsAction function", () => {
  describe("When it receives resultsCards", () => {
    test("Then it should return an action type filterWhite-ResultsCards", () => {
      const resultsCards = [
        { name: "Luis" },
        { name: "Carlitos" },
        { name: "Felix" },
      ];
      const expectedAction = {
        type: "filterWhite-ResultsCards",
        resultsCards,
      };

      const action = filterWhiteResultsCardsAction(resultsCards);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a filterBlackResultsCardsAction function", () => {
  describe("When it receives resultsCards", () => {
    test("Then it should return an action type filterBlack-ResultsCards", () => {
      const resultsCards = [
        { name: "Luis" },
        { name: "Carlitos" },
        { name: "Felix" },
      ];
      const expectedAction = {
        type: "filterBlack-ResultsCards",
        resultsCards,
      };

      const action = filterBlackResultsCardsAction(resultsCards);

      expect(action).toEqual(expectedAction);
    });
  });
});
