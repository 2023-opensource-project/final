import React, { useState } from "react";
import { Section } from "./SecondSection.style.jsx";
import { TabContainer, Tab, Inner, TextStyle } from "../Constants/style.jsx";
import TabContent from "./TabContent.jsx";

function SecondSection() {
  const data = [
    {
      Id: 1,
      CurrentProcess: "서류 작성 중",
      CompanyName: "(주)우아한형제들",
      Position: "배민푸드서비스실 배민푸드서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 2,
      CurrentProcess: "서류 작성 완료",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 3,
      CurrentProcess: "서류 지원 완료",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 4,
      CurrentProcess: "서류 합격",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
    {
      Id: 5,
      CurrentProcess: "서류 불합격",
      CompanyName: "(주)우아한형제들",
      Position: "로봇서비스개발팀 프론트엔드",
      Deadline: "2023-10-01",
      SubmissionDate: "2023-09-30",
      ResumeMaterial: "pdf",
      CoverLetterMaterial: "pdf",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [filteredData, setFilteredData] = useState(data);

  const handleTabChange = (value) => {
    setActiveTab(value);

    if (value === "all") {
      setFilteredData(data);
    } else if (value === "서류 지원 결과") {
      // 서류 합격과 서류 불합격 데이터를 필터링
      const filtered = data.filter(
        (item) => item.CurrentProcess === "서류 합격" || item.CurrentProcess === "서류 불합격"
      );
      setFilteredData(filtered);
    } else {
      // 다른 탭과 일치하는 데이터만 필터링
      const filtered = data.filter((item) => item.CurrentProcess === value);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <Section>
        <Inner>
          <TextStyle fontSize="24px" fontWeight="700" margin="10px 0">
            입사 지원 관리 현황
          </TextStyle>

          <TabContainer>
            <Tab onClick={() => handleTabChange("all")} active={activeTab === "all"}>
              전체보기
            </Tab>
            <Tab onClick={() => handleTabChange("서류 작성 중")} active={activeTab === "서류 작성 중"}>
              서류 작성 중
            </Tab>
            <Tab onClick={() => handleTabChange("서류 작성 완료")} active={activeTab === "서류 작성 완료"}>
              서류 작성 완료
            </Tab>
            <Tab onClick={() => handleTabChange("서류 지원 완료")} active={activeTab === "서류 지원 완료"}>
              서류 지원 완료
            </Tab>
            <Tab onClick={() => handleTabChange("서류 지원 결과")} active={activeTab === "서류 지원 결과"}>
              서류 지원 결과
            </Tab>
          </TabContainer>

          <TabContent filteredData={filteredData} />
        </Inner>
      </Section>
    </div>
  );
}

export default SecondSection;
