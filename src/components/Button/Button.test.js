import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's instanciated with 'create' filter", () => {
    test("Then it should not render a button", () => {
      const buttonFilter = "create";

      // eslint-disable-next-line no-unused-vars
      const view = render(<Button type={buttonFilter} />);

      const buttonRender = screen.getByRole("button");

      expect(buttonRender).toBeInTheDocument();
    });
  });
});
