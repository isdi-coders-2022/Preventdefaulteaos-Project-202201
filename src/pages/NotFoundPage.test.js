import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When its instancied", () => {
    test("Then it should render 'Not Found'", () => {
      const expectedText = "Not Found";

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <NotFoundPage />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const MyDeckContainer = screen.getByText(expectedText);

      expect(MyDeckContainer).toBeInTheDocument();
    });
  });
});
