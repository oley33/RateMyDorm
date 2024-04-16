import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { HolidayVillage } from '@mui/icons-material';
import { useQuery } from 'react-query';
import axios from 'axios';

const Leftbar = ({ onDormFilterChange }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("http://localhost:8080/dorm/all-dorms").then((res) => res.data),
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error fetching data';

  const handleDormClick = (dormName) => {
    // Pass the selected dorm name filter to the parent component
    onDormFilterChange(dormName);
  };

  return (
    <Paper sx={{ position: 'sticky', top: 0, maxHeight: '100vh', overflowY: 'auto' }}>
      <List>
        {data.map((dorm, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleDormClick(dorm.bldgName)}>
              <ListItemIcon>
                <HolidayVillage />
              </ListItemIcon>
              <ListItemText primary={dorm.bldgName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Leftbar;
