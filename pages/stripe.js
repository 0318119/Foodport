import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import check_out from './check_out'

const Public_key = ""

const stripeTestPromise = loadStripe(Public_key)

function Stripe() {
    return (
        <Elements stripe={stripeTestPromise}>
      
        </Elements>
    )
}

export default Stripe
