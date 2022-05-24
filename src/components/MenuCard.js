import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from "@mui/material/Grid";

// Image imports
import CookieImage from '../images/cookie.jpg'

const classes = {
  menuCard: {
    
  },
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
    <Grid container xs={10} sx={{ margin: 'auto' }}>
      <Grid item xs={4} >
        <Card sx={{ maxWidth: 345, m: 1 }}>
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
      <Grid item xs={4} style={classes.menuCard} >
        <Card sx={{ maxWidth: 345, height: 248, m: 1 }}>
          <CardHeader
            title="Peanut Butter"
            subheader="Price: $23/dozen"
            style={classes.cardTitle}
          />
          <CardContent sx={{ backgroundColor: 'gray' }} >
            <h3 style={classes.cardText} >
              Sold Out!
            </h3>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} >
        <Card sx={{ maxWidth: 345, height: 248, m: 1 }}>
          <CardHeader
            title="Oatmeal Raisin"
            subheader="Price: $19/dozen"
            style={classes.cardTitle}
          />
          <CardContent sx={{ backgroundColor: 'gray' }} >
            <h3 style={classes.cardText}>
              Sold Out!
            </h3>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} >
        <Card sx={{ maxWidth: 345, height: 248, m: 1 }}>
          <CardHeader
            title="White Chocolate"
            subheader="Price: $27/dozen"
            style={classes.cardTitle}
          />
          <CardContent sx={{ backgroundColor: 'gray' }} >
            <h3 style={classes.cardText}>
              Sold Out!
            </h3>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} >
        <Card sx={{ maxWidth: 345, height: 248, m: 1 }}>
          <CardHeader
            title="Peanut Butter Almond"
            subheader="Price: $22/dozen"
            style={classes.cardTitle}
          />
          <CardContent sx={{ backgroundColor: 'gray' }} >
            <h3 style={classes.cardText}>
              Sold Out!
            </h3>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} >
        <Card sx={{ maxWidth: 345, height: 248, m: 1 }}>
          <CardHeader
            title="Chocolate Brownies"
            subheader="Price: $20/dozen"
            style={classes.cardTitle}
          />
          <CardContent sx={{ backgroundColor: 'gray' }} >
            <h3 style={classes.cardText}>
              Sold Out!
            </h3>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default MenuCard;
