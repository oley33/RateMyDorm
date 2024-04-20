import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Star, StarBorder, MoreVert, Share } from '@mui/icons-material';
import { useQuery } from 'react-query';
import axios from 'axios';

const Feed = ({ selectedStyle, selectedDorm }) => {
  const [selectedStars, setSelectedStars] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleStarToggle = (postIndex, starIndex) => {
    const updatedStars = [...selectedStars];
    updatedStars[postIndex] = starIndex < updatedStars[postIndex] ? starIndex + 1 : 0; // Toggle the number of selected stars for the post
    setSelectedStars(updatedStars);
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["reviewList"],
    queryFn: () =>
      axios.get("http://localhost:8080/review/all-reviews").then((res) => res.data),
  });

  useEffect(() => {
    // Filter data based on selected style and dorm
    if (data) {
      let filteredData = [...data];
      if (selectedStyle) {
        filteredData = filteredData.filter(post => post.style === selectedStyle);
      }
      if (selectedDorm) {
        filteredData = filteredData.filter(post => post.dormName === selectedDorm);
      }
      setFilteredData(filteredData);
    }
  }, [data, selectedStyle, selectedDorm]);

  if (isLoading) return 'Loading...';
  if (isError) return 'Error fetching data';

  return (
    <Grid container spacing={1} mt={2}>
      {filteredData.map((post, postIndex) => (
        <Grid item xs={12} md={11} key={postIndex}>
          <Card>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={`Dorm: ${post.dormName},  Published: ${post.date}, Style: ${post.style}`} /* Displaying title and date */
            />
            <CardMedia
              component="img"
              height="600"
              image={`https://source.unsplash.com/random/${postIndex}`}
              alt={post.dormName}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.text}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {[...Array(5)].map((_, starIndex) => (
                <IconButton
                  key={starIndex}
                  aria-label={`Star ${starIndex + 1}`}
                  onClick={() => handleStarToggle(postIndex, starIndex)}
                >
                  {starIndex < post.stars ? <Star /> : <StarBorder />}
                </IconButton>
              ))}
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
