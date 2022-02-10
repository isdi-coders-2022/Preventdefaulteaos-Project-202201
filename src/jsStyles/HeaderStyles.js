import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: #2c514c;
  width: 100vw;
  flex-direction: row;
  height: 50px;
  position: fixed;
  justify-content: space-between;
  box-shadow: 0 0 5px 0;
  & .logo-container {
    width: 70vw;
    position: relative;
    height: 80px;
    & img {
      width: 260px;
      position: absolute;
      height: 80px;
    }
  }
  & .cont {
    display: none;
    & button {
      display: none;
    }
  }

  @media (min-width: 600px) {
    & .cont {
      display: flex;
      flex-direction: row;
      color: #fff;
      border-radius: none;
      & button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-position: center;
        height: 40px;
        margin: 5px;
        background-size: 260px;
        background-image: url("images/wooden-button.png");
        border: none;
      }
    }
  }
`;

export const Menu = styled.nav`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  width: 50px;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;

  & .hamburguer-container {
    display: flex;
    flex-direction: column;
    transition: all 0.2s;
    & .hamburguer {
      background-color: black;
      padding: 2px;
      margin: 3px;
      width: 30px;
      border-radius: 5px;
    }
    &.active .hamburguer:nth-child(2) {
      opacity: 0;
    }
    &.active .hamburguer:nth-child(1) {
      transform: rotate(45deg) translate(7.5px, ${33 / 2 - 4.5}px);
    }
    &.active .hamburguer:nth-child(3) {
      transform: rotate(-45deg) translate(7.5px, -${33 / 2 - 4.5}px);
    }
  }

  & button {
    display: none;
  }
`;
