import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BoosterCardsContextProvider from "../../store/contexts/BoosterCardsContextProvider";
import ResultsContextProvider from "../../store/contexts/ResultsContextProvider";
import CreatedCard from "./CreatedCard";

describe("Given a CreatedCard component", () => {
  describe("When it is rendered with a card with color red", () => {
    test("then it should show a red card", () => {
      const card = {
        name: "alejandro",
        color: "red",
      };

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <CreatedCard card={card} />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const cardReceived = screen.getByRole("heading", {
        text: card.name,
        level: 3,
      });

      expect(cardReceived).toBeInTheDocument();
    });
  });
  describe("When it is rendered with a card with color blue", () => {
    test("then it should show a blue card", () => {
      const card = {
        name: "alejandro",
        color: "blue",
      };

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <CreatedCard card={card} />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const cardReceived = screen.getByRole("heading", {
        text: card.name,
        level: 3,
      });

      expect(cardReceived).toBeInTheDocument();
    });
  });
  describe("When it is rendered with a card with color black", () => {
    test("then it should show a black card", () => {
      const card = {
        name: "alejandro",
        color: "black",
      };

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <CreatedCard card={card} />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const cardReceived = screen.getByRole("heading", {
        text: card.name,
        level: 3,
      });

      expect(cardReceived).toBeInTheDocument();
    });
  });
  describe("When it is rendered with a card with color white", () => {
    test("then it should show a white card", () => {
      const card = {
        name: "alejandro",
        color: "white",
      };

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <CreatedCard card={card} />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const cardReceived = screen.getByRole("heading", {
        text: card.name,
        level: 3,
      });

      expect(cardReceived).toBeInTheDocument();
    });
  });
  describe("When it is rendered with a card with color green", () => {
    test("then it should show a green card", () => {
      const card = {
        name: "alejandro",
        color: "green",
      };

      render(
        <BrowserRouter>
          <BoosterCardsContextProvider>
            <ResultsContextProvider>
              <CreatedCard card={card} />
            </ResultsContextProvider>
          </BoosterCardsContextProvider>
        </BrowserRouter>
      );

      const cardReceived = screen.getByRole("heading", {
        text: card.name,
        level: 3,
      });

      expect(cardReceived).toBeInTheDocument();
    });
  });
});
