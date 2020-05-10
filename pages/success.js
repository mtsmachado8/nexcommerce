import React from 'react';

import Link from 'next/link';
import Stripe from 'stripe';
import stripeConfig from '../config/stripe';

const SuccessPage = ({ sku }) => {
  return (
    <>
      <h1>Obrigado por comprar {sku?.attributes?.name}!</h1>

      <Link href="/">
        <a>Go back</a>
      </Link>
    </>
  );
};

SuccessPage.getInitialProps = async ({ query: { skuId } }) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02',
  });

  const sku = await stripe.skus.retrieve(skuId)

  return {
    sku
  }
}

export default SuccessPage;
