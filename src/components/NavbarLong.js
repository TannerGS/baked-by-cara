import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../images/logo2.png'

const classes = {
    navbar: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 111,
        position: 'relative',
        backgroundColor: '#000',
    },
    logo: {
        height: 150,
    },
    homeLink: {
        color: '#FFF',
        padding: '0 100px',
        textDecoration: 'none',
    },
    link: {
        color: '#FFF',
        padding: '0 100px',
        textDecoration: 'none',
    },
}

const Navbar = () => {
  return (
    <nav style={classes.navbar} >
        <Link to='/' style={classes.homeLink} >
            <img src={Logo} alt='Logo for Baked By Cara' style={classes.logo} />
        </Link>
        <Link to='/' style={classes.homeLink} >
            Home
        </Link>
        <Link to='/menu' style={classes.link} >
            Menu
        </Link>
        <Link to='/about' style={classes.link} >
            About Us
        </Link>
        <Link to='/contact' style={classes.link} >
            Contact Us
        </Link>
    </nav>
  )
}

export default Navbar