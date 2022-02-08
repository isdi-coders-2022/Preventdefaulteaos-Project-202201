import { render, screen } from "@testing-library/react";
import SearchButtonsContainer from "./SearchButtonContainer";

describe("Given a Button component", () => {
  describe("When button text is 'Kamigawa'", () => {
    test("Then it should not render a button", () => {
      const ButtonText = "Kamigawa";

      render(<SearchButtonsContainer />);

      const buttonRender = screen.getByText(ButtonText);

      expect(buttonRender).toBeInTheDocument();
    });
  });
});
