import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background-color: #2c514c;
  width: 100vw;
  flex-direction: row;
  height: 100px;

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
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & button {
      background-color: rgba(196, 196, 196, 0.9);
    }
  }

  @media (min-width: 600px) {
    & nav {
      align-items: center;
      flex-direction: row;
    }
  }
`;
