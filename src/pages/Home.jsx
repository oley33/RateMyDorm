import React, { useState } from 'react';
import { Grid, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Add from './components/Add';

function Home() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme ({
    palette:{
      mode: mode
    },
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
    <Grid container bgcolor={"background.default"} color={"text.primary"}>
      {/* Navbar */}
      <Grid item xs={12}>
        <Navbar />
      </Grid>

      {/* Leftbar */}
      <Grid item xs={12} sm={3} md={2}>
        <Leftbar setMode={setMode} mode={mode}/>
      </Grid>

      {/* Feed */}
      <Grid item xs={12} sm={6} md={8} sx={{ overflowY: 'auto' }}>
        <Feed />
      </Grid>

      {/* Rightbar */}
      <Grid item xs={12} sm={3} md={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
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
