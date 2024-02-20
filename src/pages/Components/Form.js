import React from "react";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { FaStar } from "react-icons/fa";

const Form = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

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
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={40}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <p>Your rating is {rating}</p>
      </Grid>
    </Grid>
  );
};

export default Form;
