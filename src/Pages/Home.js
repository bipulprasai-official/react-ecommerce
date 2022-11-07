import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

function Home() {
  return (
    <Wrapper className="test">
Home
    </Wrapper>
  )
}

const Wrapper = styled.section`
height:100vh;
background-color: ${({theme}) => theme.colors.bg};

`
export default Home