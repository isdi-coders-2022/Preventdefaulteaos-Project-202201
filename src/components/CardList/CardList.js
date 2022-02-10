import Card from "../Card/Card";

import { H2, CardListComponent } from "../../jsStyles/CardListStyles";
import { useContext, useEffect } from "react";
import ResultsContext from "../../store/contexts/ResultsContext";
import useMagicApi from "../../hooks/useMagicApi";

const CardList = () => {
  const { resultsCards } = useContext(ResultsContext);
  const { loadResultsCardsAPI } = useMagicApi();

  useEffect(() => {
    loadResultsCardsAPI();
  }, [loadResultsCardsAPI]);
  return (
    <>
      <H2>RESULTS:</H2>
      <CardListComponent>
        {resultsCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

export default CardList;
