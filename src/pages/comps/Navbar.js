import React, { useState } from 'react'
import { AppBar, styled, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { Mail, Notifications } from '@mui/icons-material';
import PetsIcon from '@mui/icons-material/Pets';



const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"

});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled("Box")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled("Box")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));



const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    RateMyDorm
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search..."></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }}
                        src="/static/images/avatar/1.jpg"
                        onClick={e=>setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}
>
                    <Avatar sx={{ width: 30, height: 30 }}
                        src="/static/images/avatar/1.jpg"
                    />
                    <Typography variant="span">Hayley Herlich</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar