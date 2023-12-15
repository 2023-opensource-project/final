import React from "react";
import { TextStyle } from "../Constants/style";
import { LineWrapper } from "./MasterResume.style";
import FormItem from "./FormItem";

function PersonalInfo() {
  return (
    <div>
      <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px" }}>
        <TextStyle textAlign="left" fontSize="20px" fontWeight="600" margin="10px 0">
          기본 인적 사항
        </TextStyle>
      </div>
      <div style={{ backgroundColor: "#FAFAFA", padding: "10px" }}>
        <LineWrapper>
          <FormItem label="이름" name="name" />
          <FormItem label="영문 이름" name="englishName" />
          <FormItem label="성별" type="dropdown" name="gender" options={["남성", "여성"]} />
        </LineWrapper>
        <LineWrapper>
          <FormItem label="생년월일" type="date" name="birthDate" />
          <FormItem label="휴대폰" type="tel" name="phone" />
          <FormItem label="이메일" type="email" name="email" />
        </LineWrapper>
        <FormItem label="주소" name="address" />
      </div>
    </div>
  );
}

export default PersonalInfo;
