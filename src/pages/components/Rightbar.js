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
  const [checkboxStates, setCheckboxStates] = useState({
    SingleBed: false,
    DoubleBed: false,
    TripleBed: false,
    SuiteStyle: false,
    ApartmentStyle: false,
    OnMainCampus: false,
    WheelchairAccessible: false,
  });
  const [ratingFilter, setRatingFilter] = useState('all');

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [checkboxName]: !prevStates[checkboxName],
    }));
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
      <Grid item xs={12} mt={9} direction={'vertical'}>
        <Typography variant="h6" fontWeight={100}>
          Filters
        </Typography>
        {Object.entries(checkboxStates).map(([key, value]) => (
          <Grid item xs={12} mt={-2} key={key} direction={'vertical'}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={() => handleCheckboxChange(key)}
                  color="primary"
                />
              }
              label={key.replace(/([A-Z])/g, ' $1').trim()}  // Convert camelCase to title case
            />
          </Grid>
        ))}
      </Grid>

      {/* Rating Filter */}
      <Grid item xs={12} mt={2}>
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
      <Grid item xs={12} mt={4}>
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
