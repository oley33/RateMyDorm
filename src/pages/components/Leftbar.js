import React, { useState } from 'react';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { HolidayVillage } from '@mui/icons-material';

const dormList = [
    { "name": "Bellingrath Hall" },
    { "name": "Blount Hall" },
    { "name": "East Village Apartments" },
    { "name": "Ellett Hall" },
    { "name": "Glassel Hall" },
    { "name": "Parkway Hall" },
    { "name": "Robb Hall" },
    { "name": "Robinson Hall" },
    { "name": "Spann Place Townhouses" },
    { "name": "Stewart Hall" },
    { "name": "Townsend Hall" },
    { "name": "Trezevant Hall" },
    { "name": "Voorhies Hall" },
    { "name": "Voorhies-Townsend" },
    { "name": "West Village" },
    { "name": "White Hall" },
    { "name": "Williford Hall" },
];

const Leftbar = () => {
    const [dorms, setDorms] = useState(dormList);

    return (
        <Grid container>
            <Grid item xs={12} sm={3} md={2} sx={{ position: 'fixed', overflowY: 'auto', height: '100vh' }}>
                <List>
                    {dorms.map((dorm, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton component="a" href={`#${dorm.name.toLowerCase().replace(/\s/g, '')}`}>
                                <ListItemIcon>
                                    <HolidayVillage />
                                </ListItemIcon>
                                <ListItemText primary={dorm.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
}

export default Leftbar;
