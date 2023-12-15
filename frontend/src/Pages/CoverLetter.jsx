import { React, useState } from "react";
import { Container, Inner } from "../Constants/style";
import CompanySelection from "../CoverLetterComponents/CompanySelection";
import CoverLetterTab from "../CoverLetterComponents/CoverLetterTab";
import OriginInput from "../CoverLetterComponents/OriginInput";
import GPTButton from "../MasterCoverLetterComponents/GPTButton";
import Recommend from "../MasterCoverLetterComponents/Recommend";
import FinalInput from "../MasterCoverLetterComponents/FinalInput";
import Save from "../MasterCoverLetterComponents/Save";
import { toast } from "react-toastify";

function CoverLetter() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [confirmedCompany, setConfirmedCompany] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [tabContents, setTabContents] = useState(Array(6).fill(""));
  const [textLength, setTextLength] = useState(0);
  const [operationResult, setOperationResult] = useState({ operation: "", result: "" });
  const [finalContent, setFinalContent] = useState("");

  const handleCompanySelect = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleJobSelect = (e) => {
    setSelectedJob(e.target.value);
  };

  const handleConfirmClick = () => {
    if (selectedCompany) {
      setConfirmedCompany(selectedCompany);
      setActiveTab(0);
    } else {
      alert("기업을 선택해주세요.");
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedContents = [...tabContents];
    updatedContents[activeTab] = value;
    setTabContents(updatedContents);
    setTextLength(value.length);
  };

  const handleOperation = (operation) => {
    const result = `${tabContents[activeTab]} -> "${operation}"을/를 적용한 수정 후 내용입니다.`;
    setOperationResult({ operation, result });
  };

  const handleFinalInputChange = (event) => {
    const { value } = event.target;
    setFinalContent(value);
  };

  const handleSave = () => {
    toast.success("성공적으로 저장되었습니다.");
  };

  return (
    <Container>
      <Inner>
        <CompanySelection
          selectedCompany={selectedCompany}
          handleCompanySelect={handleCompanySelect}
          selectedJob={selectedJob}
          handleJobSelect={handleJobSelect}
          handleConfirmClick={handleConfirmClick}
        />

        <div>
          {confirmedCompany && (
            <>
              <CoverLetterTab
                confirmedCompany={confirmedCompany}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
              />
              <OriginInput
                confirmedCompany={confirmedCompany}
                activeTab={activeTab}
                tabContents={tabContents}
                handleInputChange={handleInputChange}
                textLength={textLength}
              />
              <GPTButton handleOperation={handleOperation} />
              <Recommend operationResult={operationResult} />
              <FinalInput
                finalContent={finalContent}
                handleFinalInputChange={handleFinalInputChange}
                textLength={textLength}
              />
              <Save handleSave={handleSave} />
            </>
          )}
        </div>
      </Inner>
    </Container>
  );
}

export default CoverLetter;
