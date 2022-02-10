import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50px;
  right: 0;
  position: absolute;

  @media (min-width: 600px) {
    display: none;
  }
`;

const FloatingMenu = ({ isActive }) => {
  return isActive ? (
    <Menu>
      <Link to="/home">
        <Button type="wood" text="HOME" />
      </Link>
      <Link to="/mydeck">
        <Button type="wood" text="MY DECK" />
      </Link>
      <Link to="/createcard">
        <Button type="wood" text="MAKE YOUR CARD" />
      </Link>
    </Menu>
  ) : (
    ""
  );
};

export default FloatingMenu;
