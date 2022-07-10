import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";

// Image imports
import CookieImage from '../images/cookie.jpg'
import PeanutImage from '../images/peanut.jpg'
import OatmealImage from '../images/oatmeal.jpg'
import SnickerdoodleImage from '../images/snickerdoodle.jpg'
import VarietyImage from '../images/variety.jpg'
import BrownieImage from '../images/brownies.jpg'

const classes = {
  cardText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 35,
  },
  cardTitle: {
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
}

const MenuCard = () => {

  return (
    <Grid container xs={10} sx={{ marginLeft: {xs: '3rem', sm: '4.5rem', md: '3rem', lg: '7rem'} }}>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Chocolate Chip"
            subheader="$15/half dozen"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={CookieImage}
            alt="Chocolate Chip Cookie"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  style={classes.menuCard} >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Peanut Butter"
            subheader="$15/half dozen"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={PeanutImage}
            alt="Peanut Butter Cookies"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Oatmeal Golden Raisin"
            subheader="$15/half dozen"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={OatmealImage}
            alt="Oatmeal Golden Raisin"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Snicker doodle"
            subheader="$15/half dozen"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={SnickerdoodleImage}
            alt="Snickerdoodle"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Variety 4 pack (one of each)"
            subheader="$12"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={VarietyImage}
            alt="Variety pack of cookies"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Chocolate Brownies"
            subheader="Sold Out!"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={BrownieImage}
            alt="Brownies"
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default MenuCard;
