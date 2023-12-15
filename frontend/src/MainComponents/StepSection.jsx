import React from "react";
import { Link as OriginalLink } from "react-router-dom";
import styled from "styled-components";
import { StepSection, StepObj, IconWrap } from "./FirstSection.style.jsx";
import { TextStyle } from "../Constants/style.jsx";
import { SlNote, SlNotebook, SlPaperClip } from "react-icons/sl";

const Link = styled(OriginalLink)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit; // 방문한 링크의 색상을 변경합니다.
  }

  &:active {
    color: inherit; // 활성화된 링크의 색상을 변경합니다.
  }
`;

function StepSections() {
  return (
    <StepSection>
      <Link to="/masterResume">
        <StepObj>
          <IconWrap>
            <SlNote size={28} color="#404040" />
          </IconWrap>
          <TextStyle fontSize="20px" fontWeight="500" margin="0 0 10px 0 ">
            STEP 01
          </TextStyle>
          <TextStyle fontSize="12px" fontWeight="300">
            마스터 이력서를
            <br />
            작성해 보세요.
          </TextStyle>
        </StepObj>
      </Link>

      <Link to="/masterCoverLetter">
        <StepObj>
          <IconWrap>
            <SlNotebook size={28} color="#404040" />
          </IconWrap>
          <TextStyle fontSize="20px" fontWeight="500" margin="0 0 10px 0 ">
            STEP 02
          </TextStyle>
          <TextStyle fontSize="12px" fontWeight="300">
            마스터 자기소개서를
            <br />
            작성해 보세요.
          </TextStyle>
        </StepObj>
      </Link>

      <Link to="/CoverLetter">
        <StepObj>
          <IconWrap>
            <SlPaperClip size={28} color="#404040" />
          </IconWrap>
          <TextStyle fontSize="20px" fontWeight="500" margin="0 0 10px 0">
            STEP 03
          </TextStyle>
          <TextStyle fontSize="12px" fontWeight="300">
            마스터 자기소개서를 이용해
            <br />
            기업별 자기소개서를
            <br />
            완성해 보세요.
          </TextStyle>
        </StepObj>
      </Link>
    </StepSection>
  );
}

export default StepSections;
