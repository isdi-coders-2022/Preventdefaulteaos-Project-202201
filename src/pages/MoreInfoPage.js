import CardMoreInfo from "../components/CardMoreInfo/CardMoreInfo";

const MoreInfoPage = () => {
  const fakeCard = {
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
  };
  return <CardMoreInfo infoCard={fakeCard} />;
};

export default MoreInfoPage;
