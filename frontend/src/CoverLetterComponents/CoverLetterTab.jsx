import React from "react";
import { Title, TabContainer, Tab, TextStyle } from "../Constants/style";
import companyList from "./CompanyList";

function CoverLetterTab({ confirmedCompany, handleTabClick, activeTab }) {
  const company = companyList.find((company) => company.name === confirmedCompany);
  const questions = company ? company.questions : [];

  return (
    <div>
      <Title>{confirmedCompany} 자기소개서</Title>
      <TabContainer style={{ marginTop: "0" }}>
        {[...Array(6)].map((_, index) => {
          if (index < questions.length) {
            return (
              <Tab key={index} onClick={() => handleTabClick(index)} active={activeTab === index}>
                <TextStyle fontSize="14px">문항{index + 1}</TextStyle>
              </Tab>
            );
          } else {
            return (
              <Tab key={index} style={{ cursor: "not-allowed", backgroundColor: "transparent" }}>
                <TextStyle fontSize="14px"></TextStyle>
              </Tab>
            );
          }
        })}
      </TabContainer>
    </div>
  );
}

export default CoverLetterTab;
