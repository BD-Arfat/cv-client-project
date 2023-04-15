import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const ChakoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({  }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;

        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            toast.error(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: `Arfat`,
                    },
                },
            },
        );

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-info btn-sm text-white mt-10 w-full' type="submit" disabled={!stripe || clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default ChakoutForm;