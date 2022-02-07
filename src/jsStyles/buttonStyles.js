import styled from "styled-components";

export const ButtonGeneric = styled.button`
  border: none;
  font-family: monospace;
  border-radius: 10px;
  text-align: center;
`;

export const ButtonWood = styled(ButtonGeneric)`
  background-image: url("images/wooden-button.png") 300px 300px no-repeat;
  color: red;
`;
