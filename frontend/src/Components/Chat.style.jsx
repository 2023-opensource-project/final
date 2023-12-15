import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  overflow: auto;
  padding: 10px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const ChatInput = styled.input`
  flex-grow: 1;
  width: 85%;
  height: 35px;
  margin-right: 10px;
  padding: 0 5px;
  box-sizing: border-box;
`;

export const ChatButton = styled.button`
  width: 15%;
  height: 35px;
  padding: 0 5px;
  box-sizing: border-box;
`;
