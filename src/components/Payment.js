import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Payment = () => {
    const [contact, setContact] = useState('')
    const [payment, setPayment] = useState('')

    const handleChange = e => {
        setContact(e.target.value)
    }
    const handleChange1 = e => {
        setPayment(e.target.value)
    }

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { ml: 14, mt: 6 },
        }}
        noValidate
        autoComplete="off"
        >
        <InputLabel id='contact' >Preferred contact method?</InputLabel>
        <span>
            <Select
            label='contact'
            labelId='contact'
            value={contact}
            onChange={handleChange}
            >
            <MenuItem value={1}>Phone</MenuItem>
            <MenuItem value={2}>Email</MenuItem>
            </Select>
        </span>
        <InputLabel id='payment' >Select payment method</InputLabel>
        <span>
            <Select
            label='payment'
            labelId='payment'
            value={payment}
            onChange={handleChange1}
            >
            <MenuItem value={1}>Apple Pay</MenuItem>
            <MenuItem value={2}>Cash App</MenuItem>
            <MenuItem value={3}>Venmo</MenuItem>
            </Select>
        </span>
        </Box>
    );
}

export default Payment;