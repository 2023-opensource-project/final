import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

export const SignupLink = styled(Link)`
  font-size: 12px;
  margin-top: 10px;
  text-decoration: none;
  color: inherit;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
`;
