import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Card
      as={Link}
      to={`/post/${post.id}`}
      className="m-3 text-decoration-none text-dark"
    >
      <Card.Body>
        <Card.Title> {post.title} </Card.Title>
        <Card.Subtitle> {post.datetime} </Card.Subtitle>
        <Card.Text>
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
