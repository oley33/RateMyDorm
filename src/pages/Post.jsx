import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./comps/Navbar";
import { Grid } from "@mui/material";
import Sidebar from "./comps/Sidebar_TUT";
import Form from "./comps/Form";
import Rightbar from "./comps/Rightbar_TUT";

const PostPage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={4}>
            <Form/>
        </Grid>
        <Grid item xs={4}>
          <Rightbar />
        </Grid>
      </Grid>
    </>
  );
};

export default PostPage;
