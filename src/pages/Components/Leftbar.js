import React from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Leftbar = ({ onDormFilterChange, dorms }) => {
  const handleDormClick = (dormName) => {
    console.log('Clicked dorm:', dormName);
    onDormFilterChange(dormName);
  };

  console.log('Dorms:', dorms);

  return (
    <div>
      <Typography variant="h6" fontWeight={100}>
        Dorms
      </Typography>
      <List>
        {dorms.map((dorm) => (
          <ListItem
            button
            key={dorm.id}
            onClick={() => handleDormClick(dorm.bldgName)}
          >
            <ListItemText primary={dorm.bldgName} />
          </ListItem>
        ))}
      </List>
      {/* Add a button line for other functionalities */}
      <Button variant="contained" color="primary" onClick={() => {/* Handle button click */}}>
        Other Functionality
      </Button>
    </div>
  );
};

export default Leftbar;