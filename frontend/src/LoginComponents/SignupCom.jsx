import React from "react";
import { Title, Button, TextStyle } from "../Constants/style";
import { Container, Input, ErrorMessage } from "../LoginComponents/LoginCom.style";

function SignupCom({
  handleSignupSubmit,
  name,
  handleNameChange,
  id,
  handleIdChange,
  password,
  handlePasswordChange,
  errorMessage,
}) {
  return (
    <Container>
      <Title style={{ margin: "0" }}>회원가입</Title>

      <form onSubmit={handleSignupSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <Input type="text" placeholder="Name" value={name} onChange={handleNameChange} />

        <Input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
        <TextStyle fontSize="10px" textAlign="left" margin="5px 0 0 0">
          아이디는 영어, 숫자 8글자 이상 조합하세요.{" "}
        </TextStyle>

        <Input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <TextStyle fontSize="10px" textAlign="left" margin="5px 0 0 0">
          비밀번호는 영어, 숫자 10글자 이상 조합하세요.{" "}
        </TextStyle>

        <Button type="submit" width="calc(<Input>)" height="35px" margin="20px 0 0 0">
          회원가입
        </Button>
      </form>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

export default SignupCom;
