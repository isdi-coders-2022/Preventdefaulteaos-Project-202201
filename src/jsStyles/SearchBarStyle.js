import styled from "styled-components";

export const SearchBarContainer = styled.div`
  margin-top: 80px;
  width: 300px;
  border-radius: 25px;
  background-color: rgba(196, 196, 196, 0.8);
  &.searchBarContainer {
    display: flex;
    flex-direction: row;
    color: gray;
    align-items: center;
    justify-content: flex-start;
    border: 4px solid #2c514c;
    & label {
      padding-right: 10px;
      border-right: 4px solid #2c514c;
      padding: 10px;
    }
    & input {
      border: 0px;
      outline: none;
      border: specify yours;
      width: 80%;
      background: none;
    }
  }
`;
