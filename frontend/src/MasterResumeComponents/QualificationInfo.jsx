import { React, useState } from "react";
import { LineWrapper } from "./MasterResume.style";
import FormItem from "./FormItem";
import Section from "./Section";

function QualificationInfo() {
  const [qualificationsCount, setQualificationsCount] = useState(1);

  return (
    <div>
      <Section
        title="자격 사항"
        items={(index) => (
          <>
            <LineWrapper>
              <FormItem label="자격증명" name={`qualificationName${index}`} />
              <FormItem label="발행처명" name={`qualificationCompanyName${index}`} />
              <FormItem label="수상일자" type="date" name={`qualificationDate${index}`} />
            </LineWrapper>
          </>
        )}
        count={qualificationsCount}
        setCount={setQualificationsCount}
      />
    </div>
  );
}

export default QualificationInfo;
