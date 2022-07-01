import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/material/styles';

import axios from 'axios';

const Root = styled('div')(({ theme }) => ({
    boxShadow: '0px 0px 20px 1px #000000',
    width: '100%',
    marginTop: '36.5rem',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
        marginTop: 0,
    },
}));
  
const Footer = () => {
    const [emailContent, setEmailContent] = useState({
        emailId: Math.floor(Math.random() * 1000000),
        email: '',
    })

    const handleChange = (value) => {
        setEmailContent({email: value})
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log(emailContent)
        postEmail(emailContent)
        setEmailContent({email: ''})
    }

    async function postEmail(emailContent) { 
        console.log(emailContent)
        await axios.post('http://localhost:5000/api/emails', emailContent)
          .then((res) => {
              console.log(res.data)
          }).catch((error) => {
              console.log(error)
          });
      }

  return (
      <Root>
        <Grid container >
            <Grid item xs={12} md={5} sx={{ padding: 2, pt: 4, textAlign: 'center', fontFamily: 'Roboto', backgroundColor: '#FFF', }} >
                <h2>Contact Us!</h2>
                <Grid item sx={{ mt: 4 }}>
                    <h4>Phone: (012) 345-6789</h4>
                    <h4>Email: name@email.com</h4>
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
            <Grid item xs={12} md={7} sx={{ padding: 2, textAlign: 'center', fontFamily: 'Roboto', backgroundColor: '#FFF', }} >
                <Paper sx={{ p: 2, mr: {xs: 0, sm: 2}, backgroundColor: 'rgba(86, 222, 244, 0.7)' }} >
                    <h2>Join Our Newsletter!</h2>
                    <h4>Would you like to hear about our latest products and deals? Sign up for updates via email.</h4>
                    <form onSubmit={handleSubmit}>
                        <span>
                            <Grid item  >
                            <TextField
                                label="Email"
                                id="outlined-size-small"
                                value={emailContent.email}
                                size="small"
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            </Grid>
                        </span>
                        <span>
                            <Grid item >
                                <Button
                                    type='submit'
                                >Subscribe</Button>
                            </Grid>
                        </span>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: 0, paddingBottom: 1, textAlign: 'center', backgroundColor: '#FFF' }} >
            © 2022 Baked By Cara
            </Grid>
        </Grid>
      </Root>
  )
}

export default Footer