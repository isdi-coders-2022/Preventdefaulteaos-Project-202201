import { render, screen } from "@testing-library/react";
import PackOpenerCardList from "./PackOpenerCardList";

describe("Given a PackOpenerCardList component", () => {
  describe("When it's rendered with an array of 2 cards", () => {
    test("Then it should show two images", () => {
      const numberOfCards = 2;
      const fakeArrayOfCards = [
        {
          name: "Overtaker",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
        },
        {
          name: "Heart-Piercer Bow",
          imageUrl:
            "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
        },
      ];

      render(<PackOpenerCardList fakeArrayOfCards={fakeArrayOfCards} />);

      const expectedImage = screen.getAllByRole("img").length;

      expect(expectedImage).toBe(numberOfCards);
    });
  });
});
