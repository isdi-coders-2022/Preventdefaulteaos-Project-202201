import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import SearchContainer from "./SearchContainer";

describe("Given a SearchContainer component", () => {
  describe("When it render a SearchContainer", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <SearchContainer />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const items = screen.getAllByRole("button");

      expect(items).toHaveLength(3);
    });
  });
});
