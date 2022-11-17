import DataContext from "./context/DataContext";
import { useContext } from "react";
import Feed from "./Feed";

function Home() {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);

  return (
    <main>
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
