import DataContext from "./context/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import { Button, Nav } from "react-bootstrap";

function Home() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);

  return (
    <main>
      <Nav.Link as={Link} to="/post" className="add-post">
        <Button
          variant="warning"
          style={{
            marginLeft: "2rem",
          }}
        >
          Add New Post
        </Button>
      </Nav.Link>
      {isLoading && <h3> Loading posts... </h3>}
      {fetchError && <h3 style={{ color: "red" }}> {fetchError} </h3>}
      {!isLoading && !fetchError && searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p> No posts to display. </p>
      )}
    </main>
  );
}

export default Home;
