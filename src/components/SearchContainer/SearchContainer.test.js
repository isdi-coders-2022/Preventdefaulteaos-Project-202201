import { render, screen } from "@testing-library/react";
import SearchContainer from "./SearchContainer";

describe("Given a SearchContainer component", () => {
  describe("When it render a SearchContainer", () => {
    test("Then it should render a button", () => {
      render(<SearchContainer />);

      const items = screen.getAllByRole("button");

      expect(items).toHaveLength(3);
    });
  });
});
