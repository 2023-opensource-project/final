import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #fcf7ff;
  height: 60px;
  border-bottom: 1px solid #dedede;
  padding: 0 100px;

  a {
    text-decoration: none;
    color: #404040;
  }

  a.active {
    font-weight: 600;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    gap: 20px;
    margin-right: 0;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      font-size: 14px;

      a {
        text-decoration: none;
        color: #404040;
      }
    }
  }
`;
