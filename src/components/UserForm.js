import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Component imports
import Personal from './Personal'
import Order from './Order'
import Payment from './Payment'

const steps = ['Personal Information', 'Order', 'Payment'];

const UserForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderPage = () => {
    switch(activeStep) {
        case 0:
            return <Personal />
        case 1:
            return <Order />
        case 2:
            return <Payment />
        default:
            return <Personal />  
      }
  }

  const resetForm = () => {
    setTimeout(() => {
      setActiveStep(0)
    }, "5000")
  }

  return (
    <Box sx={{ width: {xs: '100%', sm: '97%'} }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 12, mb: 12, mx: 10 }}>
            Thank you for placing an order with Baked By Cara! You will receive an email shortly with exact price and delivery date.
          </Typography>
          {resetForm()}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {renderPage()}
          <Box sx={{ display: 'flex', flexDirection: 'row', px: 2, mt: 7 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Place Order!' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserForm;