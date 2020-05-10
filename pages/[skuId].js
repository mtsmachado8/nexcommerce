import React from 'react';
import Stripe from 'stripe';

import stripeConfig from '../config/stripe';
import CheckoutButton from '../components/CheckoutButton';
import Product from '../components/Product'
import Header from '../components/Header';
import GlobalStyles from '../components/GlobalStyles';

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

const ProductDetails = ({ sku }) => {
  const product = {
    name: sku.attributes.name,
    image: sku.image,
    price: (sku.price / 100),
    url: ('/' + sku.id)
  }

  return (
    <>
      <Header back>Loja da Bruna</Header>
      <div>
        <Product {...product}/>
        <CheckoutButton skuId={sku.id} />
      </div>
    </>
    
  );
};

export default ProductDetails;
