import styled from "styled-components";

export const CreatedCardComponent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 300px;
  width: 200px;

  & img {
    position: absolute;
    top: 36px;
    left: 17px;
  }
  & h3 {
    font-size: 16px;
    position: absolute;
    top: -1px;
    left: 20px;
  }
  & .card--text {
    font-size: 15px;
    position: absolute;
    top: 180px;
    left: 20px;
  }
  & .card--type {
    font-size: 13px;
    position: absolute;
    top: 155px;
    left: 23px;
  }
  & button {
    position: absolute;
    top: 260px;
    left: 110px;
    width: 80px;
  }

  & .edit {
    position: absolute;
    top: 260px;
    left: 10px;
  }
`;
export const CreatedCardComponentRed = styled(CreatedCardComponent)`
  background-image: url("images/red-card-background.png");
`;

export const CreatedCardComponentBlue = styled(CreatedCardComponent)`
  background-image: url("images/blue-card-background.png");
`;
export const CreatedCardComponentWhite = styled(CreatedCardComponent)`
  background-image: url("images/white-card-background.png");
`;
export const CreatedCardComponentBlack = styled(CreatedCardComponent)`
  background-image: url("images/black-card-background.png");
`;
export const CreatedCardComponentGreen = styled(CreatedCardComponent)`
  background-image: url("images/green-card-background.png");
`;
