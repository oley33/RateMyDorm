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
                    handleStyleFilterChange('Single Bed');
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
                    handleStyleFilterChange('Double Bed');
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
                    handleStyleFilterChange('Triple Bed');
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
                    handleStyleFilterChange('Apartment Style');
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
                    handleStyleFilterChange('Suite Style');
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
      
    </Grid>
  );
};

export default Rightbar;