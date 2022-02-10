import { render, screen } from "@testing-library/react";
import CardMoreInfo from "./CardMoreInfo";

describe("Given a CardMoreInfo component", () => {
  describe("When it is rendered with a card", () => {
    test("Then it should show the image of the card with the alt name on it", () => {
      const card = { name: "mario" };

      render(<CardMoreInfo infoCard={card} />);

      const expectedImageText = screen.getByRole("img", { alt: card.name });

      expect(expectedImageText).toBeInTheDocument();
    });
  });
});
