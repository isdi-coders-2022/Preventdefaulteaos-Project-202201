import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";
import CreateCardPage from "./CreateCardPage";

describe("Given a CreateCardPage page", () => {
  describe("When its instancied", () => {
    test("Then it should render a 'heading'", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <CreateCardPage />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const createCardPageContainer = screen.getByRole("heading", { level: 1 });

      expect(createCardPageContainer).toBeInTheDocument();
    });
  });
});
