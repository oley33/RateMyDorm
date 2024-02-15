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
    <>
      <h1>
        Hello World!
      </h1>
    </>
  );
  }

export default Home;
