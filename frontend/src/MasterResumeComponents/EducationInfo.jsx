import { React, useState } from "react";
import { LineWrapper } from "./MasterResume.style";
import FormItem from "./FormItem";
import Section from "./Section";

function EducationInfo() {
  const [etcCount, setEtcCount] = useState(1);

  return (
    <div>
      <Section
        title="활동 및 교육 사항"
        items={(index) => (
          <>
            <LineWrapper>
              <FormItem
                label="구분"
                type="dropdown"
                name="etcClass"
                options={["교육", "아르바이트", "대외활동", "교내활동"]}
              />
              <FormItem label="회사/기관명" name={`etcCompanyName${index}`} />
            </LineWrapper>
            <LineWrapper>
              <FormItem label="시작(년/월)" type="month" name={`startMonth${index}`} />
              <FormItem label="종료(년/월)" type="month" name={`endMonth${index}`} />
            </LineWrapper>
          </>
        )}
        count={etcCount}
        setCount={setEtcCount}
      />
    </div>
  );
}

export default EducationInfo;
