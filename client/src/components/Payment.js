import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Payment = ({ handleFormData, values }) => {
    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { mt: 6 },
        }}
        noValidate
        autoComplete="off"
        >
        <Grid container>
            <Grid item sx={{ textAlign: 'center', margin: 'auto' }} >
                <InputLabel id='contact' sx={{ p:2 }} >Preferred contact method?</InputLabel>
                <span>
                    <Select
                    label='contact'
                    labelId='contact'
                    defaultValue={values.contact}
                    onChange={handleFormData('contact')}
                    >
                    <MenuItem value='Phone'>Phone</MenuItem>
                    <MenuItem value='Email'>Email</MenuItem>
                    </Select>
                </span>
                <InputLabel id='payment' sx={{ p:2 }} >Select payment method</InputLabel>
                <span>
                    <Select
                    label='payment'
                    labelId='payment'
                    defaultValue={values.payment}
                    onChange={handleFormData('payment')}
                    >
                    <MenuItem value='Apple Pay'>Apple Pay</MenuItem>
                    <MenuItem value='Cash App'>Cash App</MenuItem>
                    <MenuItem value='Venmo'>Venmo</MenuItem>
                    </Select>
                </span>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Payment;