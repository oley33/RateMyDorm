import React from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material'
import { useQuery } from 'react-query';
import axios from 'axios';



const Leftbar = ({ onDormFilterChange, dorms }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("https://desolate-spire-74197-365605b6831f.herokuapp.com/dorm/all-dorms").then((res) => res.data),
  });

  const handleDormClick = (dormName) => {
    console.log('Clicked dorm:', dormName);
    onDormFilterChange(dormName);
  };

  if (isLoading) return 'Loading...';
  if (isError) return 'Error fetching data';
  console.log(data)

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
      <Button variant="contained" color="primary" onClick={() => {/* Handle button click */ }}>
        Other Functionality
      </Button>
    </div>
  );
}

export default Leftbar;
