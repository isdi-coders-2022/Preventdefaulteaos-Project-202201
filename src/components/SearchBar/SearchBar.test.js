import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Given a SearchBar component", () => {
  describe("When it's render with 'NAME, SETS, TYPES'", () => {
    test("Then it should not render a input", () => {
      const inputFilter = "NAME, SETS, TYPES";

      render(<SearchBar />);

      const inputRender = screen.getByPlaceholderText(inputFilter);

      expect(inputRender).toBeInTheDocument();
    });
  });
});
