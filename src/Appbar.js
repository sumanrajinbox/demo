import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    selectionMobile: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
            justifyContent: "center"
        }
    }, selectionDesktop: {
        display: "flex",
        [theme.breakpoints.up("lg")]: {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }



}));


export default function Appbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const mobileMenu = (
        <Menu id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem to="/" component={NavLink} >Home</MenuItem>
            <MenuItem to="/user" component={NavLink} >User</MenuItem>
            <MenuItem to="/about" component={NavLink} >About</MenuItem>
            <MenuItem to="/product" component={NavLink} >Product</MenuItem>
            <MenuItem to="/login" component={NavLink} >login</MenuItem>
            <MenuItem to="/signup" component={NavLink} >signup</MenuItem>
            <MenuItem to="/prifile" component={NavLink} >Profile</MenuItem>
        </Menu>
    );

    return (

        <>
            <AppBar color="secondary" position="static" >
                <Toolbar variant="dense">
                    <Typography variant="h6"  >
                        Entertainment
                    </Typography>
                    <Box className={classes.selectionMobile}
                        component={Box}
                        display="flex"
                        justifyContent="center"
                        flexGrow={1}
                        // border={1}
                        // borderColor="primary.main"


                    >
                        <Button exact color='inherit' activeClassName={classes.selected} to="/" component={NavLink}> Home </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/about" component={NavLink}> About </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/user" component={NavLink}> User </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/ringtone" component={NavLink}> Ringtone </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/wallpaper" component={NavLink}> wallpaper </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/product" component={NavLink}> Product </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/profile" component={NavLink}> Profile </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/login" component={NavLink}> Login </Button>
                        <Button exact color='inherit' activeClassName={classes.selected} to="/signup" component={NavLink}> Signup </Button>
                    </Box>
                    <Box className={classes.selectionDesktop}
                        display="flex"
                        justifyContent="flex-end"
                        flexGrow={1}
                    >
                        <IconButton color="inherit"
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MenuIcon />

                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {mobileMenu}
        </>
    );
}
