import React from "react";
import { Container, Inner, FinalButtonContainer, FinalButton } from "../Constants/style";
import { Form } from "../MasterResumeComponents/MasterResume.style";
import JobofInterest from "../MasterResumeComponents/JobofInterest";
import PersonalInfo from "../MasterResumeComponents/PersonalInfo";
import SchoolInfo from "../MasterResumeComponents/SchoolInfo";
import CareerInfo from "../MasterResumeComponents/CareerInfo";
import EducationInfo from "../MasterResumeComponents/EducationInfo";
import LanguageInfo from "../MasterResumeComponents/LanguageInfo";
import AwardsInfo from "../MasterResumeComponents/AwardsInfo";
import QualificationInfo from "../MasterResumeComponents/QualificationInfo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MasterResume() {
  const handleSave = (e) => {
    e.preventDefault();
    toast.success("성공적으로 저장되었습니다.");
  };

  return (
    <Container>
      <Inner>
        <Form onSubmit={handleSave}>
          <JobofInterest />
          <PersonalInfo />
          <SchoolInfo />
          <CareerInfo />
          <EducationInfo />
          <LanguageInfo />
          <AwardsInfo />
          <QualificationInfo />

          <FinalButtonContainer>
            <FinalButton type="submit">제출</FinalButton>
          </FinalButtonContainer>
        </Form>
      </Inner>
    </Container>
  );
}

export default MasterResume;
