import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import SearchButtonsContainer from "./SearchButtonContainer";
import reactTestRenderer from "react-test-renderer";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";

describe("Given a SearchButtonsContainer component", () => {
  describe("When it recive a SearchButtonsContainer", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <SearchButtonsContainer />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const items = screen.getAllByRole("button");

      expect(items).toHaveLength(3);
    });
  });

  describe("when it receive a button with name 'Kamigawa'", () => {
    test("then it should render a button with name 'Kamigawa'", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <SearchButtonsContainer />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );
      const text = "Kamigawa";

      const buttonText = screen.getByText(text);

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("when it recives a SearchButtonsContainer with the text 'Latest expansions:'", () => {
    test("then it render a p with the text 'Latest expansions:'", () => {
      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <SearchButtonsContainer />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );
      const p = "Latest expansions:";

      const pRender = screen.getByText(p);

      expect(pRender).toBeInTheDocument();
    });
  });

  describe("When recive a component", () => {
    test("Then it should render", () => {
      const component = reactTestRenderer.create(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <SearchButtonsContainer />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
