import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginCom from "../LoginComponents/LoginCom";

function Login({ users, setCurrentUser }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      navigate("/");
    }
  }, [setCurrentUser, navigate]);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user) => user.id === id && user.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      setErrorMessage("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <LoginCom
      handleLoginSubmit={handleLoginSubmit}
      id={id}
      handleIdChange={handleIdChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      errorMessage={errorMessage}
    />
  );
}

export default Login;
