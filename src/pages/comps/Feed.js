import React, { useState } from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Star, StarBorder, MoreVert, Share } from '@mui/icons-material';
import { useQuery } from 'react-query';
import axios from 'axios';

const Feed = () => {
  const [selectedStars, setSelectedStars] = useState([]);

  const handleStarToggle = (postIndex, starIndex) => {
    const updatedStars = [...selectedStars];
    updatedStars[postIndex] = starIndex < updatedStars[postIndex] ? starIndex + 1 : 0; // Toggle the number of selected stars for the post
    setSelectedStars(updatedStars);
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["reviewList"],
    queryFn: () =>
      axios.get("https://desolate-spire-74197-365605b6831f.herokuapp.com/review/all-reviews").then((res) => res.data),
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error fetching data';

  return (
    <Grid container spacing={1} mt={2}>
      {data.map((post, postIndex) => (
        <Grid item xs={12} md={11} key={postIndex}>
          <Card>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={`Dorm: ${post.dormName},  Published: ${post.date}`} /* Displaying title and date */
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







/*
import React, { useState } from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox } from '@mui/material';
import { ExpandMore, Star, StarBorder, MoreVert, Share } from '@mui/icons-material';
*/



/*
const Feed = () => {
  const [selectedStars, setSelectedStars] = useState(Array.from({ length: 5 }, () => []));

  const handleStarToggle = (postIndex, starIndex) => {
    const updatedStars = [...selectedStars];

    // Toggle the star that was clicked
    const starPosition = updatedStars[postIndex].indexOf(starIndex);
    if (starPosition !== -1) {
      updatedStars[postIndex] = updatedStars[postIndex].slice(0, starPosition);
    } else {
      updatedStars[postIndex] = Array.from({ length: starIndex + 1 }, (_, i) => i);
    }

    setSelectedStars(updatedStars);
  };

  const posts = [
    { title: 'Post 1 Title', content: 'Post 1 content goes here.', image: 'https://source.unsplash.com/random/1' },
    { title: 'Post 2 Title', content: 'Post 2 content goes here.', image: 'https://source.unsplash.com/random/2' },
    { title: 'Post 3 Title', content: 'Post 3 content goes here.', image: 'https://source.unsplash.com/random/3' },
    { title: 'Post 4 Title', content: 'Post 4 content goes here.', image: 'https://source.unsplash.com/random/4' },
    { title: 'Post 5 Title', content: 'Post 5 content goes here.', image: 'https://source.unsplash.com/random/5' },
  ];

  return (
    <Grid container spacing={1} mt={9}>
      {posts.map((post, postIndex) => (
        <Grid item xs={12} md={11} key={postIndex}>
          <Card>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={post.title}
              subheader={`Post ${postIndex + 1} Subheader`}
            />
            <CardMedia
              component="img"
              height="600"
              image={post.image}
              alt={`Post ${postIndex + 1}`}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {[0, 1, 2, 3, 4].map((starIndex) => (
                <Checkbox
                  icon={<StarBorder />}
                  checkedIcon={<Star />}
                  key={starIndex}
                  checked={selectedStars[postIndex].includes(starIndex)}
                  onChange={() => handleStarToggle(postIndex, starIndex)}
                />
              ))}
              <IconButton aria-label="share">
                <Share />
              </IconButton>
              <IconButton
                aria-label="show more"
                edge="end"
              >
                <ExpandMore />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
*/ 
