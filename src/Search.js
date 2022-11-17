import { useContext } from "react";
import DataContext from "./context/DataContext";

function Search() {
  const { search, setSearch } = useContext(DataContext);

  const formStyle = {
    height: "50px",
    backgroundColor: "gray",
    color: "white",
    display: "flex",
    padding: "0.5rem",
  };

  return (
    <form onSubmit={(e) => e.preventDefault} style={formStyle}>
      <label htmlFor="search"></label>
      <input
        type="text"
        value={search}
        name="search"
        placeholder="Search Posts"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: "8%" }}
      />
    </form>
  );
}

export default Search;
