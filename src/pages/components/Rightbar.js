import React, { useState } from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

const Rightbar = ({ onStyleFilterChange }) => {
  const [checkboxStates, setCheckboxStates] = useState({
    SingleBed: false,
    DoubleBed: false,
    TripleBed: false,
    SuiteStyle: false,
    ApartmentStyle: false,
    OnMainCampus: false,
  });

  const handleStyleFilterChange = (style) => {
    // Toggle the checkbox state and pass the selected style filter to the parent component
    setCheckboxStates(prevStates => ({
      ...prevStates,
      [style]: !prevStates[style],
    }));
    onStyleFilterChange(style);
  };

  // Sample comments data
  const comments = [
    { id: 1, user: 'Prof Kirlin', avatarSrc: 'https://i.pravatar.cc/40', content: 'LoSeRs.' },
    { id: 2, user: 'Prof Kugele', avatarSrc: 'https://i.pravatar.cc/41', content: 'I love Williford.' },
    { id: 3, user: 'Prof Sanders', avatarSrc: 'https://i.pravatar.cc/42', content: 'I will make a dorm in VR.' },
  ];

  return (
    <Grid container spacing={2} alignItems="flex-start" style={{ position: 'fixed' }}>
      {/* Filters */}
      <Grid item xs={12} mt={9}>
        <Typography variant="h6" fontWeight={100}>
          Filters
        </Typography>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxStates.SingleBed}
                  onChange={() => {
                    setCheckboxStates(prevStates => ({
                      ...prevStates,
                      SingleBed: !prevStates.SingleBed,
                    }));
                    handleStyleFilterChange('single');
                  }}
                  color="primary"
                />
              }
              label="Single Bed"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxStates.DoubleBed}
                  onChange={() => {
                    setCheckboxStates(prevStates => ({
                      ...prevStates,
                      DoubleBed: !prevStates.DoubleBed,
                    }));
                    handleStyleFilterChange('double');
                  }}
                  color="primary"
                />
              }
              label="Double Bed"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxStates.TripleBed}
                  onChange={() => {
                    setCheckboxStates(prevStates => ({
                      ...prevStates,
                      TripleBed: !prevStates.TripleBed,
                    }));
                    handleStyleFilterChange('triple');
                  }}
                  color="primary"
                />
              }
              label="Triple Bed"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxStates.ApartmentStyle}
                  onChange={() => {
                    setCheckboxStates(prevStates => ({
                      ...prevStates,
                      ApartmentStyle: !prevStates.ApartmentStyle,
                    }));
                    handleStyleFilterChange('apartment');
                  }}
                  color="primary"
                />
              }
              label="Apartment Style"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxStates.SuiteStyle}
                  onChange={() => {
                    setCheckboxStates(prevStates => ({
                      ...prevStates,
                      SuiteStyle: !prevStates.SuiteStyle,
                    }));
                    handleStyleFilterChange('suite');
                  }}
                  color="primary"
                />
              }
              label="Suite Style"
            />
          </Grid>
        </Grid>
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
