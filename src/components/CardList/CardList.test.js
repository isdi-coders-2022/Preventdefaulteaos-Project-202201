import CardList from "./CardList";
import { render, screen } from "@testing-library/react";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";

describe("Given a CardList component", () => {
  describe("When it instanced", () => {
    test("Then it should", () => {
      render(
        <BoosterCardsContextProvider>
          <ResultsContextProvider>
            <CardList />
          </ResultsContextProvider>
        </BoosterCardsContextProvider>
      );

      const expectedImage = screen.getAllByRole("button");

      expect(expectedImage).toHaveLength(3);
    });
  });
});
