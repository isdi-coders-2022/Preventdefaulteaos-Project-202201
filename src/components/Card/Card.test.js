import { render, screen } from "@testing-library/react";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render an image", () => {
      const card = {
        name: "Samuel",
        imageUrl:
          "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386483&type=card",
      };

      render(
        <BoosterCardsContextProvider>
          <ResultsContextProvider>
            <Card card={card} />
          </ResultsContextProvider>
        </BoosterCardsContextProvider>
      );

      const expectedImage = screen.getByRole("img", { alt: card.name });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
