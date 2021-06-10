import React from 'react'
import Header from './header/index'
import { Wrapper } from './style'

const Main: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <div className="Content"> {children} </div>
    </Wrapper>
  )
}

export default Main
