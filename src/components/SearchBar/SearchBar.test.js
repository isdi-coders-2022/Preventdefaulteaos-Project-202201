import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Given a Button component", () => {
  describe("When it's render with 'NAME, SETS, TYPES'", () => {
    test("Then it should not render a input", () => {
      const inputFilter = "NAME, SETS, TYPES";

      // eslint-disable-next-line no-unused-vars
      render(<SearchBar />);

      const inputRender = screen.getByPlaceholderText(inputFilter);

      expect(inputRender).toBeInTheDocument();
    });
  });
});
