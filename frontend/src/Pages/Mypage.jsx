import React from "react";
import { Container, Inner } from "../Constants/style";

function Mypage({ currentUser, posts }) {
  const userPosts = posts.filter((post) => post.userId === currentUser.id);

  return (
    <Container>
      <Inner>${currentUser}의 My Page 입니다.</Inner>
    </Container>
  );
}

export default Mypage;
