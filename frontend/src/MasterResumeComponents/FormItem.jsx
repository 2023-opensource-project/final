import React from "react";
import { TextStyle } from "../Constants/style";
import { Container, Input, Dropdown } from "./MasterResume.style";

function FormItem({ label, type = "text", name, options }) {
  return (
    <div>
      <Container>
        <div style={{ width: "80px" }}>
          <TextStyle fontSize="14px" textAlign="left">
            {label}
          </TextStyle>
        </div>
        <div>
          {type === "dropdown" ? (
            <Dropdown name={name}>
              <option value="">선택하세요</option>
              {options.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </Dropdown>
          ) : (
            <Input type={type} name={name} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default FormItem;
