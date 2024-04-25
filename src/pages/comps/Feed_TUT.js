import { CheckBox, ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import Poster from './Post_TUT'

const Feed = () => {
    return (
        <Box 
            
            flex={4}
            p={2}
        >
            <Poster/>
            <Poster/>
            <Poster/>
            <Poster/>
            <Poster/>
            
        </Box>
    )
}

export default Feed