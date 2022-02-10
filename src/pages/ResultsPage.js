import CardList from "../components/CardList/CardList";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";

const ResultsPage = () => {
  return (
    <>
      <ResultsContextProvider>
        <CardList />
      </ResultsContextProvider>
    </>
  );
};

export default ResultsPage;
