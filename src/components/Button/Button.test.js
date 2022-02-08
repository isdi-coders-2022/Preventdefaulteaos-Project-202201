import { render, screen } from "@testing-library/react";
import Button from "./Button";
import reactTestRenderer from "react-test-renderer";

describe("Given a Button component", () => {
  describe("When it's instanciated with 'create' filter", () => {
    test("Then it should render a button", () => {
      const buttonFilter = "create";

      render(<Button type={buttonFilter} />);

      const buttonRender = screen.getByRole("button");

      expect(buttonRender).toBeInTheDocument();
    });
  });

  describe("When executing the component", () => {
    test("Then it should render", () => {
      const component = reactTestRenderer.create(<Button />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
