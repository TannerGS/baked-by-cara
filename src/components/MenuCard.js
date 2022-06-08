import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";

// Image imports
import CookieImage from '../images/cookie.jpg'
import Filler from '../images/filler.jpg'

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
            subheader="Price: $25/dozen"
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
            subheader="Sold Out!"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={Filler}
            alt="Chocolate Chip Cookie"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Oatmeal Raisin"
            subheader="Sold Out!"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={Filler}
            alt="Chocolate Chip Cookie"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="White Chocolate"
            subheader="Sold Out!"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={Filler}
            alt="Chocolate Chip Cookie"
          />
        </Card>
      </Grid>
      <Grid item xs={6} sm={4}  >
        <Card sx={{ maxWidth: 200, height: 215, m: 0.5 }}>
          <CardHeader
            title="Peanut Butter Almond"
            subheader="Sold Out!"
            style={classes.cardTitle}
          />
          <CardMedia
            component="img"
            height="160"
            image={Filler}
            alt="Chocolate Chip Cookie"
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
            image={Filler}
            alt="Chocolate Chip Cookie"
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default MenuCard;
