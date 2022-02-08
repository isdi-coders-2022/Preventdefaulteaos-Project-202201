import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../jsStyles/HeaderStyles";
import Button from "../Button/Button";

const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo-container">
        <img src="images/magic-logo.svg.png" alt="magic logo"></img>
      </div>
      <nav>
        <Button type="wood" text="HOME" />
        <Button type="wood" text="MY DECK" />
        <Button type="wood" text="MAKE YOUR CARD" />
        <FontAwesomeIcon icon={faBars} />
      </nav>
    </Header>
  );
};

export default HeaderComponent;
