import React from "react";
import { TextStyle } from "../Constants/style";
import { Textarea } from "../MasterCoverLetterComponents/MasterCoverLetter.style";
import companyList from "./CompanyList";

function OriginInput({ confirmedCompany, activeTab, tabContents, handleInputChange, textLength }) {
  return (
    <div>
      <TextStyle textAlign="left" fontWeight="500" margin="10px 0">
        ORIGIN <br />
        {companyList.find((company) => company.name === confirmedCompany).questions[activeTab]}
      </TextStyle>
      <Textarea name="content" value={tabContents[activeTab]} onChange={handleInputChange} />
      <div style={{ marginTop: "5px" }}>
        <TextStyle textAlign="right" fontSize="11px">
          글자 수 세기: {textLength}자
        </TextStyle>
      </div>
    </div>
  );
}

export default OriginInput;
