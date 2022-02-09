import { render, screen } from "@testing-library/react";

import PackOpenerContainer from "./PackOpenerContainer";

describe("Given a PackOpenerContainer component", () => {
  describe("When it is render", () => {
    test("Then it should show a button with the text 'Open a pack', a background image and a list of 14 cards", () => {
      const numberOfImages = 15;
      render(<PackOpenerContainer />);

      const expectedButton = screen.getByRole("button", {
        Text: /open a pack/i,
      });

      const expectedNumberOfImages = screen.getAllByRole("img").length;

      expect(expectedButton).toBeInTheDocument();
      expect(expectedNumberOfImages).toBe(numberOfImages);
    });
  });
});
