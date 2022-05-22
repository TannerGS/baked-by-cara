import React, { useState } from 'react'
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';

// Component imports
import Navbar from './Navbar'
import UserForm from './UserForm'

// Image imports 
import Main from '../images/main.jpg'
import Logo from '../images/logo2.png'

// Styles
const classes = {
  main: {
    flexGrow: 1,
    backgroundColor: '#F8BA1E',
    height: '48.6rem',
  },
  mainImage: {
    backgroundImage: `url(${Main})`,
    height: '92%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  logo: {
    height: 150,
    marginLeft: '30%',
    marginTop: -20,
  },
  homeLink: {

  },
  leftView: {
  
  },
  rightView: {
    height: '47rem',
    marginTop: 0,
    marginBottom: '0.7rem',
    border: '1px solid #ddd',
    borderRadius: '1% 0 0 1%',
    padding: '5px',
    boxShadow: '0px 0px 20px 1px #000000',
    backgroundColor: '#FFF',
  },
  button: {
    marginTop: '2rem',
    marginLeft: '30%',
    textAlign: "center",
    color: "#000",
    backgroundColor: '#56DEF4',
    fontFamily: "Roboto",
    fontSize: 20,
    border: '1px solid #000',
    borderRadius: '5%',
  },
  cookieHeading: {
    color: '#56DEF4',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },
  orderHeading: {
    textAlign: 'center',
    fontFamily: "Roboto",
  },
  logoPaper: {
    borderRadius: 0,
    height: '7rem',
    backgroundColor: '#000',
  },
  mainPaper: {
    height: '20rem',
    width: '40rem',
    margin: 'auto',
    backgroundColor: 'rgba(248, 186, 30, 0.2)',
  },
  formPaper: {
    margin: 20,
    padding: 20,
    height: 550,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "#1D3557",
    fontFamily: "Roboto",
    backgroundColor: "#F1FAEE",
  },
  gridItem: {
    justifyContent: "center",
  }
};

const About = () => {
  return (
    <div style={classes.main}>
      <Grid container spacing={3}>
        <Grid item xs={4} style={classes.leftView} >
          <Paper style={classes.logoPaper} >
            <Link to='/' style={classes.homeLink} >
              <img src={Logo} alt='Logo for Baked By Cara' style={classes.logo} />
            </Link>
          </Paper>
          <Paper style={classes.formPaper} >
            <h1 style={classes.orderHeading} >Place an Order</h1>
            <UserForm />
          </Paper>
        </Grid>
        <Grid item xs={8} style={classes.rightView} >
          <Navbar />
          <Paper>
            
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;