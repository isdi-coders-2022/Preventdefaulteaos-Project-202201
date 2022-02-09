import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it receives an array of 2 cards", () => {
    test("Then it should show two images", () => {
      const numberOfImages = 2;
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

      render(<CardList arrayOfCards={fakeArrayOfCards} />);

      const expectedImages = screen.getAllByRole("img").length;

      expect(expectedImages).toBe(numberOfImages);
    });
  });
});
