import { render, screen } from "@testing-library/react";
import PackOpenerCardList from "./PackOpenerCardList";

describe("Given a PackOpenerCardList component", () => {
  describe("When it's rendered with an array of 2 cards", () => {
    test("Then it should show two images", () => {
      const numberOfCards = 2;
      const fakeArrayOfCards = [
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

      render(<PackOpenerCardList arrayOfCards={fakeArrayOfCards} />);

      const expectedImage = screen.getAllByRole("img").length;

      expect(expectedImage).toBe(numberOfCards);
    });
  });
});
