import React from 'react'
import Header from '../header/index'
import Main from '../main/index'
import { Wrapper } from './style'

const Frame: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main> {children} </Main>
    </Wrapper>
  )
}

export default Frame
