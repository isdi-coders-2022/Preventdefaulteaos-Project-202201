import styled from "styled-components";

const CardMoreInfoStyle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: #c4c4c4;
  width: 300px;
  height: 424px;
  border-radius: 15px;
  border: 2px solid #fff;
  padding-bottom: 8px;
  margin-top: 100px;

  & img {
    width: 120px;
    height: 170px;
    padding-left: 18px;
    margin-top: 10px;
  }

  & section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2px;

    & p {
      margin: 0;
      font-size: 16px;
      margin-left: 20px;
    }

    & h3 {
      margin: 3px 0;
      margin-left: 20px;
      font-size: 23px;
    }

    & button {
      margin: 3px 0;
      margin-left: 20px;
    }
  }
`;

export default CardMoreInfoStyle;
