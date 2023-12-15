import React from "react";
import { TextStyle } from "../Constants/style";
import { Textarea } from "./MasterCoverLetter.style";

function FinalInput({ finalContent, handleFinalInputChange, textLength }) {
  return (
    <div>
      <TextStyle textAlign="left" fontWeight="500" margin="10px 0">
        FINAL
      </TextStyle>
      <Textarea name="fianlContent" value={finalContent} onChange={handleFinalInputChange} />
      <div style={{ marginTop: "5px" }}>
        <TextStyle textAlign="right" fontSize="11px">
          글자 수 세기: {textLength}자
        </TextStyle>
      </div>
    </div>
  );
}

export default FinalInput;
