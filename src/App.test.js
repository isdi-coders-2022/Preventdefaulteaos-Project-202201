import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BoosterCardsContextProvider from "./store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "./store/contexts/ResultsContextProvider";

describe("Given an App component", () => {
  describe("When it its rendered", () => {
    test("Then it should show the button to load cards and to open a pack", () => {
      const expectedButtons = 2;

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <App />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button").length;

      expect(buttons).toBe(expectedButtons);
    });
  });
});
