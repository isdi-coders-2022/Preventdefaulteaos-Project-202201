import { render, screen } from "@testing-library/react";
import PackOpenerCard from "./PackOpenerCard";

describe("Given a PackOpenerCard component", () => {
  describe("When it's rendered with a card", () => {
    test("Then it should show the image of the card with the card name as alternative text", () => {
      const card = {
        name: "Overtaker",
        imageUrl:
          "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
      };

      render(<PackOpenerCard card={card} />);

      const expectedImage = screen.getByRole("img", { alt: card.name });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
