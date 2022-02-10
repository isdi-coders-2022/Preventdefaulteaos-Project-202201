import CardList from "../components/CardList/CardList";
import ResultsContextProvider from "../store/contexts/ResultsContextProvider";

const ResultsPage = () => {
  const fakeArrayOfCards = [
    {
      id: 1,
      name: "Overtaker",
      imageUrl:
        "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=97051&type=card",
    },
    {
      id: 2,
      name: "Heart-Piercer Bow",
      imageUrl:
        "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386551&type=card",
    },
  ];
  return (
    <>
      <ResultsContextProvider>
        <CardList arrayOfCards={fakeArrayOfCards}></CardList>
      </ResultsContextProvider>
    </>
  );
};

export default ResultsPage;
