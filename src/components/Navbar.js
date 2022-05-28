import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Root = styled('nav')(({ theme }) => ({
    display: 'flex',
    flex: 1,
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    position: 'relative',
    backgroundColor: '#56DEF4',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        position: 'relative',
        backgroundColor: '#56DEF4',
    },
}));

const classes = {
    navbar: {
        display: 'flex',
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        position: 'relative',
        backgroundColor: '#56DEF4',
    },
    homeLink: {
        color: '#000',
        padding: '0 10px',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    link: {
        color: '#000',
        padding: '0 10px',
        textDecoration: 'none',
        fontFamily: "Roboto",
        fontSize: '16px',
        fontWeight: 'bold',
    },
    active: {
        color: '#000',
        padding: '0 100px',
        textDecoration: 'none',
        fontFamily: "Roboto",
    },
}

const Navbar = () => {
  return (
    <Root>
        <Link to='/' style={classes.homeLink} >
            Home
        </Link>
        <Link to='/menu' style={classes.link} >
            Menu
        </Link>
        <Link to='/about' style={classes.link} >
            Our Story
        </Link>
    </Root>
  )
}

export default Navbar