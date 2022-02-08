import styled from "styled-components";

export const SearchBarContainer = styled.div`
  margin: 0;
  width: 300px;
  border-radius: 25px;
  &.searchBarContainer {
    display: flex;
    flex-direction: row;
    color: gray;  
    align-items: center;
    justify-content: flex-start;
    border: 4px solid #2C514C;     
    & label{
      padding-right: 10px;
      border-right: 4px solid #2C514C; 
      padding: 10px;
    }
    & input{
      border: 0px;
      outline: none;
      border: specify yours;
      width: 80%;
    }
`;
