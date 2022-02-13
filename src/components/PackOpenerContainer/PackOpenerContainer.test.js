import { render, screen, waitFor } from "@testing-library/react";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import userEvents from "@testing-library/user-event";

import PackOpenerContainer from "./PackOpenerContainer";

jest.setTimeout(1000 * 15);
describe("Given a PackOpenerContainer component", () => {
  describe("When it is render", () => {
    test("Then it should show a button with the text 'Open a pack', a background image and a list of 14 cards", () => {
      render(
        <>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <PackOpenerContainer />{" "}
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </>
      );

      const expectedButton = screen.getByRole("button", {
        Text: /open a pack/i,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it is clicked the open pack button", () => {
    test("Then it should call the API and render 2 images", async () => {
      const expectedImagesNUmber = 2;

      render(
        <>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <PackOpenerContainer />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </>
      );

      const expectedButton = screen.getByRole("button", {
        Text: /open a pack/i,
      });

      userEvents.click(expectedButton);

      await waitFor(async () => {
        const promise = await screen.findAllByRole("img");
        return expect(promise).toHaveLength(2);
      });

      const expectedImages = await screen.findAllByRole("img");

      expect(expectedImages).toHaveLength(expectedImagesNUmber);
    });
  });
});
