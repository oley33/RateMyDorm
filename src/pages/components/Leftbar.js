import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import { Chat, Group, HolidayVillage, Home, Layers, ModeNight, Money, Person, Settings } from '@mui/icons-material';

const dormList = [
  { "name": "Bellingrath" },
  { "name": "White" },
  { "name": "Glassell" },
  { "name": "East Village" },
  { "name": "West Village" },
  { "name": "Ellet" },
  { "name": "Robb" },
  { "name": "Trezevant" },
  { "name": "Robinson" },
  { "name": "Parkway" },
  { "name": "Spann" },
  { "name": "Stewart" },
  { "name": "Townsend" },
];

const Leftbar = ({ mode, setMode }) => {
  const [dorms, setDorms] = useState(dormList);

  return (
    <Grid container spacing={0.5} mt={6}>
      <Grid item xs={12} sm={3} md={2} style={{ position: 'fixed' }}>
        <List>
          {dorms.map((dorm) => (
            <ListItem disablePadding key={dorm.name}>
              <ListItemButton component="a" href={`#${dorm.name.toLowerCase()}`}>
                <ListItemIcon>
                  <HolidayVillage />
                </ListItemIcon>
                <ListItemText primary={dorm.name} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton component="a" href="#switch">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Leftbar;
