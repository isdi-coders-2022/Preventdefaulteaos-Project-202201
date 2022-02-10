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
      <Button type="wood" text="HOME" />
      <Button type="wood" text="MY DECK" />
      <Button type="wood" text="MAKE YOUR CARD" />
    </Menu>
  ) : (
    ""
  );
};

export default FloatingMenu;
