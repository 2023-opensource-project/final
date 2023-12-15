import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupCom from "../LoginComponents/SignupCom";
//import userdb from "../../../userdb";

function Signup({ users, setUsers }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const isValidId = (id) => {
    const idRegex = /^[A-Za-z0-9]{8,}$/;
    return idRegex.test(id);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^[A-Za-z0-9]{10,}$/;
    return passwordRegex.test(password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!isValidId(id) || !isValidPassword(password)) {
      setErrorMessage("아이디와 비밀번호의 조건을 확인하세요.");
    } else {
      const user = { id, password, name };
      localStorage.setItem("users", JSON.stringify([...JSON.parse(localStorage.getItem("users") || "[]"), user]));
      //
      setUsers([...users, user]);
      navigate("/login");
    }
  };

  // const user = { id, password, name };
  // localStorage.setItem("users", JSON.stringify([...JSON.parse(localStorage.getItem("users") || "[]"), user]));
  // navigate("/login");

  return (
    <SignupCom
      handleSignupSubmit={handleSignupSubmit}
      name={name}
      handleNameChange={handleNameChange}
      id={id}
      handleIdChange={handleIdChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      errorMessage={errorMessage}
    />
  );
}

export default Signup;
