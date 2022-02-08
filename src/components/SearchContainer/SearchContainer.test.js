import { render, screen } from "@testing-library/react";
import SearchContainer from "./SearchContainer";

describe("Given a SearchContainer component", () => {
  describe("When button text is 'Innastrad'", () => {
    test("Then it should not render a button", () => {
      const ButtonText = "Innastrad";

      render(<SearchContainer />);

      const buttonRender = screen.getByText(ButtonText);

      expect(buttonRender).toBeInTheDocument();
    });
  });
});
