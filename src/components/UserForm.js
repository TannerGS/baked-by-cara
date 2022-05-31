import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API } from 'aws-amplify';
import { createOrder as createOrderMutation } from '../graphql/mutations';

// Component imports
import Personal from './Personal'
import Order from './Order'
import Payment from './Payment'

const steps = ['Personal Information', 'Order', 'Payment'];

const UserForm = () => {
  const [activeStep, setActiveStep] = useState(0);

   //state for form data
   const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000000),
    name: "",
    address: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    contact: "",
    payment: "",
  })

  async function createOrder() {
    if (!formData.name || !formData.address || !formData.phone || !formData.email || !formData.product || !formData.quantity || !formData.contact || !formData.payment) return;
    await API.graphql({ query: createOrderMutation, variables: { input: formData }, authMode: 'API_KEY' });
    setFormData('');
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === steps.length - 1) {
      console.log(formData);

      createOrder();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
  // input value from the form
  const { value } = e.target;

  //updating for data state taking previous state and then adding new value to create new object
  setFormData(prevState => ({
    ...prevState,
    [input]: value
  }));
  }

  const renderPage = () => {
    switch(activeStep) {
        case 0:
            return <Personal handleFormData={handleInputData} values={formData} />
        case 1:
            return <Order handleFormData={handleInputData} values={formData} />
        case 2:
            return <Payment handleFormData={handleInputData} values={formData} />
        default:
            return <Personal handleFormData={handleInputData} values={formData} />  
      }
  }

  const resetForm = () => {
    setTimeout(() => {
      setActiveStep(0);
      setFormData('');
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