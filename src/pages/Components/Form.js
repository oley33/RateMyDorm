import React from "react";
import { useState } from "react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import { FaStar } from "react-icons/fa";
// import DormSearch from "./DormSearch";
import axios from "axios";
import { useQuery } from "react-query";

const Form = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // Information from form
  const initialValues = {
    FirstNameValue: "",
    LastNameValue: "",
    Email: "",
    Review: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleTextInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // useState for dorm dropdown
  const handleTextSelectionChange = (event, newInputValue) => {
    if (newInputValue != null) {
      setselectedDormName(newInputValue["bldgName"]);
    } else {
      setselectedDormName("");
    }
  };
  const [selectedDormName, setselectedDormName] = useState("");

  // onChange function for checkboxes
  const handleCheckboxChange = (event) => {
    if (cleanChecked == "") {
      setCChecked("true");
    } else {
      setCChecked("");
    }
  };
  // useStates for checkboxes
  const [cleanChecked, setCChecked] = useState("");

  const [quietChecked, setQChecked] = useState("");
  // onChange and useState for kitchen Check
  const handleQuietChange = (event) => {
    if (quietChecked == "") {
      setQChecked("true");
    } else {
      setQChecked("");
    }
  };

  // get Data from DB
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("http://localhost:8080/dorm/all-dorms").then((res) => res.data),
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  // Room Style
  const dormStyleList = ["Single", "Double", "Triple", "Suite Style"];

  // Room Location
  const dormLocationList = ["East Campus", "West Campus", "Off-Campus"];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>Review</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="FirstNameValue"
          value={values.FirstNameValue}
          onChange={handleTextInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="LastNameValue"
          value={values.LastNameValue}
          onChange={handleTextInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          name="Email"
          value={values.Email}
          onChange={handleTextInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          onChange={handleTextSelectionChange}
          disablePortal
          id="dormSearch"
          options={data}
          getOptionLabel={(options) => options["bldgName"]}
          renderInput={(params) => <TextField {...params} label="Dorm" />}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          options={dormStyleList}
          renderInput={(params) => <TextField {...params} label="Room Style" />}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          options={dormLocationList}
          renderInput={(params) => (
            <TextField {...params} label="Room Location" />
          )}
        />
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
        <TextField
          fullWidth
          multiline
          id="review"
          label="Please enter your review here"
          name="Review"
          value={values.Review}
          onChange={handleTextInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <p>Check which options apply:</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                cleanCheckedchecked={cleanChecked}
                onChange={handleCheckboxChange}
              />
            }
            label="Quiet"
          />
          <FormControlLabel
            control={
              <Checkbox
                quietChecked={quietChecked}
                onChange={handleQuietChange}
              />
            }
            label="In unit kitchen"
          />
        </FormGroup>
      </Grid>
      <p>Check input value: {values.FirstNameValue}</p>
      <p>Last name: {values.LastNameValue}</p>
      <p>Email: {values.Email}</p>
      <p>rating: {rating}</p>
      <p>Data from dorm: {selectedDormName}</p>
      <p>{values.Review}</p>
      <p>this: {cleanChecked}</p>
      <p>check kitchen: {quietChecked}</p>
      <p>Room style: </p>
    </Grid>
  );
};

export default Form;
