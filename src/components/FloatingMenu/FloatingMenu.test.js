import { render, screen } from "@testing-library/react";
import FloatingMenu from "./FloatingMenu";

describe("Given a FloatingMenu component", () => {
  describe("When it recives a 'FloatingMenu' with boolean true", () => {
    test("then it render a 3 buttons", () => {
      const buttons = "button";
      render(<FloatingMenu isActive={true} />);

      const items = screen.getAllByRole(buttons);

      expect(items).toHaveLength(3);
    });
  });
});
