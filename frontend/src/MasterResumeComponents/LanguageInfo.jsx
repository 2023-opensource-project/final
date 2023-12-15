import { React, useState } from "react";
import { LineWrapper } from "./MasterResume.style";
import FormItem from "./FormItem";
import Section from "./Section";

function LanguageInfo() {
  const [languageCount, setLanguageCount] = useState(1);

  return (
    <div>
      <Section
        title="어학 사항"
        items={(index) => (
          <>
            <LineWrapper>
              <FormItem label="어학 이름" name={`languageName${index}`} />
              <FormItem label="자격명" name={`qualificationName${index}`} />
            </LineWrapper>
            <LineWrapper>
              <FormItem label="등급/점수" name={`gradeScore${index}`} />
              <FormItem label="응시일자" type="date" name={`testDate${index}`} />
            </LineWrapper>
          </>
        )}
        count={languageCount}
        setCount={setLanguageCount}
      />
    </div>
  );
}

export default LanguageInfo;
