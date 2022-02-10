import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../jsStyles/HeaderStyles";
import Burguer from "../Burguer/Burguer";
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
        <Link to="/home">
          <Button type="wood" text="HOME" />
        </Link>
        <Link to="/mydeck">
          <Button type="wood" text="MY DECK" />
        </Link>
        <Button type="wood" text="MAKE YOUR CARD" />
      </nav>
      <Burguer actionOnClick={toggleActive} isActive={isActive} />
    </Header>
  );
};

export default HeaderComponent;
