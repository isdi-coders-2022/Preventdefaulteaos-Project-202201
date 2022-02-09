import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it instancied", () => {
    test("then it should render", () => {
      const placeholderText = "NAME, SETS, TYPES";

      render(<HomePage />);

      const SearchContainer = screen.queryAllByRole(placeholderText);

      expect(SearchContainer.textContent).toBe();
    });
  });
});
