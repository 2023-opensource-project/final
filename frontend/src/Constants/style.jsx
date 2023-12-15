import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Inner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const TextStyle = styled.p`
  text-align: ${(props) => props.textAlign || "center"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0"};
`;

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#E0D8FF"};
  color: ${(props) => props.color || "#404040"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "30px"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  margin: ${(props) => props.margin || "0"};
  text-align: center;
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: none;

  &:hover {
    border: 2px solid #9c9c9c;
    cursor: pointer;
  }
`;

export const FinalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

export const FinalButton = styled(Button)`
  width: 160px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
`;

export const TabContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin: 10px 0;
`;
export const Tab = styled.div`
  flex: 1;
  padding: 10px 0;
  text-align: center;
  font-weight: 500;
  background-color: ${(props) => (props.active ? "#F4EBFF" : "transparent")};
  border: 1px solid #fafafa;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #bcb3da;
  }
`;
