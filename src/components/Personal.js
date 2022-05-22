import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

const ariaLabel = { 'aria-label': 'description' };

const Personal = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleChange = e => {
        let field = e.target.placeholder
        
        switch(field) {
            case 'Name':
                setName(e.target.value)
                console.log(e.target.value)
                break
            case 'Address':
                setAddress(e.target.value)
                console.log(e.target.value)
                break
            case 'Phone':
                setPhone(e.target.value)
                console.log(e.target.value)
                break
            case 'Email':
                setEmail(e.target.value)
                console.log(e.target.value)
                break
        }
    }

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { ml: 14, mt: 4 },
        }}
        noValidate
        autoComplete="off"
        >
        <Input defaultValue={name} placeholder='Name' onChange={handleChange} inputProps={ariaLabel} />
        <Input defaultValue={address} placeholder='Address' onChange={handleChange} inputProps={ariaLabel} />
        <span><FormHelperText sx={{ textAlign: 'center' }} >Prices may vary for orders outside of Greenville, Tx</FormHelperText></span>
        <Input defaultValue={phone} placeholder='Phone' onChange={handleChange} inputProps={ariaLabel} />
        <Input defaultValue={email} placeholder='Email' onChange={handleChange} inputProps={ariaLabel} />
        </Box>
    );
}

export default Personal;