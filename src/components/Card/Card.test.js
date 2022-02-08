import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  const givenCardObject = {
    name: "Overtaker",
    manaCost: "{1}{U}",
    cmc: 2.0,
    colors: ["Blue"],
    colorIdentity: ["U"],
    type: "Creature — Merfolk Spellshaper",
    types: ["Creature"],
    subtypes: ["Merfolk", "Spellshaper"],
    rarity: "Rare",
    set: "PMMQ",
    setName: "Mercadian Masques Promos",
    text: "{3}{U}, {T}, Discard a card: Untap target creature and gain control of it until end of turn. That creature gains haste until end of turn.",
    flavor: "Its no challenge to master a Mercadian.",
    artist: "Clyde Caldwell",
    number: "89",
    power: "1",
    toughness: "1",
    layout: "normal",
    multiverseid: "97051",
    imageUrl:
      "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
    printings: ["MMQ", "PMMQ", "PRM"],
    originalText:
      "o3oU, ocT, Discard a card from your hand: Untap target creature and gain control of it until end of turn. That creature gains haste until end of turn. (It may attack and ocT the turn it comes under your control.)",
    originalType: "Creature - Spellshaper",
    legalities: [
      {
        format: "Commander",
        legality: "Legal",
      },
      {
        format: "Duel",
        legality: "Legal",
      },
      {
        format: "Legacy",
        legality: "Legal",
      },
      {
        format: "Premodern",
        legality: "Legal",
      },
      {
        format: "Vintage",
        legality: "Legal",
      },
    ],
    id: "5ad15555-fd6f-507a-9b90-92e9ad23d014",
  };
  describe("When it's instanciated with a givenCardObject", () => {
    test("Then it should render the card image", () => {
      render(<Card card={givenCardObject} />);

      const buttonRender = screen.getByRole("img");

      expect(buttonRender).toBeInTheDocument();
    });

    test("Then it should render the card with the name 'Overtaker'", () => {
      const cardName = "Overtaker";

      render(<Card card={givenCardObject} />);

      const buttonRender = screen.getByRole("heading", { name: cardName });

      expect(buttonRender).toBeInTheDocument();
    });
  });
});
