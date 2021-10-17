import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // component: { Box },
        // display: 'flex',
        minHeight: theme.spacing(20),
        // alignContent: 'center',
        // justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        //   // padding: theme.spacing(2),
    },
    row: {
        margin: 0,
        width: '100%',
        backgroundColor: theme.palette.success.light
    }
}));

export default function Wallpaper() {
    const classes = useStyles();

    return (
        // <Container className={classes.root}
        //     maxWidth="xs"
        //     disableGutters={true}
        // >
        <Grid container
            maxWidth="xs"
            spacing={1}
            className={classes.row}
        >
            {[...Array(14)].map((item) => (
                <Grid item xs={12} sm={6} lg={3} >
                    <Paper
                        className={classes.paper}
                        square="true"
                    >
                        xs=3
                    </Paper>
                </Grid>
            ))}

        </Grid>
        // </Container>
    );
}
