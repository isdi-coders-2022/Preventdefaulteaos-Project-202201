import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Given a SearchBar component", () => {
  describe("When it's render with 'NAME, SETS, TYPES'", () => {
    test("Then it should render a input", () => {
      const placeholderText = "NAME, SETS, TYPES";

      render(<SearchBar />);

      const inputRender = screen.getByPlaceholderText(placeholderText);

      expect(inputRender).toBeInTheDocument();
    });
  });
});
