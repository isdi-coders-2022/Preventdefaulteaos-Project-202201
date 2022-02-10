import styled from "styled-components";

const CardMoreInfoComponent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background-color: #c4c4c4;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  border: 2px solid #fff;
  padding-bottom: 8px;

  & img {
    width: 120px;
    height: 170px;
    padding-left: 18px;
  }

  & section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2px;

    & p {
      margin: 0;
      font-size: 16px;
    }

    & h3 {
      margin: 3px 0;
      font-size: 23px;
    }

    & button {
      margin: 3px 0;
    }
  }
`;

export default CardMoreInfoComponent;
