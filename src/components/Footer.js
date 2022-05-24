import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const classes = {
    logo: {
        height: 150,
        marginLeft: '30%',
        marginTop: -20,
      },
}

const Footer = () => {
  return (
    <Box
        sx={{
            height: 270,
            position: 'relative',
            backgroundColor: '#56DEF4',
            boxShadow: '0px 0px 20px 1px #000000',
        }}
    >
        <Grid container>
            <Grid item xs={12} md={6} lg={4} sx={{ padding: 2, textAlign: 'center', fontFamily: 'Roboto' }} >
                <h3>Follow Us!</h3>
                <Grid item sx={{ mt: 8, fontSize: 10 }}>
                    <Button>
                        <FacebookIcon />
                    </Button>
                    <Button>
                        <InstagramIcon sx={{ mx: 3 }} />
                    </Button>
                    <Button>
                        <TwitterIcon />
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ borderLeft: '1px solid #000', borderRight: '1px solid #000', height: 260, padding: 2, textAlign: 'center', fontFamily: 'Roboto' }} >
                <h3>Contact Us!</h3>
                <Grid item sx={{ mt: 6 }}>
                    <h4>Phone: (012) 345-6789</h4>
                    <h4>Email: name@email.com</h4>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ padding: 2, textAlign: 'center', fontFamily: 'Roboto' }} >
                <Paper sx={{ p: 2, backgroundColor: 'rgba(250, 250, 250, 0.7)' }} >
                    <h2>Join Our Newsletter!</h2>
                    <h4>Would you like to hear about our latest products and deals? Sign up for updates via email.</h4>
                    <span>
                        <Grid item  >
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            defaultValue="name@email.com"
                            size="small"
                        />
                        </Grid>
                    </span>
                    <span>
                        <Grid item >
                            <Button>Subscribe</Button>
                        </Grid>
                    </span>
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: 0, textAlign: 'center', backgroundColor: '#56DEF4' }} >
            © 2022 Baked By Cara
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer