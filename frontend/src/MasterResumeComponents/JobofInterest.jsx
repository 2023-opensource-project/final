import React from "react";
import { TextStyle } from "../Constants/style";
import { LineWrapper } from "./MasterResume.style";
import FormItem from "./FormItem";

function JobofInterest() {
  return (
    <div>
      <div style={{ margin: "40px 0 0 0" }}>
        <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
          <TextStyle textAlign="left" fontSize="20px" fontWeight="600" margin="10px 0">
            관심 직무
          </TextStyle>
        </div>
        <div style={{ backgroundColor: "#FAFAFA", padding: "10px" }}>
          <LineWrapper>
            <FormItem
              label="직무"
              type="dropdown"
              name="gender"
              options={[
                "경영ㆍ사무",
                "마케팅ㆍ광고ㆍ홍보",
                "무역ㆍ유통",
                "ITㆍ인터넷",
                "생산ㆍ제조",
                "영업ㆍ고객상담",
                "건설",
                "금융",
                "연구개발ㆍ설계",
                "디자인",
                "미디어",
                "전문ㆍ특수직",
              ]}
            />
          </LineWrapper>
        </div>
      </div>
    </div>
  );
}

export default JobofInterest;
