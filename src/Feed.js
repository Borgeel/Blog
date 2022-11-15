import React from "react";
import Post from "./Post";

function Feed({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </ul>
  );
}

export default Feed;
