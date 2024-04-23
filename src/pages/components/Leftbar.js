import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';

const Leftbar = ({ onDormFilterChange, dorms }) => {
  const handleDormClick = (dormName) => {
    console.log('Clicked dorm:', dormName);
    onDormFilterChange(dormName);
  };

  console.log('Dorms:', dorms);

  return (
    <div>
      <List>
        {dorms.map((dorm) => (
          <ListItem
            button
            key={dorm.id}
            onClick={() => handleDormClick(dorm.bldgName)}
          >
            <ListItemAvatar>
              <Avatar>
                <HouseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={
              <Typography variant="h6" fontWeight={400} style={{ flexGrow: 1 }}>
                {dorm.bldgName}
              </Typography>
            } />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Leftbar;
