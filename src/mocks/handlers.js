import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://magic-world-api.herokuapp.com/magicWorld/",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457147&type=card",
            name: "Archway Angel",
            types: ["Creature"],
            colors: ["White"],
            rarity: "Uncommon",
            id: 4,
          },
          {
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457147&type=card",
            name: "Archway Angel",
            types: ["Creature"],
            colors: ["White"],
            rarity: "Uncommon",
            id: 5,
          },
        ])
      );
    }
  ),
  rest.post(
    "https://magic-world-api.herokuapp.com/magicWorld/",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457147&type=card",
            name: "Archway Angel",
            types: ["Creature"],
            colors: ["White"],
            rarity: "Uncommon",
            id: 4,
          },
          {
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457147&type=card",
            name: "Archway Angel",
            types: ["Creature"],
            colors: ["White"],
            rarity: "Uncommon",
            id: 5,
          },
        ])
      );
    }
  ),
  rest.delete(
    "https://magic-world-api.herokuapp.com/magicWorld/",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457147&type=card",
            name: "Archway Angel",
            types: ["Creature"],
            colors: ["White"],
            rarity: "Uncommon",
            id: 4,
          },
          {
            imageUrl:
              "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457147&type=card",
            name: "Archway Angel",
            types: ["Creature"],
            colors: ["White"],
            rarity: "Uncommon",
            id: 5,
          },
        ])
      );
    }
  ),
  rest.get(
    "https://api.magicthegathering.io/v1/sets/ktk/booster",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          cards: [
            {
              name: "Retribution of the Ancients",
              manaCost: "{B}",
              cmc: 1.0,
              colors: ["Black"],
              colorIdentity: ["B"],
              type: "Enchantment",
              types: ["Enchantment"],
              rarity: "Rare",
              set: "KTK",
              setName: "Khans of Tarkir",
              text: "{B}, Remove X +1/+1 counters from among creatures you control: Target creature gets -X/-X until end of turn.",
              flavor:
                "Abzan ancestors died to protect their Houses, and they protect them still.",
              artist: "Svetlin Velinov",
              number: "85",
              layout: "normal",
              multiverseid: "386635",
              imageUrl:
                "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386635&type=card",
              watermark: "abzan",
              rulings: [
                {
                  date: "2014-09-20",
                  text: "Once you announce that you are activating the ability of Retribution of the Ancients, no player may take any actions before you pay its costs. Notably, opponents can’t try to remove a creature with counters on it to stop you from paying.",
                },
              ],
              foreignNames: [
                {
                  name: "Vergeltung der Ahnen",
                  text: "{B}, entferne X +1/+1-Marken von Kreaturen, die du kontrollierst: Eine Kreatur deiner Wahl erhält -X/-X bis zum Ende des Zuges.",
                  type: "Verzauberung",
                  flavor:
                    "Vorfahren der Abzan starben, um ihre Häuser zu beschützen, und sie beschützen sie immer noch.",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387442&type=card",
                  language: "German",
                  multiverseid: 387442,
                },
                {
                  name: "Retribución de los antiguos",
                  text: "{B}, remover X contadores +1/+1 de entre las criaturas que controlas: La criatura objetivo obtiene -X/-X hasta el final del turno.",
                  type: "Encantamiento",
                  flavor:
                    "Los ancestros abzanos dieron su vida por proteger sus dinastías y, aun hoy, siguen protegiéndolas.",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389325&type=card",
                  language: "Spanish",
                  multiverseid: 389325,
                },
                {
                  name: "Châtiment des ancêtres",
                  text: "{B}, retirez X marqueurs +1/+1 de créatures que vous contrôlez : La créature ciblée gagne -X/-X jusqu'à la fin du tour.",
                  type: "Enchantement",
                  flavor:
                    "Les ancêtres abzans périrent pour protéger leurs Maisons, et ils les protègent encore.",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387711&type=card",
                  language: "French",
                  multiverseid: 387711,
                },
                {
                  name: "Castigo degli Antichi",
                  text: "{B}, Rimuovi X segnalini +1/+1 scelti tra le creature che controlli: Una creatura bersaglio prende -X/-X fino alla fine del turno.",
                  type: "Incantesimo",
                  flavor:
                    "Gli antenati degli Abzan sono morti per proteggere le proprie Casate e continuano a farlo tuttora.",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387980&type=card",
                  language: "Italian",
                  multiverseid: 387980,
                },
                {
                  name: "古き者どもの報復",
                  text: "{B}, 好きな数のあなたがコントロールするクリーチャーの上から＋１/＋１カウンターをＸ個取り除く：クリーチャー１体を対象とする。ターン終了時まで、それは－Ｘ/－Ｘの修整を受ける。",
                  type: "エンチャント",
                  flavor:
                    "アブザンの先祖たちはアブザン家を守るために命を落とし、そして今もなお一家を守っている。",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388249&type=card",
                  language: "Japanese",
                  multiverseid: 388249,
                },
                {
                  name: "고대인의 복수",
                  text: "{B}, 당신이 조종하는 생물들에서 +1/+1 카운터 X개를 제거한다: 생물을 목표로 정한다. 그 생물은 턴종료까지 -X/-X를 받는다.",
                  type: "부여마법",
                  flavor:
                    "일족을 지키고자 목숨을 바친 아브잔의 조상들은 여전히 그 임무를 다하고 있다.",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388518&type=card",
                  language: "Korean",
                  multiverseid: 388518,
                },
                {
                  name: "Retribuição dos Ancestrais",
                  text: "{B}, Remova X marcadores +1/+1 das criaturas que você controla: A criatura alvo recebe -X/-X até o final do turno.",
                  type: "Encantamento",
                  flavor:
                    "Os ancestrais Abzan morreram para proteger as Dinastias. Eles ainda as protegem.",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388787&type=card",
                  language: "Portuguese (Brazil)",
                  multiverseid: 388787,
                },
                {
                  name: "Возмездие Древних",
                  text: "{B}, удалите X жетонов +1/+1 с существ под вашим контролем: целевое существо получает -X/-X до конца хода.",
                  type: "Чары",
                  flavor:
                    "Предки абзанов погибли, защищая свои Семьи, и защищают их поныне.",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389056&type=card",
                  language: "Russian",
                  multiverseid: 389056,
                },
                {
                  name: "先人报偿",
                  text: "{B}，从由你操控的生物上移去总共X个+1/+1指示物：目标生物得-X/-X直到回合结束。",
                  type: "结界",
                  flavor: "阿布赞祖灵因卫护眷族而捐躯，死后仍尽效保护之责。",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386904&type=card",
                  language: "Chinese Simplified",
                  multiverseid: 386904,
                },
                {
                  name: "先人報償",
                  text: "{B}，從由你操控的生物上移去總共X個+1/+1指示物：目標生物得-X/-X直到回合結束。",
                  type: "結界",
                  flavor: "阿布贊祖靈因衛護眷族而捐軀，死後仍盡效保護之責。",
                  imageUrl:
                    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387173&type=card",
                  language: "Chinese Traditional",
                  multiverseid: 387173,
                },
              ],
              printings: ["KTK"],
              originalText:
                "{B}, Remove X +1/+1 counters from among creatures you control: Target creature gets -X/-X until end of turn.",
              originalType: "Enchantment",
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
              id: "e99347b2-054a-584f-a0d7-828e15865fe5",
            },
          ],
        })
      );
    }
  ),
  rest.get("https://api.magicthegathering.io/v1/cards", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        cards: [
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
            flavor: '"It\'s no challenge to master a Mercadian."',
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
          },
        ],
      })
    );
  }),
];
