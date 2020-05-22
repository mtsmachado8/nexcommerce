import styled from "styled-components";
import ArrowBack from '../public/icons/arrows.svg'
import Link from "next/link";

const Header = ({children, back}) => (
  <HeaderComponent>
    {back && 
      <Link href="/">
        <ArrowBack style={{width: `20px`}} href="/"/>
      </Link>
    }
    <Title>
      {children}
    </Title>
  </HeaderComponent>
)

export default Header

const HeaderComponent = styled.div`
  height: 51px;
  background-color: #b55050;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 20px;
  font-family: 'Header';
`