import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Img from 'react-image'

export default props => {
  const {
    price,
    name,
    image,
    placeholder,
    url,
    ...others
  } = props


  return (
    <ContentProduct
      {...others}
      onClick={() => console.log('click', props)}
      href={url}
      display='flex'
      flexDirection='column'
    >
      <ContentImage>
        <LazyLoad placeholder={placeholder}>
          <ImgContent>
            <Img
              onLoad={() => console.log('load', props)}
              alt={name}
              src={image}
              loader={placeholder}
              unloader={placeholder}
            />
          </ImgContent>
        </LazyLoad>
      </ContentImage>
      <Description>
        <p>{name}</p>
        <Price>R${price}</Price>
      </Description>
    </ContentProduct>
  )
}

const ContentProduct = styled.a`
  min-width: 150px;
  max-width: 400px;
  min-height: 200px;
  max-height: 400px;

  background-color: white;
  text-decoration: none;
  border: 1px solid #e87272;

  :hover .withHover {
    opacity: 1;
  }
`

const Description = styled.div`
  font-size: 11px;
  line-height: 17px;
  margin-top: 10px;
  text-align: center;

  p {
    color: black;
    margin: 0;
  }
`

const ImgContent = styled.div`
  height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    left: 0;
  }
`

const ContentImage = styled.div`
  position: relative;
  text-align: center;
  padding: 7px 0;
  height: 208px;
  margin: 0 auto;
`

const Price = styled.span`
  color: black;
  margin-top: 10px;
`