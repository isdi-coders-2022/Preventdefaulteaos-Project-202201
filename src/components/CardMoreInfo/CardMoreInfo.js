import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import CardMoreInfoStyle from "../../jsStyles/CardMoreInfoStyle";

const CardMoreInfo = () => {
  const { cardID } = useParams();
  const [cardDetail, setCardDetail] = useState(null);

  const getCard = useCallback(async () => {
    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards/${cardID}`
    );
    const card = await response.json();

    setCardDetail(card);
  }, [cardID]);

  useEffect(() => {
    getCard();
  }, [getCard]);

  return (
    cardDetail && (
      <CardMoreInfoStyle>
        <div className="card">
          {
            <img
              src={cardDetail.card.imageUrl}
              alt={`${cardDetail.card.name} card`}
            ></img>
          }
          {
            <section>
              <h3 className="card--name">{cardDetail.card.name}</h3>
              <p className="card--type">Type: {cardDetail.card.types}</p>
              <p className="card--color">Color: {cardDetail.card.colors}</p>
              <p className="card--rarity">Rarity: {cardDetail.card.rarity}</p>
              <p className="card--set">Set: {cardDetail.card.set}</p>
              <p className="card--number">Number: {cardDetail.card.number}</p>
              <p className="card--artist">Artist: {cardDetail.card.artist}</p>
              <Button type="onCard" text="ADD TO DECK" />
            </section>
          }
        </div>
      </CardMoreInfoStyle>
    )
  );
};

export default CardMoreInfo;
