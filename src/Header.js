import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";

function Header() {
  const { width } = useWindowSize();

  const iconColor = {
    color: "white",
    marginRight: "0.5rem",
    marginLeft: "auto",
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Blog</Navbar.Brand>
          {width < 768 ? (
            <FaMobileAlt style={iconColor} />
          ) : width < 992 ? (
            <FaTabletAlt style={iconColor} />
          ) : (
            <FaLaptop style={iconColor} />
          )}
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/post">
              Post
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
