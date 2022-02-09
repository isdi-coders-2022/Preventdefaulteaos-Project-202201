import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: #2c514c;
  width: 100vw;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  box-shadow: 0 0 10px 0;

  & div {
    width: 70vw;
    position: relative;
    height: 80px;
  }

  & img {
    width: 260px;
    position: absolute;
    height: 80px;
  }

  & nav {
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    width: 50px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    & button {
      display: none;
    }
  }
`;
