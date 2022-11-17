import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFatch from "../hooks/useAxiosFetch";
import api from "../api/posts";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editBody, setEditBody] = useState("");
  const { width } = useWindowSize();

  const history = useHistory();

  const { data, fetchError, isLoading } = useAxiosFatch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter((post) => {
      return (
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    });

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

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

  const deleteHandler = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const editHandler = async (id) => {
    const datetime = format(new Date(), "dd, MMMM, yyyy pp");
    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      history.push("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        width,
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        submitHandler,
        posts,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        editHandler,
        posts,
        deleteHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
