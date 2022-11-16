import React from "react";
import { Container } from "react-bootstrap";
import Feed from "./Feed";

function Home({ posts, fetchError, isLoading }) {
  return (
    <main>
      {/* <Container> */}
      {isLoading && <h3> Loading posts... </h3>}
      {fetchError && <h3 style={{ color: "red" }}> {fetchError} </h3>}
      {!isLoading && !fetchError && posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p> No posts to display. </p>
      )}
      {/* </Container> */}
    </main>
  );
}

export default Home;
