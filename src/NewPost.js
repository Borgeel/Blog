import { useContext, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import DataContext from "./context/DataContext";
import { format } from "date-fns";
import api from "./api/posts";

function NewPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);

  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "dd, MMMM, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <Container>
      <h3 className="mt-2">New Post</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3 mt-5">
          <Form.Label htmlFor="title">Post title: </Form.Label>
          <Form.Control
            id="title"
            type="text"
            name="title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="body">Post body: </Form.Label>
          <Form.Control
            id="body"
            as="textarea"
            rows={3}
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Add Post
        </Button>
      </Form>
    </Container>
  );
}

export default NewPost;
