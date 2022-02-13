import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";
import EditCreatedCardPage from "./EditCreatedCardPage";

describe("Given a EditCreatedCardPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'EDIT YOUR CARD:'", () => {
      const heading = "EDIT YOUR CARD:";

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <EditCreatedCardPage />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", { text: heading });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
