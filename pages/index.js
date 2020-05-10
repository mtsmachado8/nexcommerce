import Stripe from 'stripe';

import stripeConfig from '../config/stripe';
import ProductList from '../components/ProductList'
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';

export const getStaticProps = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-03-02',
  });

  const skus = await stripe.skus.list();

  return {
    props: {
      skus: skus.data,
    },
  };
};

const HomePage= ({ skus }) => {
  const products = skus.map(sku => ({
    key: sku.id,
    name: sku.attributes.name,
    image: sku.image,
    price: (sku.price / 100),
    url: ('/' + sku.id)
  }))

  return (
    <>
      <Header>Loja da Bruna</Header>
      <hr />
      <ProductList products={products}/>
    </>
  );
};

export default HomePage;
