
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox } from '@mui/material';
import { ExpandMore, Star, StarBorder, MoreVert, Share } from '@mui/icons-material';

const Feed = () => {
  const [selectedStars, setSelectedStars] = useState(Array.from({ length: 5 }, () => []));
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    // Simulate fetching data from a database
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Example API endpoint for fetching posts
        const response = await fetch('https://api.example.com/posts');
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

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


/*
 import React, { useState } from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox } from '@mui/material';
import { ExpandMore, Star, StarBorder, MoreVert, Share } from '@mui/icons-material';

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
 **/