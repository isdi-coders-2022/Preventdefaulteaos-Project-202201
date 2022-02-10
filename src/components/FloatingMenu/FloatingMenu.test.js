import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FloatingMenu from "./FloatingMenu";

describe("Given a FloatingMenu component", () => {
  describe("When it recives a 'FloatingMenu' with boolean true", () => {
    test("then it render a 3 buttons", () => {
      const buttons = "button";
      render(
        <BrowserRouter>
          <FloatingMenu isActive={true} />
        </BrowserRouter>
      );

      const items = screen.getAllByRole(buttons);

      expect(items).toHaveLength(3);
    });
  });
});
