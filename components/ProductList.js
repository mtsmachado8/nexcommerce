import Product from './Product'
import styled from 'styled-components'

export default ({products}) => (
  <Catalog>
    {products.map(product => <Product {...product} />)}
  </Catalog>
)

const Catalog = styled.div`
  display: grid;
  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr
  }
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr
  }
  @media (max-width: 300px) {
    grid-template-columns: 1fr
  }
`