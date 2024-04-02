import React from "react";
import { useState } from "react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Checkbox,
  Autocomplete,
  Button,
} from "@mui/material";
import { FaStar } from "react-icons/fa";
// import DormSearch from "./DormSearch";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

const Form = () => {
  const { mutate } = useMutation(() => {
    return fetch("http://localhost:8080/review/add-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ReviewObject),
    });
  });

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // Information from to
  const initialValues = {
    FirstNameValue: "",
    LastNameValue: "",
    Email: "",
    Review: "",
  };

  const [ReviewObject, setValues] = useState({
    dormId: -1,
    dormId: 0,
    dormName: "",
    text: "",
    stars: 0,
  });

  // [event.target.name] ...
  const handleTextInputChange = (event) => {
    setValues({ ...ReviewObject, [event.target.name]: event.target.value });
    console.log(ReviewObject);
  };

  // useState for dorm dropdown
  const handleTextSelectionChange = (event, newInputValue) => {
    if (newInputValue != null) {
      //setValues({ ...ReviewObject, dormName: newInputValue["bldgName"] });
      setValues({ ...ReviewObject, dormId: newInputValue["dormID"], dormName: newInputValue["bldgName"] });
    } else {
      setValues({ ...ReviewObject, dormName: "" });
      setValues({ ...ReviewObject, dormId: -1 });
    }
    console.log(ReviewObject);
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
        <Autocomplete
          onChange={handleTextSelectionChange}
          disablePortal
          id="dormSearch"
          options={data}
          name="dormName"
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
          // ReviewObject.stars = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ReviewObject.stars = rating}
                onClick={() => setRating(index+1)}
              />
              <FaStar
                className="star"
                size={40}
                color={
                  ReviewObject.stars <= (hover || rating)
                    ? "#ffc107"
                    : "#e4e5e9"
                }
                onMouseEnter={() => setHover(index+1)}
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
          name="text"
          value={ReviewObject.text}
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
      <Grid item xs={12}>
        <Button variant="contained" onClick={()=> {mutate()}}>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default Form;
