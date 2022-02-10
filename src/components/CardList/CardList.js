import Card from "../Card/Card";
import PropTypes from "prop-types";
import CardListComponent from "../../jsStyles/CardListStyles";
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
      <CardListComponent>
        <h2>RESULTS:</h2>
        {resultsCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardListComponent>
    </>
  );
};

export default CardList;
