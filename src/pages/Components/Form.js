import React from "react";
import { Grid, TextField } from "@mui/material";

const Form = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>Review</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required fullWidth id="firstName" label="First Name" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required fullWidth id="lastName" label="Last Name" />
      </Grid>
      <Grid item xs={12}>
        <TextField required fullWidth id="email" label="Email" />
      </Grid>
      <Grid item xs={12}>
        <TextField required fullWidth id="dormName" label="Dorm Name" />
      </Grid>
      <Grid item xs={12}>
        <TextField required fullWidth id="stars" label="X out of 5 stars"/>
      </Grid>
    </Grid>
  );
};

export default Form;
