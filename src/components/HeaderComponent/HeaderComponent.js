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
        <Link to="/home">
          <img src="images/magic-logo.svg.png" alt="magic logo"></img>
        </Link>
      </div>
      <FloatingMenu isActive={isActive} />
      <nav className="cont">
        <Link to="/home">
          <Button type="wood" text="HOME" />
        </Link>
        <Link to="/mydeck">
          <Button type="wood" text="MY DECK" />
        </Link>
        <Link to="/createcard">
          <Button type="wood" text="MAKE YOUR CARD" />
        </Link>
      </nav>
      <Burguer actionOnClick={toggleActive} isActive={isActive} />
    </Header>
  );
};

export default HeaderComponent;
