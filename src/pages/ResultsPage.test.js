import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";
import ResultsPage from "./ResultsPage";

describe("Given a ResultsPage page", () => {
  describe("When its instancied", () => {
    test("Then it should render", () => {
      const expectedButtons = 3;
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <ResultsPage />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const SearchContainer = screen.getAllByRole("button");

      expect(SearchContainer).toHaveLength(expectedButtons);
    });
  });
});
