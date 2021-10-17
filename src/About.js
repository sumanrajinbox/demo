import React from 'react'
import Typography from '@material-ui/core/Typography';
import {  Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        // margin: 0,
        height: "100vh",
        backgroundColor: theme.palette.grey[500],
        // paddingTop: theme.spacing(6)
    },
}));
function About() {
    const classes = useStyles();
    return (
        <Container className={classes.root} >
            {/* <AppBar>
                <Toolbar>
                    <Button> hello home </Button>
                </Toolbar>
            </AppBar> */}
            <Typography variant='h6'  > {[...Array(100)].map((item, key) => (
                Math.round(100) + key+ " hello demo item ")
            )}
            </Typography>
        </Container>
    )
}

export default About
