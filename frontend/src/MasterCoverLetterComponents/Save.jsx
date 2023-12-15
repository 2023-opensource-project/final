import React from "react";
import { FinalButtonContainer, FinalButton } from "../Constants/style";
import "react-toastify/dist/ReactToastify.css";

function Save({ handleSave }) {
  return (
    <div>
      <div style={{ borderTop: "1px dashed #DEDEDE", marginTop: "20px" }}>
        <FinalButtonContainer style={{ margin: "10px 0 40px 0" }}>
          <FinalButton onClick={handleSave}>저장</FinalButton>
        </FinalButtonContainer>
      </div>
    </div>
  );
}

export default Save;
