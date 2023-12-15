import { React, useState } from "react";
import { LineWrapper } from "./MasterResume.style";
import FormItem from "./FormItem";
import Section from "./Section";

function CareerInfo() {
  const [careerCount, setCareerCount] = useState(1);

  return (
    <div>
      <Section
        title="경력 사항"
        items={(index) => (
          <>
            <LineWrapper>
              <FormItem label="구분" type="dropdown" name="careerClass" options={["재직", "인턴", "아르바이트"]} />
              <FormItem label="회사/기관명" name={`companyName${index}`} />
              <FormItem label="직무" name={`position${index}`} />
            </LineWrapper>
            <LineWrapper>
              <FormItem label="입사(년/월)" type="month" name={`startMonth${index}`} />
              <FormItem label="퇴사(년/월)" type="month" name={`endMonth${index}`} />
            </LineWrapper>
          </>
        )}
        count={careerCount}
        setCount={setCareerCount}
      />
    </div>
  );
}

export default CareerInfo;
