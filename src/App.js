import React from "react";
import About from './About';
import Product from './Product';
import Login from './Login';
import User from './User';
import Home from './Home';
import Footer from './Footer';
import Appbar from './Appbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Signup from "./Signup";
import Ringtone from "./Ringtone";
import Wallpaper from "./Wallpaper";
import Profile from "./Profile";


const useStyles = makeStyles((theme) => ({
  root: {
    // margin: 0,
    // width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.primary['contrastText'],
    // paddingTop: theme.spacing(6)
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export default function App() {

  const classes = useStyles();
  return (


    <Container
      className={classes.root}
      disableGutters= {true}
      maxWidth = "true"
    >
      <Router>
        <Appbar />
        <Grid container style={{
          margin: 0,
          width: '100%',
        }}>
     
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
            // component={Box}
            // borderLeft={5}
            // borderColor="secondary.main"
            >
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/user">
                  <User />
                </Route>
                <Route path="/ringtone">
                  <Ringtone />
                </Route>
                <Route path="/wallpaper">
                  <Wallpaper />
                </Route>
                <Route path="/product">
                  <Product />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/Signup">
                  <Signup />
                </Route>
                <Route path="/Profile">
                  <Profile />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
                <Redirect exact from="/" to="/home" />
              </Switch>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </Container>
  );
}