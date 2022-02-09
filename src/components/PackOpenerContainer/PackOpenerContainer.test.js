import { render, screen } from "@testing-library/react";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";

import PackOpenerContainer from "./PackOpenerContainer";

describe("Given a PackOpenerContainer component", () => {
  describe("When it is render", () => {
    test("Then it should show a button with the text 'Open a pack', a background image and a list of 14 cards", () => {
      render(
        <>
          <BoosterCardsContextProvider>
            <PackOpenerContainer />
          </BoosterCardsContextProvider>
        </>
      );

      const expectedButton = screen.getByRole("button", {
        Text: /open a pack/i,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
