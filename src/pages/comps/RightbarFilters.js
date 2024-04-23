import React from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

const RightbarFilters = () => {
  const [filters, setFilters] = React.useState({
    single: false,
    double: false,
    apartmentStyle: false,
    onMainCampus: false,
    kitchen: false,
    wheelchairAccessible: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <FormControl component="fieldset">
      <Typography variant="h6" fontWeight={100} mt={2}>
        Filters
      </Typography>
      <FormGroup>
        {Object.entries(filters).map(([filter, checked]) => (
          <FormControlLabel
            key={filter}
            control={
              <Checkbox
                checked={checked}
                onChange={() => handleFilterChange(filter)}
                name={filter}
              />
            }
            label={filter}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default RightbarFilters;
