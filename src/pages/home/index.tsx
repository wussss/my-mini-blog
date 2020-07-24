import { BackTop } from 'antd'
import React from 'react'

import ArticleList from './ArticleList'
import { Wrapper } from './style'

const Home: React.FC = props => {
  return (
    <Wrapper>
      <div className="left">
        <ArticleList />
        <BackTop />
      </div>
      <div className="right">
        <BackTop />
      </div>
    </Wrapper>
  )
}

export default Home
