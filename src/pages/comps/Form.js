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
  FormControl,
  FormLabel
} from "@mui/material";
import { FaStar } from "react-icons/fa";
// import DormSearch from "./DormSearch";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { ConstructionOutlined } from "@mui/icons-material";

const Form = () => {
  const { mutate } = useMutation(() => {
    return fetch("https://desolate-spire-74197-365605b6831f.herokuapp.com/review/add-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ReviewObject),
    });
  });

  const imageHandler = (event) => {

    const file = event.target.files[0];
    
    const reader = new FileReader();

    reader.onload = function(event) {
      const fileContent = event.target.result;
      // console.log(fileContent);

      const byteCharacters = fileContent.split(',')[1];
      console.log(byteCharacters);

      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt[i];
      }

      const byteArray = new Uint8Array(byteNumbers);
      console.log(byteArray);
      
      let binaryString = '';
      for (let i = 0; i < byteArray.length; i++) {
        binaryString += String.fromCharCode(byteArray[i]);
      }

      binaryString = btoa(binaryString);
    
      // console.log(binaryString);
      postFunction(byteCharacters);
    }

    reader.readAsDataURL(file);
    
    const  postFunction = (byteArray) => {
      const imageObject = {dormId: ReviewObject.dormId, photo: byteArray};
      console.log(imageObject)
      fetch("https://desolate-spire-74197-365605b6831f.herokuapp.com/photo/add-photo", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(imageObject),
      })
      // .then(res => res.json())

      .catch(error => {
        console.error(error)
      })
  };
}

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [ReviewObject, setValues] = useState({
    dormId: -1,
    dormName: "",
    text: "",
    stars: 0,
    style: "",
  });

  ReviewObject.stars = rating;

  // [event.target.name] ...
  const handleTextInputChange = (event) => {
    setValues({ ...ReviewObject, [event.target.name]: event.target.value });
    console.log(ReviewObject);
  };

  // Filter control
  const styleOptions = [
    "Single Bed",
    "Double Bed",
    "Triple Bed",
    "Suite Style",
    "Apartment Style"
  ]

  const handleStyleChange = (event, newStyleValue) => {
    if (newStyleValue != null) {
      setValues({...ReviewObject, style: newStyleValue});
    }
    else {
      setValues({...ReviewObject, style: ""});
    }
  }

  // useState for dorm dropdown
  const handleTextSelectionChange = (event, newInputValue) => {
    if (newInputValue != null) {
      //setValues({ ...ReviewObject, dormName: newInputValue["bldgName"] });
      setValues({
        ...ReviewObject,
        dormId: newInputValue["dormID"],
        dormName: newInputValue["bldgName"],
      });
    } else {
      setValues({ ...ReviewObject, dormName: "", dormId: -1 });
    }
    console.log(ReviewObject);
  };
  const [selectedDormName, setselectedDormName] = useState("");

  // get Data from DB
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("https://desolate-spire-74197-365605b6831f.herokuapp.com/dorm/all-dorms").then((res) => res.data),
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(data);



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
          name="text"
          value={ReviewObject.text}
          onChange={handleTextInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          disablePortal
          onChange={handleStyleChange}
          id="dormStye"
          options={styleOptions}
          renderInput={(params) => <TextField {...params} label="Dorm Style" />}
        />
      </Grid>
      <Grid item xs={12}>
        <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler}/>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => {
            mutate();
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
