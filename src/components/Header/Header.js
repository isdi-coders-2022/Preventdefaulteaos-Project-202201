import { useState } from "react";
import { Header } from "../../jsStyles/HeaderStyles";
import BurgerComponent from "../Burguer/BurguerComponent";
import Button from "../Button/Button";
import FloatingMenu from "../FloatingMenu/FloatingMenu";

const HeaderComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(isActive ? false : true);
  };

  return (
    <Header>
      <div className="logo-container">
        <img src="images/magic-logo.svg.png" alt="magic logo"></img>
      </div>
      <FloatingMenu isActive={isActive} />
      <nav className="cont">
        <Button type="wood" text="HOME" />
        <Button type="wood" text="MY DECK" />
        <Button type="wood" text="MAKE YOUR CARD" />
      </nav>
      <BurgerComponent actionOnClick={toggleActive} isActive={isActive} />
    </Header>
  );
};

export default HeaderComponent;
