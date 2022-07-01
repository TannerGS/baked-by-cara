import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

const ariaLabel = { 'aria-label': 'description' };

const classes = {
    input: {
        marginBottom: 15,
        width: '80%',
    },
}

const Personal = ({ handleFormData, values }) => {
    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { mt: 1.8 },
        }}
        noValidate
        autoComplete="off"
        >
        <Grid container>
            <Grid item sx={{ textAlign: 'center', margin: 'auto', pt: 4 }} >
                <Input style={classes.input} defaultValue={values.name} placeholder='Name' onChange={handleFormData('name')} inputProps={ariaLabel} />
                <Input style={classes.input} defaultValue={values.address} placeholder='Address' onChange={handleFormData('address')} inputProps={ariaLabel} />
                <span><FormHelperText sx={{ textAlign: 'center' }} >Delivery ONLY available to the following zip codes: 12346, 12345, 12345, 12345, 12348</FormHelperText></span>
                <Input style={classes.input} defaultValue={values.phone} placeholder='Phone' onChange={handleFormData('phone')} inputProps={ariaLabel} />
                <Input style={classes.input} defaultValue={values.email} placeholder='Email' onChange={handleFormData('email')} inputProps={ariaLabel} />
            </Grid>
        </Grid>
        </Box>
    );
}

export default Personal;