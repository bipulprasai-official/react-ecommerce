import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Nav from './Nav';

function Header() {
  return (
    <MainHeader>
    <NavLink to='/'>
<img className='logo' src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png" alt="logo" />
    </NavLink>
    <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`
padding:0 4.8rem;
height:3rem;
background-color: ${({ theme}) => theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

.logo {
    height:3rem;
}
`;
export default Header