import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderContainer, Nav } from "./Header.style.jsx";
import { Inner, Button } from "../Constants/style.jsx";

function Header({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Inner>
        <Nav>
          <NavLink to="/" exact>
            LOGO
          </NavLink>
          <div>
            <ul>
              <li>
                <NavLink to="/masterResume" activeClassName="active">
                  마스터 이력서 작성
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/masterCoverLetter" activeClassName="active">
                  마스터 자기소개서 작성
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/CoverLetter" activeClassName="active">
                  기업별 자기소개서 작성
                </NavLink>
              </li>
            </ul>
            {currentUser ? (
              <div>
                <NavLink to="/mypage" style={{ margin: "10px" }}>
                  {currentUser.id}
                </NavLink>
                <Button margin="10px" onClick={handleLogout}>
                  로그아웃
                </Button>
              </div>
            ) : (
              <Button margin="10px" onClick={() => navigate("/login")}>
                로그인
              </Button>
            )}
          </div>
        </Nav>
      </Inner>
    </HeaderContainer>
  );
}

export default Header;
