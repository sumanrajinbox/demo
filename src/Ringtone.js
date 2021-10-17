import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledSharpIcon from '@material-ui/icons/PlayCircleFilledSharp';
import { Box } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        // width: 151,
        flexGrow: 1
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    row: {
        margin: 0,
        width: '100%',
        backgroundColor: theme.palette.success.light
    },
    card: {
        // height: theme.spacing(20)
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        // flexGrow: 1,
        // backgroundColor: theme.palette.primary.light
    },
    first: {
        display: 'flex',
        padding: 3,
        // flexGrow: 1,
        // backgroundColor: theme.palette.primary.light
    },

    pos: {
        margin: 0,
        fontSize: "12px",
        color: theme.palette.grey[500]

    },
    cardAction: {
        // backgroundColor: "red",
        display: 'flex',
        justifyContent: "space-between"
    },
    tagChips: {
        margin: "2px",
        // color: "red",
        // backgroundColor:"primary",
    },
    tagContainer: {
        backgroundColor: theme.palette.info.light,
        display: 'flex',
        // flexGrow: 1,
        flexWrap: 'wrap',
        padding: 2,
        maxHeight: '90px',
    },
    description: {
        display: 'flex',
        justifyContent: 'space-evenly',
        // border:'solid thin red',
    }



}));


export default function Ringtone() {
    const classes = useStyles();
    return (

        <Grid container
            maxWidth="xs"
            spacing={1}
            className={classes.row}
        >
            {[...Array(14)].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <Paper
                        className={classes.paper}
                        square="true"
                    >
                        <Card className={classes.root} square="true">

                            <CardContent className={classes.first}

                            >
                                <IconButton aria-label="play/pause" color="secondary">
                                    <PlayCircleFilledSharpIcon className={classes.playIcon} />
                                </IconButton>
                                <div className={classes.subContent}>
                                    <Typography variant="h6" component="h6" gutterBottom>
                                        Best music Ringtone songs
                                    </Typography>
                                    <Box className={classes.description}>
                                        <Typography className={classes.pos} variant="h3" color="textSecondary">
                                            30 Sec
                                        </Typography>
                                        <Typography className={classes.pos} variant="h3" color="textSecondary">
                                            32367 Downloads
                                        </Typography>
                                    </Box>

                                </div>
                            </CardContent>
                            <CardContent
                                component={Box}
                                // display="flex"
                                // bgcolor='green'
                                className={classes.tagContainer}

                            >
                                {[...Array(20)].map((item, i) => (
                                    <Chip variant="outlined" size="small" label="Basic" className={classes.tagChips} key={i} />
                                ))}

                            </CardContent>

                            <CardActions
                                // disableSpacing
                                className={classes.cardAction}
                            >
                                <Box>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Box>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="outlined"

                                >
                                    Download
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            ))}

        </Grid>

    );
}
