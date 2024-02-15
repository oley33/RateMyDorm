import React, { useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Leftbar from "./Components/Leftbar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar"
import Add from "./Components/Add";


function Home() {
  const [mode, setMode] = useState("light");

  /*const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });*/

  return (
    <Grid container>
      {/* Navbar */}
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      {/* Leftbar */}
      <Grid item xs={12} sm={3} md={2}>
        <Leftbar />
      </Grid>

      {/* Feed */}
      <Grid item xs={12} sm={6} md={8} sx={{ overflowY: "auto" }}>
        <Feed />
      </Grid>

      {/* Rightbar */}
      <Grid
        item
        xs={12}
        sm={3}
        md={2}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Rightbar />
      </Grid>

      {/* Add */}
      <Grid item xs={12}>
        <Add />
      </Grid>
    </Grid>
  );
}

export default Home;
