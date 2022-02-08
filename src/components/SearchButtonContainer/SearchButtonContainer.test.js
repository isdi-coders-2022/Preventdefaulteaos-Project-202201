import { render, screen } from "@testing-library/react";
import SearchButtonsContainer from "./SearchButtonContainer";

describe("Given a SearchButtonsContainer component", () => {
  describe("When it render a SearchButtonsContainer", () => {
    test("Then it should render a button", () => {
      render(<SearchButtonsContainer />);

      const items = screen.getAllByRole("button");

      expect(items).toHaveLength(3);
    });
  });
});
