import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import CardMoreInfo from "./CardMoreInfo";

describe("Given a CardMoreInfo component", () => {
  describe("When it is rendered with a card", () => {
    test("Then it should show the image of the card with the alt name on it", () => {
      render(
        <BrowserRouter>
          <ResultsContextProvider>
            <BoosterCardsContextProvider>
              <CardMoreInfo infoCard={{}} />
            </BoosterCardsContextProvider>
          </ResultsContextProvider>
        </BrowserRouter>
      );

      const expectedImageText = screen.getByRole("img");

      expect(expectedImageText).toBeInTheDocument();
    });
  });
});
