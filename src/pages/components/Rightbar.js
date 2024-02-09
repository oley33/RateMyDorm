import React, { useState } from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

const Rightbar = () => {
  const [showOnlyPhotos, setShowOnlyPhotos] = useState(false);
  const [ratingFilter, setRatingFilter] = useState('all');

  const handleShowOnlyPhotosChange = () => {
    setShowOnlyPhotos(!showOnlyPhotos);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
  };

  // Sample comments data
  const comments = [
    { id: 1, user: 'John Doe', avatarSrc: 'https://i.pravatar.cc/40', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, user: 'Jane Smith', avatarSrc: 'https://i.pravatar.cc/40', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, user: 'Bob Johnson', avatarSrc: 'https://i.pravatar.cc/40', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  ];

  return (
    <Grid container spacing={2} alignItems="flex-start" style={{ position: 'fixed'}}>
      {/* Photos Filter */}
      <Grid item xs={12} mt={9} direction={'vertical'}> {/* Adjusted marginTop */}
        <Typography variant="h6" fontWeight={100}>
          Filters
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={showOnlyPhotos}
              onChange={handleShowOnlyPhotosChange}
              color="primary"
            />
          }
          label="Single Bed"
        />
        
      </Grid>

      <Grid item xs={12} mt={-2} direction={'vertical'}> {/* Adjusted marginTop */}
        <FormControlLabel
          control={
            <Checkbox
              checked={showOnlyPhotos}
              onChange={handleShowOnlyPhotosChange}
              color="primary"
            />
          }
          label="Double Bed"
        />
      </Grid>

      <Grid item xs={12} mt={-2} direction={'vertical'}> {/* Adjusted marginTop */}
        <FormControlLabel
          control={
            <Checkbox
              checked={showOnlyPhotos}
              onChange={handleShowOnlyPhotosChange}
              color="primary"
            />
          }
          label="Triple Bed"
        />
      </Grid>

      <Grid item xs={12} mt={-2} direction={'vertical'}> {/* Adjusted marginTop */}
        <FormControlLabel
          control={
            <Checkbox
              checked={showOnlyPhotos}
              onChange={handleShowOnlyPhotosChange}
              color="primary"
            />
          }
          label="Suite Style"
        />
      </Grid>

      <Grid item xs={12} mt={-2} direction={'vertical'}> {/* Adjusted marginTop */}
        <FormControlLabel
          control={
            <Checkbox
              checked={showOnlyPhotos}
              onChange={handleShowOnlyPhotosChange}
              color="primary"
            />
          }
          label="Apartment Style"
        />
      </Grid>

      <Grid item xs={12} mt={-2} direction={'vertical'}> {/* Adjusted marginTop */}
        <FormControlLabel
          control={
            <Checkbox
              checked={showOnlyPhotos}
              onChange={handleShowOnlyPhotosChange}
              color="primary"
            />
          }
          label="On Main Campus"
        />
      </Grid>

      <Grid item xs={12} mt={-2} direction={'vertical'}> {/* Adjusted marginTop */}
        <FormControlLabel
          control={
            <Checkbox
              checked={showOnlyPhotos}
              onChange={handleShowOnlyPhotosChange}
              color="primary"
            />
          }
          label="Wheelchair Accessible"
        />
      </Grid>


      {/* Rating Filter */}
      <Grid item xs={12} mt={2}> {/* Adjusted marginTop */}
        <InputLabel id="rating-filter-label">Rating</InputLabel>
        <Select
          labelId="rating-filter-label"
          value={ratingFilter}
          onChange={handleRatingFilterChange}
          fullWidth
        >
          <MenuItem value="all">All Ratings</MenuItem>
          <MenuItem value="lowToHigh">Lowest to Highest</MenuItem>
          <MenuItem value="highToLow">Highest to Lowest</MenuItem>
        </Select>
      </Grid>

      {/* Comments Section */}
      <Grid item xs={12} mt={4}> {/* Adjusted marginTop */}
        <Divider />
        <Typography variant="h6" fontWeight={100} mt={2}>
          Comments
        </Typography>
        <List>
          {comments.map((comment) => (
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={comment.user} src={comment.avatarSrc} />
              </ListItemAvatar>
              <ListItemText
                primary={comment.user}
                secondary={comment.content}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Rightbar;