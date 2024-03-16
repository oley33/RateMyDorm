import React, { useState } from 'react';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { HolidayVillage } from '@mui/icons-material';

/* 
    this is the format that reactquery will return to you
    it is a stringify-ed json - each { } is an object with key value pairs
    "name" is the key and the dorm is the value
*/

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
    /* 
        this state is what the fetch will load data into
        for now it is just the mock data above
    */
    const [dorms, setDorms] = useState(dormList);

    return (
        /* 
            Render this sidebar from the list of dorms above:
            Use array.map()
        */
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
