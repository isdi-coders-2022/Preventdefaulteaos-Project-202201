import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";
import MyDeck from "./MyDeckPage";

describe("Given a MyDeck page", () => {
  describe("When its instancied", () => {
    test("Then it should render", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <MyDeck />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const SearchContainer = screen.queryByRole("heading");

      expect(SearchContainer).toBeInTheDocument();
    });
  });
});
