import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Add from './components/Add';

function Home() {
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
  );
}

export default Home;
