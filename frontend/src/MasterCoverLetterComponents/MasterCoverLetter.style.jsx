import styled from "styled-components";
import { TabContainer, Tab, Button } from "../Constants/style";

export const TabCon = styled(TabContainer)`
  flex-wrap: wrap;
`;

export const TabNew = styled(Tab)`
  width: 124px;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
`;

export const CustomButton = styled(Button)`
  width: 200px;
  height: 35px;
  margin: 10px;
`;

export const ResultContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  padding: 5px;
`;

export const Textarea = ({ name, value, onChange, rows }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      style={{
        width: "100%",
        height: "220px",
        padding: "5px",
        border: "1px solid #DEDEDE",
        borderRadius: "5px",
        boxSizing: "border-box",
        resize: "none",
      }}
    />
  );
};
