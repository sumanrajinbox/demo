import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import Loading from './Loading'



function Profile() {
    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <Paper>
                       <Loading/>
                    </Paper>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>

            </Grid>

        </>
    )
}

export default Profile
