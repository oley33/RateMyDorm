import React from "react";
import { useState } from "react";
import { FormControlLabel, FormGroup, Grid, TextField, Checkbox } from "@mui/material";
import { FaStar } from "react-icons/fa";
import DormSearch from "./DormSearch";

const Form = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const initialValues = {
    FirstNameValue: '',
    LastNameValue: '',
    Email: '',
    Review: '',
    
  };
  const [values, setValues] = useState(initialValues);

  const handleTextInputChange = event => {
    setValues({...values, [event.target.name]: event.target.value,});
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>Review</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required fullWidth id="firstName" label="First Name" name="FirstNameValue" value={values.FirstNameValue} onChange={handleTextInputChange} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required fullWidth id="lastName" label="Last Name" name="LastNameValue" value={values.LastNameValue}  onChange={handleTextInputChange}/>
      </Grid>
      <Grid item xs={12}>
        <TextField required fullWidth id="email" label="Email" name="Email" value={values.Email} onChange={handleTextInputChange}/>
      </Grid>
      <Grid item xs={12}>
        <DormSearch/>
      </Grid>
      <Grid item xs={12}>
        
        <p>Overall rating: {rating}</p>
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
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth multiline id="review" label="Please enter your review here" name="Review" value={values.Review} onChange={handleTextInputChange}/>
      </Grid>
      <Grid item xs={12}>
        <p>Check which options apply:</p>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Clean" />
          <FormControlLabel control={<Checkbox />} label="Quiet" />
          <FormControlLabel control={<Checkbox />} label="Loud" />
          <FormControlLabel control={<Checkbox />} label="Good Location" />
          <FormControlLabel control={<Checkbox />} label="Bugs" />
          <FormControlLabel control={<Checkbox />} label="Bug Free" />
        </FormGroup>
      </Grid>
      <p>Check input value: {values.FirstNameValue}</p>
      <p>Last name: {values.LastNameValue}</p>
      <p>Email: {values.Email}</p>
      <p>rating: {rating}</p>
      <p>Data from dorm: {}</p>
      <p>{values.Review}</p>
    </Grid>
    
  );
};

export default Form;
