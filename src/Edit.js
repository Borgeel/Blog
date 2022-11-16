import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Form, Container, Button } from "react-bootstrap";

function Edit({
  posts,
  editHandler,
  setEditBody,
  editTitle,
  setEditTitle,
  editBody,
}) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <Container>
      {editTitle && (
        <>
          <h3 className="mt-2">Edit Post</h3>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3 mt-5">
              <Form.Label htmlFor="title">Edit title: </Form.Label>
              <Form.Control
                id="title"
                type="text"
                name="title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="body">Edit body: </Form.Label>
              <Form.Control
                id="body"
                as="textarea"
                rows={3}
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="success"
              onClick={() => {
                editHandler(post.id);
              }}
            >
              Edit Post
            </Button>
          </Form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's dissapointing</p>
          <p>
            <Link to="/"> Visit Our Homepage </Link>
          </p>
        </>
      )}
    </Container>
  );
}

export default Edit;
