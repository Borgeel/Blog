import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

function PostPage({ posts, deleteHandler }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  console.log(post);

  return (
    <>
      {post && (
        <Card>
          <Card.Header as="h3"> {post.title} </Card.Header>
          <Card.Body>
            <Card.Subtitle> {post.datetime} </Card.Subtitle>
            <Card.Text> {post.body} </Card.Text>
            <Link to={`/edit/${post.id}`}>
              <Button variant="secondary">Edit Post</Button>
            </Link>
            <Button variant="danger" onClick={() => deleteHandler(post.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      )}
      {!post && (
        <Container>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </Container>
      )}
    </>
  );
}

export default PostPage;
