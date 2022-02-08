const fakeArrayOfCards = [
  {
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
      "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
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
  },
  {
    name: "Resolute Archangel",
    manaCost: "{5}{W}{W}",
    cmc: 7.0,
    colors: ["White"],
    colorIdentity: ["W"],
    type: "Creature — Angel",
    types: ["Creature"],
    subtypes: ["Angel"],
    rarity: "Rare",
    set: "PM15",
    setName: "Magic 2015 Promos",
    text: "FlyingWhen Resolute Archangel enters the battlefield, if your life total is less than your starting life total, it becomes equal to your starting life total.",
    flavor:
      "Cut it down, bury it in snow, put it to the torch. The rose will still bloom again.",
    artist: "Winona Nelson",
    number: "28",
    power: "4",
    toughness: "4",
    layout: "normal",
    watermark: "set",
    rulings: [
      {
        date: "2014-07-18",
        text: "Your starting life total is the life total you began the game with. For most two-player formats, this is 20. For Two-Headed Giant, it’s the life total your team started with, usually 30. In Commander games, your starting life total is 40.",
      },
      {
        date: "2014-07-18",
        text: "If your life total is less than your starting life total, you actually gain the appropriate amount of life. Other effects that interact with life gain will interact with Resolute Archangel’s ability accordingly.",
      },
    ],
    printings: ["M15", "PM15", "PRM"],
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
        format: "Modern",
        legality: "Legal",
      },
      {
        format: "Penny",
        legality: "Legal",
      },
      {
        format: "Pioneer",
        legality: "Legal",
      },
      {
        format: "Vintage",
        legality: "Legal",
      },
    ],
    id: "b79cae48-4768-5080-b44a-b15c1b5cc692",
  },
  {
    name: "Chasm Skulker",
    manaCost: "{2}{U}",
    cmc: 3.0,
    colors: ["Blue"],
    colorIdentity: ["U"],
    type: "Creature — Squid Horror",
    types: ["Creature"],
    subtypes: ["Squid", "Horror"],
    rarity: "Rare",
    set: "PM15",
    setName: "Magic 2015 Promos",
    text: "Whenever you draw a card, put a +1/+1 counter on Chasm Skulker.When Chasm Skulker dies, create X 1/1 blue Squid creature tokens with islandwalk, where X is the number of +1/+1 counters on Chasm Skulker. (They can't be blocked as long as defending player controls an Island.)",
    flavor: "Designed by Mike Neumann",
    artist: "Jack Wang",
    number: "46p",
    power: "1",
    toughness: "1",
    layout: "normal",
    rulings: [
      {
        date: "2014-07-18",
        text: "If you draw multiple cards, the first ability will trigger that many times. Each of these abilities will cause a +1/+1 counter to be put on Chasm Skulker.",
      },
      {
        date: "2014-07-18",
        text: "If enough -1/-1 counters are put on Chasm Skulker at the same time to make its toughness 0 or less, the number of +1/+1 counters on it before it got any -1/-1 counters will be used to determine how many Squid tokens you get. For example, if there are two +1/+1 counters on Chasm Skulker and it gets three -1/-1 counters, you’ll get two Squid tokens.",
      },
    ],
    printings: ["C16", "M15", "MB1", "PM15"],
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
        format: "Modern",
        legality: "Legal",
      },
      {
        format: "Penny",
        legality: "Legal",
      },
      {
        format: "Pioneer",
        legality: "Legal",
      },
      {
        format: "Vintage",
        legality: "Legal",
      },
    ],
    id: "22b6b1af-988d-546a-b280-24a1b67b50a1",
  },
];

export default fakeArrayOfCards;
