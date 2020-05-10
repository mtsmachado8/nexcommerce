import Product from './Product'
import styled from 'styled-components'

export default ({products}) => (
  <Catalog>
    {products.map(product => <Product {...product} />)}
  </Catalog>
)

const Catalog = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`