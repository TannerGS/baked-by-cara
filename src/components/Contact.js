import React from 'react'
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';

// Component imports
import NavbarLong from './NavbarLong'

// Image imports 

// Styles
const classes = {
  main: {
    flexGrow: 1,
    backgroundColor: '#F8BA1E',
    height: '47.1rem',
  },
  mainContainer: {
    height: 500,
    margin: '4rem 4rem',
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 20px 1px #000000',
  },
};

const Contact = () => {
  return (
    <div style={classes.main}>
      <NavbarLong />
      <Grid container>
        <Grid item xs={12} >
          <Paper style={classes.mainContainer} >

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;