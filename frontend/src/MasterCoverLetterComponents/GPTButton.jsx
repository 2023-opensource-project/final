import { React } from "react";
import { ButtonContainer, CustomButton } from "./MasterCoverLetter.style";

function GPTButton({ handleOperation }) {
  return (
    <ButtonContainer>
      {["맞춤법 검사", "글자수 늘리기", "글자수 줄이기", "소제목 생성"].map((operation) => (
        <CustomButton onClick={() => handleOperation(operation)} key={operation}>
          {operation}
        </CustomButton>
      ))}
    </ButtonContainer>
  );
}

export default GPTButton;
