import React from "react";
import { Section } from "./FirstSection.style.jsx";
import { Inner, TextStyle } from "../Constants/style.jsx";
import StepSection from "./StepSection.jsx";

function FirstSection() {
  return (
    <Section>
      <Inner>
        <TextStyle fontSize="36px" fontWeight="700" margin="0 0 20px 0">
          챗봇 AI를 활용한 구직자 맞춤형 <br />
          자기소개서 자동 완성 플랫폼
        </TextStyle>
        <TextStyle fontSize="16px" margin="0 0 40px 0 ">
          다음 STEP을 따라 입사 지원 시에 필요한 서류를 완성해보세요.
        </TextStyle>

        <StepSection />
      </Inner>
    </Section>
  );
}

export default FirstSection;
