import { render, screen } from "@testing-library/react";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import EditCreatedCard from "./EditCreatedCard";

describe("Given a EditCreatedCard component", () => {
  describe("When it is rendered", () => {
    test("then it should show a form with 5 input boxes on it", () => {
      const formImputs = 5;
      render(
        <BoosterCardsContextProvider>
          <ResultsContextProvider>
            <EditCreatedCard />
          </ResultsContextProvider>
        </BoosterCardsContextProvider>
      );

      const expectedForm = screen.getAllByRole("textbox").length;

      expect(expectedForm).toBe(formImputs);
    });
  });
});
