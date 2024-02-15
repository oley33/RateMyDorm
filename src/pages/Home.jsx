import React, { useEffect, useState } from "react";
import {Button} from "@mui/material"

const Home = () => {

  const[state, setState] = useState(false);

  useEffect(() => {
    console.log(state)
  },[state])

  return (
    <>
      <Button onClick={() => setState(!state)}>
        Click me
      </Button>
      {state ? <h1>Worked</h1> : null}
    </>
  );
}

export default Home;
