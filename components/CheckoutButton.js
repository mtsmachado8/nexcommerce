import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import stripeConfig from '../config/stripe';

const stripePromise = loadStripe(stripeConfig.publicKey);

const CheckoutButton = ({ skuId }) => {
  async function handleClick() {
    const stripe = await stripePromise;
    let error
    try{
      await stripe.redirectToCheckout({
        items: [{ sku: skuId, quantity: 1 }],
        successUrl: `http://localhost:3000/success?skuId=${skuId}`,
        cancelUrl: 'http://localhost:3000/cancel',
      });
    }catch (e) {
      console.log(e)
    }
    

    if (error) {
      console.log(error);
    }
  }
  return (
    <button role="link" onClick={handleClick}>
      Buy
    </button>
  );
};

export default CheckoutButton;
