import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51Ie1aQA3htQk726T0Gx2K9jEhnoLGxQqlPg8ZSvCCZ2rECK77JZ1kKte2qHCGxiITHwJ7RzUzg8Se2E9vLn7ZB3d00INh3aHrN');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
        <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
      </Elements>
    );
};

export default ProcessPayment;