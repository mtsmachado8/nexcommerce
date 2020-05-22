import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import stripeConfig from '../config/stripe';
import styled from 'styled-components';
import CentralizeRow from './CentralizeRow';

const stripePromise = loadStripe(stripeConfig.publicKey);

const CheckoutButton = ({ skuId }) => {
  async function handleClick() {
    const stripe = await stripePromise;
    let error
    try{
      await stripe.redirectToCheckout({
        items: [{ sku: skuId, quantity: 1 }],
        successUrl: `https://nexcommerce.now.sh/success?skuId=${skuId}`,
        cancelUrl: 'https://nexcommerce.now.sh/cancel',
      });
    }catch (e) {
      console.log(e)
    }
    

    if (error) {
      console.log(error);
    }
  }
  return (
    <CentralizeRow>
      <BuyButton role="link" onClick={handleClick}>
        Comprar
      </BuyButton>
    </CentralizeRow>
  );
};

export default CheckoutButton;

const BuyButton = styled.button`
  width: 90%;
`