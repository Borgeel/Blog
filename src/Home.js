import React from "react";
import { Container } from "react-bootstrap";
import Feed from "./Feed";

function Home({ posts }) {
  return (
    <Container>
      {posts.length ? <Feed posts={posts} /> : <p> No posts to show </p>}
    </Container>
  );
}

export default Home;
