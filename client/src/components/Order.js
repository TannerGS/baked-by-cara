import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

const Order = ({ handleFormData, values }) => {
    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { mt: { xs: 6, sm: 3.6, md: 6 } },
        }}
        noValidate
        autoComplete="off"
        >
        <Grid container>
            <Grid item sx={{ margin: 'auto', textAlign: 'center' }} >
                <InputLabel id='type' sx={{ p:1 }} >What Kind?</InputLabel>
                <span>
                    <Select
                    label='type'
                    labelId='type'
                    defaultValue={values.product}
                    placeholder='product'
                    onChange={handleFormData('product')}
                    >
                    <MenuItem value='Chocolate Chip'>Chocolate Chip</MenuItem>
                    <MenuItem value='Peanut Butter'>Peanut Butter</MenuItem>
                    <MenuItem value='Oatmeal Golden Raisin'>Oatmeal Golden Raisin</MenuItem>
                    <MenuItem value='Snickerdoodle'>Snickerdoodle</MenuItem>
                    <MenuItem value='Variety Pack'>Variety Pack</MenuItem>
                    </Select>
                </span>
                <InputLabel id='amount' sx={{ mt: 0, p: 2 }} >How many Cookies? (Dozens)</InputLabel>
                <span>
                    <Select
                    label='amount'
                    labelId='amount'
                    defaultValue={values.quantity}
                    placeholder='quantity'
                    onChange={handleFormData('quantity')}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9+</MenuItem>
                    </Select>
                    <FormHelperText sx={{ textAlign: 'center' }} >Over 2.5lbs of cookies per dozen!</FormHelperText>
                </span>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Order;