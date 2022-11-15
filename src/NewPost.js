import { Form, Button, Container } from "react-bootstrap";

function NewPost({
  postBody,
  setPostBody,
  postTitle,
  setPostTitle,
  submitHandler,
}) {
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
