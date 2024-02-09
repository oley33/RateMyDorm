import React from 'react';
import { Grid, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { CheckBox, ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import Post from './Post';

const Feed = () => {
    return (
        <Grid container spacing={1} mt={3}>
            <Grid item xs={12} md={9}>
                <Post />
            </Grid>
            <Grid item xs={12} md={9}>
                <Post />
            </Grid>
            <Grid item xs={12} md={9}>
                <Post />
            </Grid>
            <Grid item xs={12} md={9}>
                <Post />
            </Grid>
            <Grid item xs={12} md={9}>
                <Post />
            </Grid>
        </Grid>
    );
}

export default Feed;
