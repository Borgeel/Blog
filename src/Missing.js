import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Missing() {
  return (
    <Container>
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing</p>
      <p>
        <Link to="/">Visit Our Homepage</Link>
      </p>
    </Container>
  );
}

export default Missing;
