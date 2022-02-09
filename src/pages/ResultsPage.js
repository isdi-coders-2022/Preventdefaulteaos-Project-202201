import CardList from "../components/CardList/CardList";

const ResultsPage = () => {
  const listOfCards = [
    {
      name: "Avalanche Tusker",
      manaCost: "{2}{G}{U}{R}",
      cmc: 5.0,
      colors: ["Green", "Red", "Blue"],
      colorIdentity: ["G", "R", "U"],
      type: "Creature — Elephant Warrior",
      types: ["Creature"],
      subtypes: ["Elephant", "Warrior"],
      rarity: "Rare",
      set: "KTK",
      setName: "Khans of Tarkir",
      text: "Whenever Avalanche Tusker attacks, target creature defending player controls blocks it this combat if able.",
      flavor:
        '"Hold the high ground, then bring it to your enemy."\n—Surrak, khan of the Temur',
      artist: "Matt Stewart",
      number: "166",
      power: "6",
      toughness: "4",
      layout: "normal",
      multiverseid: "386483",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386483&type=card",
      watermark: "temur",
      rulings: [
        {
          date: "2014-09-20",
          text: "If the target creature can’t block Avalanche Tusker, but could block another attacking creature, it’s free to block that creature or block no creatures at all.",
        },
        {
          date: "2014-09-20",
          text: "If, during the declare blockers step, the target creature is tapped or is affected by a spell or ability that says it can’t block, then it doesn’t block. If there’s a cost associated with having that creature block, its controller isn’t forced to pay that cost. If the player doesn’t, the creature doesn’t block in that case either.",
        },
      ],
      foreignNames: [
        {
          name: "Lawinenbulle",
          text: "Immer wenn der Lawinenbulle angreift, blockt ihn in diesem Kampf eine Kreatur deiner Wahl, die der verteidigende Spieler kontrolliert, falls möglich.",
          type: "Kreatur — Elefant, Krieger",
          flavor:
            '„Was ist tödlicher für den Feind — die Lawine, oder was sie ausgelöst hat?" —Surrak, Khan der Temur',
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387290&type=card",
          language: "German",
          multiverseid: 387290,
        },
        {
          name: "Colmilludo de la avalancha",
          text: "Siempre que el Colmilludo de la avalancha ataque, la criatura objetivo que controla el jugador defensor bloquea este combate si puede.",
          type: "Criatura — Guerrero elefante",
          flavor:
            '"Mantengan la posición elevada y luego atraigan allí al enemigo". —Surrak, kan de los Temur',
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389173&type=card",
          language: "Spanish",
          multiverseid: 389173,
        },
        {
          name: "Terrocorne des avalanches",
          text: "À chaque fois que le Terrocorne des avalanches attaque, une créature ciblée que le joueur défenseur contrôle le bloque pendant ce combat si possible.",
          type: "Créature : éléphant et guerrier",
          flavor:
            "« Occupez le terrain, puis projetez-le sur votre ennemi. » —Surrak, khan des Temur",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387559&type=card",
          language: "French",
          multiverseid: 387559,
        },
        {
          name: "Zannuto delle Valanghe",
          text: "Ogniqualvolta lo Zannuto delle Valanghe attacca, una creatura bersaglio controllata dal giocatore in difesa lo blocca in questo combattimento, se può farlo.",
          type: "Creatura — Guerriero Elefante",
          flavor:
            '"Non cedete suolo al nemico, se non facendoglielo precipitare addosso." —Surrak, khan dei Temur',
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387828&type=card",
          language: "Italian",
          multiverseid: 387828,
        },
        {
          name: "なだれの大牙獣",
          text: "なだれの大牙獣が攻撃するたび、防御プレイヤーのコントロールするクリーチャー１体を対象とする。この戦闘で、それは可能ならこれをブロックする。",
          type: "クリーチャー — 象・戦士",
          flavor:
            "「高地を維持し、そして敵に向かって一気に攻勢をかける。」 ――ティムールのカン、スーラク",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388097&type=card",
          language: "Japanese",
          multiverseid: 388097,
        },
        {
          name: "눈사태 엄니전사",
          text: "눈사태 엄니전사가 공격할 때마다, 수비플레이어가 조종하는 생물을 목표로 정한다. 그 생물은 가능하면 이 전투에서 눈사태 엄니전사를 방어한다.",
          type: "생물 — 코끼리 전사",
          flavor:
            '"고지를 점령한 후, 언덕과 함께 내려가며 적들을 섬멸하라." —테무르의 칸 서락',
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388366&type=card",
          language: "Korean",
          multiverseid: 388366,
        },
        {
          name: "Dentudo da Avalanche",
          text: "Toda vez que Dentudo da Avalanche ataca, a criatura alvo controlada pelo jogador defensor o bloqueia neste combate se estiver apta.",
          type: "Criatura — Elefante Guerreiro",
          flavor:
            '"Domine a posição elevada. Depois, leve-a até seu inimigo." — Surrak, khan dos Temur',
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388635&type=card",
          language: "Portuguese (Brazil)",
          multiverseid: 388635,
        },
        {
          name: "Лавинный Бивень",
          text: "Каждый раз, когда Лавинный Бивень атакует, целевое существо под контролем защищающегося игрока блокирует его в этом бою, если может.",
          type: "Существо — Слон Воин",
          flavor:
            "«Займите высоту, а затем обрушьте ее на врага». — Суррак, хан Темура",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388904&type=card",
          language: "Russian",
          multiverseid: 388904,
        },
        {
          name: "崩击獠象",
          text: "每当崩击獠象攻击时，目标由防御牌手操控的生物本次战斗中若能阻挡它，则必须如此作。",
          type: "生物～象／战士",
          flavor: "「占据有利地势，将敌人一举击溃。」 ～铁木尔可汗苏拉克",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386752&type=card",
          language: "Chinese Simplified",
          multiverseid: 386752,
        },
        {
          name: "崩擊獠象",
          text: "每當崩擊獠象攻擊時，目標由防禦玩家操控的生物本次戰鬥中若能阻擋它，則必須如此作。",
          type: "生物～象／戰士",
          flavor: "「佔據有利地勢，將敵人一舉擊潰。」 ～鐵木爾可汗蘇拉克",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387021&type=card",
          language: "Chinese Traditional",
          multiverseid: 387021,
        },
      ],
      printings: ["KTK", "PKTK", "PRM"],
      originalText:
        "Whenever Avalanche Tusker attacks, target creature defending player controls blocks it this combat if able.",
      originalType: "Creature — Elephant Warrior",
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
      id: "a075afeb-1f0f-55f5-bd8b-5bc1f096a709",
    },
    {
      name: "Sandsteppe Citadel",
      cmc: 0.0,
      colorIdentity: ["B", "G", "W"],
      type: "Land",
      types: ["Land"],
      rarity: "Uncommon",
      set: "KTK",
      setName: "Khans of Tarkir",
      text: "Sandsteppe Citadel enters the battlefield tapped.\n{T}: Add {W}, {B}, or {G}.",
      flavor: "That which endures, survives.",
      artist: "Sam Burley",
      number: "241",
      layout: "normal",
      multiverseid: "386649",
      imageUrl:
        "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386649&type=card",
      watermark: "abzan",
      foreignNames: [
        {
          name: "Sandsteppenzitadelle",
          text: "Die Sandsteppenzitadelle kommt getappt ins Spiel.\n{T}: Erhöhe deinen Manavorrat um {W}, {B} oder {G}.",
          type: "Land",
          flavor: "Was standhaft ist, überlebt.",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387456&type=card",
          language: "German",
          multiverseid: 387456,
        },
        {
          name: "Ciudadela esteparenosa",
          text: "La Ciudadela esteparenosa entra al campo de batalla girada.\n{T}: Agrega {W}, {B} o {G} a tu reserva de maná.",
          type: "Tierra",
          flavor: "Aquello que resiste, sobrevive.",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389339&type=card",
          language: "Spanish",
          multiverseid: 389339,
        },
        {
          name: "Citadelle de la steppe de sable",
          text: "La Citadelle de la steppe de sable arrive sur le champ de bataille engagée.\n{T} : Ajoutez {W}, {B} ou {G} à votre réserve.",
          type: "Terrain",
          flavor: "Ce qui perdure survit.",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387725&type=card",
          language: "French",
          multiverseid: 387725,
        },
        {
          name: "Roccaforte delle Steppe Sabbiose",
          text: "La Roccaforte delle Steppe Sabbiose entra nel campo di battaglia TAPpata.\n{T}: Aggiungi {W}, {B} o {G} alla tua riserva di mana.",
          type: "Terra",
          flavor: "Ciò che resiste, sopravvive.",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387994&type=card",
          language: "Italian",
          multiverseid: 387994,
        },
        {
          name: "砂草原の城塞",
          text: "砂草原の城塞はタップ状態で戦場に出る。\n{T}：あなたのマナ・プールに{W}か{B}か{G}を加える。",
          type: "土地",
          flavor: "耐久できるものだけが生き残る。",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388263&type=card",
          language: "Japanese",
          multiverseid: 388263,
        },
        {
          name: "모래초원 성채",
          text: "모래초원 성채는 탭된 채로 전장에 들어온다.\n{T}: {W}, {B} 또는 {G}를 당신의 마나풀에 담는다.",
          type: "대지",
          flavor: "견디는 자만이 생존한다.",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388532&type=card",
          language: "Korean",
          multiverseid: 388532,
        },
        {
          name: "Cidadela da Estepe Arenosa",
          text: "Cidadela da Estepe Arenosa entra no campo de batalha virado.\n{T}: Adicione {W}, {B} ou {G} à sua reserva de mana.",
          type: "Terreno",
          flavor: "Aquilo que resiste, sobrevive.",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388801&type=card",
          language: "Portuguese (Brazil)",
          multiverseid: 388801,
        },
        {
          name: "Цитадель в Песчаной Степи",
          text: "Цитадель в Песчаной Степи выходит на поле битвы повернутой.\n{T}: добавьте {W}, {B} или {G} в ваше хранилище маны.",
          type: "Земля",
          flavor: "Тот, кто может выстоять, выживает.",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389070&type=card",
          language: "Russian",
          multiverseid: 389070,
        },
        {
          name: "沙原殿堂",
          text: "沙原殿堂须横置进战场。\n{T}：加{W}，{B}或{G}到你的法术力池中。",
          type: "地",
          flavor: "坚韧者方得生存。",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386918&type=card",
          language: "Chinese Simplified",
          multiverseid: 386918,
        },
        {
          name: "沙原殿堂",
          text: "沙原殿堂須橫置進戰場。\n{T}：加{W}，{B}或{G}到你的魔法力池中。",
          type: "地",
          flavor: "堅韌者方得生存。",
          imageUrl:
            "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387187&type=card",
          language: "Chinese Traditional",
          multiverseid: 387187,
        },
      ],
      printings: ["C16", "C17", "C20", "CM2", "CP3", "KTK", "MB1", "PRM"],
      originalText:
        "Sandsteppe Citadel enters the battlefield tapped.\n{T}: Add {W}, {B}, or {G} to your mana pool.",
      originalType: "Land",
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
      id: "bc9ad76c-3095-5f3b-8bc3-d9deac347cd7",
    },
  ];

  return (
    <>
      <CardList arrayOfCards={listOfCards}></CardList>
    </>
  );
};

export default ResultsPage;
