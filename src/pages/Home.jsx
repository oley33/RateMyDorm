import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/post">
        <button>Post</button>
      </Link>
    </>
  );
};

export default Home;
