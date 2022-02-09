import { render, screen } from "@testing-library/react";
import Button from "./Button";
import reactTestRenderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it's instanciated", () => {
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

  describe("When it receives an action", () => {
    test("Then the action should be invoked", () => {
      const action = jest.fn();
      const buttonFilter = "create";

      render(<Button type={buttonFilter} actionOnClick={action} />);

      userEvent.click(screen.getByRole("button"));
      expect(action).toHaveBeenCalled();
    });
  });
});
