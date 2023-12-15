import { React, useState } from "react";
import { LineWrapper } from "./MasterResume.style";
import Section from "./Section";
import FormItem from "./FormItem";

function SchoolInfo() {
  const [educationCount, setEducationCount] = useState(1);

  return (
    <div>
      <Section
        title="학력 사항"
        items={(index) => (
          <>
            <LineWrapper>
              <FormItem
                label="구분"
                type="dropdown"
                name="schoolClass"
                options={["고등학교", "대학(2,3년)", "대학교(4년)", "대학원"]}
              />
              <FormItem label="학교명" name={`school${index}`} />
              <FormItem
                label="졸업 여부"
                type="dropdown"
                name={`graduated${index}`}
                options={["졸업", "졸업예정", "재학", "휴학"]}
              />
            </LineWrapper>
            <LineWrapper>
              <FormItem label="전공" name={`major${index}`} />
              <FormItem label="입학(년/월)" type="month" name={`startMonth${index}`} />
              <FormItem label="졸업(년/월)" type="month" name={`endMonth${index}`} />
            </LineWrapper>
          </>
        )}
        count={educationCount}
        setCount={setEducationCount}
      />
    </div>
  );
}

export default SchoolInfo;
