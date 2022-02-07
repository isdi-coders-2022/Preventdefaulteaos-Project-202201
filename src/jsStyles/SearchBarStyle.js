import styled from "styled-components";

export const SearchBarContainer = styled.div`
  margin: 0;
  padding: 10px;
  width: 200px;
  border-radius: 25px;
  &.searchBarContainer {
    display: flex;
    flex-direction: row;
    color: gray;  
    align-items: center;
    justify-content: center;
     border: 4px solid #2C514C;
     
    & .icon{
      padding-right: 10px;
      
    }
    & input{
     border: 0px;
     border-left: 4px solid #2C514C;
     outline: none;
     border: specify yours;
    }
`;
