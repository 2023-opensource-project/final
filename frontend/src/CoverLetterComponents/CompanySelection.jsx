import React from "react";
import styled from "styled-components";
import { Title, Button } from "../Constants/style";
import companyList from "./CompanyList";

const SelectBox = styled.select`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
`;

function CompanySelection({ selectedCompany, handleCompanySelect, selectedJob, handleJobSelect, handleConfirmClick }) {
  return (
    <div style={{ borderBottom: "1px dashed #DEDEDE", gap: "10px" }}>
      <Title>기업 공고 확인</Title>
      <SelectBox value={selectedCompany} onChange={handleCompanySelect}>
        <option value="">기업을 선택하세요</option>
        {companyList.map((company, index) => (
          <option key={index} value={company.name}>
            {company.name}
          </option>
        ))}
      </SelectBox>
      <SelectBox value={selectedJob} onChange={handleJobSelect}>
        <option value="">원하는 직무를 선택하세요</option>
        {companyList.map((company, index) => (
          <option key={index} value={company.job}>
            {company.job}
          </option>
        ))}
      </SelectBox>
      <Button onClick={handleConfirmClick} margin=" 0 10px ">
        확인
      </Button>
    </div>
  );
}

export default CompanySelection;
