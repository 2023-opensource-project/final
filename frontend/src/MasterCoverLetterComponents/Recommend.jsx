import React from "react";
import { TextStyle } from "../Constants/style";
import { ResultContainer } from "./MasterCoverLetter.style";

function Recommend({ operationResult }) {
  return (
    <div>
      {operationResult.result && (
        <div>
          <TextStyle textAlign="left" fontWeight="500" margin="10px 0">
            RECOMMEND
          </TextStyle>
          <ResultContainer>{operationResult.result}</ResultContainer>
        </div>
      )}
    </div>
  );
}

export default Recommend;
