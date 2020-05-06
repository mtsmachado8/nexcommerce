import Link from 'next/link';
import React from 'react';
import Stripe from 'stripe';

import stripeConfig from '../config/stripe';
import CheckoutButton from '../components/CheckoutButton';

export const getStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02',
  });

  const skus = await stripe.skus.list();

  const paths = skus.data.map((sku) => ({
    params: {
      skuId: sku.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02',
  });

  const { skuId } = params;

  const sku = await stripe.skus.retrieve(skuId);

  return {
    props: {
      sku,
    },
  };
};

const Product = ({ sku }) => {
  return (
    <div>
      <h1>{sku.attributes.name}</h1>

      {sku.image && (
        <img
          src={sku.image}
          style={{
            width: '100px',
          }}
        />
      )}

      <h2>
        {Number(sku.price / 100).toFixed(2)} {sku.currency.toUpperCase()}
      </h2>

      <CheckoutButton skuId={sku.id} />

      <br />
      <br />

      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default Product;
