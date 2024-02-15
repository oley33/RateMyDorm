import React, { useState } from 'react'
import { Avatar, Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Chat, Group, HolidayVillage, Home, Layers, ModeNight, Money, Person, Settings } from '@mui/icons-material'

/* 
    this is the format that reactquery will return to you
    it is a stringify-ed json - each { } is an object with key value pairs
    "name" is the key and the dorm is the value
*/

const dormList =
    [{ "name": "Bellingrath" },
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
    { "name": "Townsend" },]

const Leftbar = ({ mode, setMode }) => {

    /* 
        this state is what the fetch will load data into
        for now it is just the mock data above
    */
    const [dorms, setDorms] = useState(dormList)

    return (

        /* 
            Render this sidebar from the list of dorms above:
            Use array.map()
        */

        <Grid container spacing={.5} mt={6}>
            <Grid item xs={12} sm={3} md={2} style={{ position: 'fixed' }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Bellingrath Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Blount Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#groups">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="East Village Apartments" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#marketplace">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Ellett Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Glassel Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#settings">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Parkway Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Robb Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Robinson Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Spann Place Townhouses" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Stewart Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Townsend Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Trezevant Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Voorhies Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Voorhies-Townsend" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="West Village" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="White Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <HolidayVillage />
                            </ListItemIcon>
                            <ListItemText primary="Williford Hall" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#switch">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Leftbar