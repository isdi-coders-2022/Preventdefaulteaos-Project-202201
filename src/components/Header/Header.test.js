import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import HeaderComponent from "./Header";

describe("Given a Header component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the Header Component", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <HeaderComponent />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const headerRender = screen.getByRole("banner");

      expect(headerRender).toBeInTheDocument();
    });

    test("Then it should render the image logo", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <HeaderComponent />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const headerRender = screen.getByRole("img");

      expect(headerRender).toBeInTheDocument();
    });

    test("Then it should render the navigation bar", () => {
      const text = "HOME";

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <HeaderComponent />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const headerRender = screen.getByText(text);

      expect(headerRender).toBeInTheDocument();
    });
  });
});
