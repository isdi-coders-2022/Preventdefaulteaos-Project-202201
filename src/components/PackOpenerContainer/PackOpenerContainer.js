import fakeArrayOfCards from "../../data/fakedata";
import Button from "../Button/Button";
import PackOpenerCardList from "../PackOpenerCardList/PackOpenerCardList";

const PackOpenerContainer = () => {
  const boosterPackAPI = fakeArrayOfCards;

  return (
    <>
      <Button type="create" text="OPEN PACK!" />
      <PackOpenerCardList arrayOfCards={boosterPackAPI} />;
    </>
  );
};

export default PackOpenerContainer;
