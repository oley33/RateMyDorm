import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <>
      <h1>Post your reviews here</h1>
      <h2>What do you think of your experience at your dorm?</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default Post;
