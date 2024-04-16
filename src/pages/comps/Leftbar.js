import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { HolidayVillage } from '@mui/icons-material';
import { useQuery } from 'react-query';
import axios from 'axios';

const Leftbar = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("https://desolate-spire-74197-365605b6831f.herokuapp.com/dorm/all-dorms").then((res) => res.data),
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error fetching data';
  console.log(data)
  
  return (
    <Paper sx={{ position: 'sticky', top: 0, maxHeight: '100vh', overflowY: 'auto' }}>
      <List>
        {data.map((dorm, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href={`#${dorm.bldgName}`}>
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
