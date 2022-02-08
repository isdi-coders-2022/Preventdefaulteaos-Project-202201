import fakeArrayOfCards from "../../data/fakedata";
import PackOpenerCardList from "../PackOpenerCardList/PackOpenerCardList";

const PackOpenerContainer = () => {
  const boosterPackAPI = fakeArrayOfCards;

  return <PackOpenerCardList arrayOfCards={boosterPackAPI} />;
};

export default PackOpenerContainer;
