import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChakoutForm from './ChakoutForm';

const stripePromise = loadStripe('pk_test_51Mwi16SJLcYkW1Oc0Djvz2MX0EQfG6IIHMkjJkDMSjBlrcG0VWSzGlRnlaMONZ3qLjLLBiljq6M61foHLIMS0ZHF00tZSprm4Q');
// console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const { price, slot, treatment, appointmentDate } = booking;
    return (
        <div>
            <h1 className='text-2xl font-bold mt-7 mb-3'>payment for, <span className='text-success'>{treatment}</span> </h1>
            <h1>Please pay <span className='text-success font-bold'>${price}</span> for your appointment on <span className='text-success'>{appointmentDate}</span> At <span className='text-success'>{slot}</span></h1>
            <div className='my-6 mt-11 w-96 mx-auto md:mx-0 border-info border-2 card shadow-2xl flex justify-center px-14 py-10'>
                <h1 className='text-center mb-11 text-xl font-bold'>Payment Please</h1>
                <Elements stripe={stripePromise}>
                    <ChakoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;