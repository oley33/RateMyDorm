import React, { useState } from "react";
import { Grid, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./comps/Navbar";
import Leftbar from "./comps/Leftbar";
import Feed from "./comps/Feed";
import Rightbar from "./comps/Rightbar";
import Add from "./comps/Add";
import { useQuery } from "react-query";
import axios from "axios";

function Home() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedDorm, setSelectedDorm] = useState(null); // State to store selected dorm
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("https://desolate-spire-74197-365605b6831f.herokuapp.com/dorm/all-dorms").then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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

  // Function to handle style filter change
  const handleStyleFilterChange = (style) => {
    setSelectedStyle(style);
  };

  // Function to handle dorm filter change
  const handleDormFilterChange = (dormName) => {
    console.log('Selected dorm:', dormName); // Log selected dorm
    setSelectedDorm(dormName); // Update selected dorm state
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container>
        {/* Navbar */}
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        {/* Leftbar */}
        <Grid item xs={12} sm={3} md={2}>
          {/* Pass the handleDormFilterChange function to the Leftbar */}
          <Leftbar onDormFilterChange={handleDormFilterChange} dorms={data} />
        </Grid>

        {/* Feed */}
        <Grid item xs={12} sm={6} md={8} sx={{ overflowY: "auto" }}>
          {/* Pass selectedDorm as a prop to the Feed component */}
          <Feed selectedDorm={selectedDorm} selectedStyle={selectedStyle} />
        </Grid>

        {/* Rightbar */}
        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Rightbar onStyleFilterChange={handleStyleFilterChange} />
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
