import { render, screen } from "@testing-library/react";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import HeaderComponent from "./Header";

describe("Given a Header component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the Header Component", () => {
      render(
        <BoosterCardsContextProvider>
          <ResultsContextProvider>
            <HeaderComponent />
          </ResultsContextProvider>
        </BoosterCardsContextProvider>
      );

      const headerRender = screen.getByRole("banner");

      expect(headerRender).toBeInTheDocument();
    });

    test("Then it should render the image logo", () => {
      render(
        <BoosterCardsContextProvider>
          <ResultsContextProvider>
            <HeaderComponent />
          </ResultsContextProvider>
        </BoosterCardsContextProvider>
      );

      const headerRender = screen.getByRole("img");

      expect(headerRender).toBeInTheDocument();
    });

    test("Then it should render the navigation bar", () => {
      const text = "HOME";
      
      render(
        <BoosterCardsContextProvider>
          <ResultsContextProvider>
            <HeaderComponent />
          </ResultsContextProvider>
        </BoosterCardsContextProvider>
      );

      const headerRender = screen.getByText(text);

      expect(headerRender).toBeInTheDocument();
    });
  });
});
