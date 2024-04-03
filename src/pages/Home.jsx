import React, { useState } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import { useQuery } from "react-query";
import axios from "axios";

function Home() {
  const [mode, setMode] = useState("light");

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("http://localhost:8080/dorm/all-dorms").then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  // Define custom themes for light and dark modes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
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
    </ThemeProvider>
  );
}

export default Home;
