import resultsCardsReducer from "./resultsCardsReducer";

describe("Given a resultsCardsReducer component", () => {
  describe("When it recives two cards and the action 'loadResultsCards'", () => {
    test("Then it should return an array with two cards", () => {
      const currentState = [];
      const twoCardsArray = {
        cards: [
          {
            id: 1,
            name: "Overtaker",
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
          },
          {
            id: 2,
            name: "Heart-Piercer Bow",
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
          },
        ],
      };

      const expectedArrayofCards = [
        {
          id: 1,
          name: "Overtaker",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
        {
          id: 2,
          name: "Heart-Piercer Bow",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
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

  describe("When it recieves one card with the property colors red and one with blue and the action filterBlueResultsCards", () => {
    test("Then it should return only the one with blue property", () => {
      const currentState = [];

      const twoCardsArray = [
        {
          id: 1,
          name: "Overtaker",
          colors: ["red"],
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
        {
          id: 2,
          name: "Heart-Piercer Bow",
          colors: ["Blue"],

          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
        },
      ];

      const action = {
        type: actionsTypes.filterBlueResultsCards,
        resultsCards: twoCardsArray,
      };

      const newArrayOfCard = resultsCardsReducer(currentState, action).length;

      expect(newArrayOfCard).toBe(1);
    });
  });
  describe("When it recieves one card with the property colors white and one with blue and the action filterWhiteResultsCards", () => {
    test("Then it should return only the one with white property", () => {
      const currentState = [];

      const twoCardsArray = [
        {
          id: 1,
          name: "Overtaker",
          colors: ["White"],
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
        {
          id: 2,
          name: "Heart-Piercer Bow",
          colors: ["Blue"],

          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
        },
      ];

      const action = {
        type: actionsTypes.filterWhiteResultsCards,
        resultsCards: twoCardsArray,
      };

      const newArrayOfCard = resultsCardsReducer(currentState, action).length;

      expect(newArrayOfCard).toBe(1);
    });
  });
  describe("When it recieves one card with the property colors blue and one with black and the action filterBlackResultsCards", () => {
    test("Then it should return only the one with white property", () => {
      const currentState = [];

      const twoCardsArray = [
        {
          id: 1,
          name: "Overtaker",
          colors: ["Black"],
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
        {
          id: 2,
          name: "Heart-Piercer Bow",
          colors: ["Blue"],

          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
        },
      ];

      const action = {
        type: actionsTypes.filterBlackResultsCards,
        resultsCards: twoCardsArray,
      };

      const newArrayOfCard = resultsCardsReducer(currentState, action).length;

      expect(newArrayOfCard).toBe(1);
    });
  });
  describe("When it recieves one card and the action addCard with the state empty", () => {
    test("Then it should add one card to the state", () => {
      const currentState = [];

      const oneCard = {
        id: 1,
        name: "Overtaker",
        colors: ["White"],
        imageUrl:
          "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
      };

      const action = {
        type: actionsTypes.addCard,
        card: oneCard,
      };

      const newArrayOfCard = resultsCardsReducer(currentState, action).length;

      expect(newArrayOfCard).toBe(1);
    });
  });
  describe("When it  is called on a state with one card and the action deleteCard", () => {
    test("Then it should remove the card from the state", () => {
      const currentState = [
        {
          id: 1,
          name: "Overtaker",
          colors: ["White"],
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
      ];

      const action = {
        type: actionsTypes.deleteCard,
        id: 1,
      };

      const newArrayOfCard = resultsCardsReducer(currentState, action).length;

      expect(newArrayOfCard).toBe(0);
    });
  });
  describe("When it recives two cards and the action 'loadMyDeckCards'", () => {
    test("Then it should return", () => {
      const currentState = [];
      const twoCardsArray = {
        cards: [
          {
            id: 1,
            name: "Overtaker",
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
          },
          {
            id: 2,
            name: "Heart-Piercer Bow",
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
          },
        ],
      };

      const expectedArrayofCards = [
        {
          id: 1,
          name: "Overtaker",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
        {
          id: 2,
          name: "Heart-Piercer Bow",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
        },
      ];

      const action = {
        type: actionsTypes.loadMyDeckCards,
        myDeckCards: twoCardsArray,
      };

      const newArrayOfCards = resultsCardsReducer(currentState, action);

      expect(newArrayOfCards).toEqual(expectedArrayofCards);
    });
  });
});
