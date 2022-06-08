import React from 'react'
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import { Link } from 'react-router-dom';

// Component imports
import Navbar from './Navbar'
import UserForm from './UserForm'
import MenuCard from './MenuCard'

// Image imports 
import Main from '../images/main.jpg'
import Logo from '../images/logo2.png'

// Styles
const classes = {
  main: {
    backgroundColor: 'tan',
  },
  mainImage: {
    backgroundImage: `url(${Main})`,
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  logo: {
    height: 150,
    marginTop: -20,
  },
  leftView: {
  
  },
  rightView: {
    height: '47.9rem',
    marginTop: 0,
    padding: 0,
    border: '1px solid #ddd',
    borderRadius: '1% 0 0 1%',
    boxShadow: '0px 0px 20px 1px #000000',
    backgroundColor: '#56DEF4',
  },
  rightViewCard: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  rightViewCardInner: {
    paddingTop: 80,
  },
  cardText: {
    padding: '20px 80px',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Roboto',
  },
  cardTitle: {
    textAlign: 'center',
    paddingTop: 30,
    fontFamily: 'Roboto',
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
    paddingTop: 10,
  },
  logoPaper: {
    borderRadius: 0,
    height: '7rem',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#FFF',
  },
  formPaper: {
    margin: 20,
    marginTop: 20,
    padding: 20,
    height: 550,
    boxShadow: '0px 0px 20px 1px #000000',
    backgroundColor: '#FFF',
    position: 'relative',
  },
  formPaperMd: {
    margin: 'auto',
    padding: 20,
    height: 550,
    width: '93%',
    boxShadow: '0px 0px 20px 1px #000000',
    backgroundColor: '#FFF',
    position: 'relative',
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "#1D3557",
    fontFamily: "Roboto",
    backgroundColor: "#F8BA1E",
  },
  gridItem: {
    justifyContent: "center",
  }
};

const Menu = () => {
  return (
    <div style={classes.main}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={5} lg={4}>
          <Paper style={classes.logoPaper} >
            <Link to='/' style={classes.homeLink} >
              <img src={Logo} alt='Logo for Baked By Cara' style={classes.logo} />
            </Link>
            <Hidden mdUp>
              <Navbar />
            </Hidden>
          </Paper>
          <Hidden mdDown>
            <Paper style={classes.formPaper} >
              <h1 style={classes.orderHeading} >Place an Order</h1>
              <UserForm />
            </Paper>
          </Hidden>
        </Grid>
        <Grid item xs={12} md={7} lg={8} style={classes.rightView} >
          <Hidden mdDown>
            <Navbar />
          </Hidden>
          <Paper style={classes.mainImage}>
            <Paper style={classes.rightViewCard} >
              <div style={classes.rightViewCardInner} >
                <MenuCard />
              </div>
            </Paper>
          </Paper>
          <Hidden mdUp >
            <Grid item xs={12} >
              <Paper style={classes.formPaperMd} >
                <h1 style={classes.orderHeading} >Place an Order</h1>
                <UserForm />
              </Paper>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default Menu;