import React from 'react'
import { Link } from 'react-router-dom';

const classes = {
    navbar: {
        display: 'flex',
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        position: 'relative',
        backgroundColor: '#FFF',
    },
    homeLink: {
        color: '#000',
        padding: '0 100px',
        textDecoration: 'none',
    },
    link: {
        color: '#000',
        padding: '0 100px',
        textDecoration: 'none',
    },
}

const Navbar = () => {
  return (
    <nav style={classes.navbar} >
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