import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When its instancied", () => {
    test("then it should render input", () => {
      const placeholderText = "NAME, SETS, TYPES";
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <HomePage />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const SearchContainer = screen.queryAllByRole(placeholderText);

      expect(SearchContainer.textContent).toBe();
    });

    test("then it should render 4 buttons", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <HomePage />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const items = screen.getAllByRole("button");

      expect(items).toHaveLength(4);
    });
  });
});
