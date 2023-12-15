import React from "react";
import { TextStyle, Button } from "../Constants/style";
import { ItemWrapper } from "./MasterResume.style";

function Section({ title, items, count, setCount }) {
  const handleAddItem = (event) => {
    event.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ margin: "20px 0 0 0" }}>
      <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
        <TextStyle textAlign="left" fontSize="20px" fontWeight="600" margin="10px 0">
          {title}
          <Button
            type="button"
            onClick={handleAddItem}
            backgroundColor="#F4EBFF"
            width="30px"
            height="30px"
            margin="0 20px"
          >
            +
          </Button>
        </TextStyle>
      </div>
      {Array.from({ length: count }, (_, index) => (
        <ItemWrapper key={index}>{items(index)}</ItemWrapper>
      ))}
    </div>
  );
}

export default Section;
