import { React, useState } from "react";
import { LineWrapper } from "./MasterResume.style";
import FormItem from "./FormItem";
import Section from "./Section";

function AwardsInfo() {
  const [awardsCount, setAwardsCount] = useState(1);

  return (
    <div>
      <Section
        title="수상 사항"
        items={(index) => (
          <>
            <LineWrapper>
              <FormItem label="수상명" name={`awardsName${index}`} />
              <FormItem label="회사/기관명" name={`awardsCompanyName${index}`} />
              <FormItem label="수상일자" type="month" name={`awardsMonth${index}`} />
            </LineWrapper>
          </>
        )}
        count={awardsCount}
        setCount={setAwardsCount}
      />
    </div>
  );
}

export default AwardsInfo;
