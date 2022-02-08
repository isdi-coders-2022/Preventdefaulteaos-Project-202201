import styled from "styled-components";

export const ButtonGeneric = styled.button`
  border: none;
  font-family: monospace;
  border-radius: 10px;
  text-align: center;
  width: 120px;
  height: 45px;
  font-size: 16px;
  font-family: monospace;
`;

export const ButtonWood = styled(ButtonGeneric)`
  background-image: url("images/wooden-button.png");
  background-position: center;
  color: #fff;
  object-fit: fill;
  border-radius: none;
  width: 250px;
  height: 100px;
  border-radius: none;
`;

export const ButtonOnCard = styled(ButtonGeneric)`
  background-color: #2c514c;
  border: 4px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #ffffff;
  height: 35px;
  font-size: 15px;
`;

export const ButtonFilter = styled(ButtonGeneric)`
  background-color: rgba(196, 196, 196, 0.8);
  border: 2px solid #2c514c;
  border-radius: 17px;
  margin: 5px;
`;

export const ButtonCreate = styled(ButtonGeneric)`
  background-color: #fab827;
  border: 4px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #ffffff;
  font-size: 20px;
`;
