import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it instancied", () => {
    test("then it should render input", () => {
      const placeholderText = "NAME, SETS, TYPES";

      render(<HomePage />);

      const SearchContainer = screen.queryAllByRole(placeholderText);

      expect(SearchContainer.textContent).toBe();
    });

    test("then it should render 4 buttons", () => {
      render(<HomePage />);

      const items = screen.getAllByRole("button");

      expect(items).toHaveLength(4);
    });
  });
});
