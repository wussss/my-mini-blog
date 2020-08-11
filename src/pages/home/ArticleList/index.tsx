import React from 'react'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import {useSelector } from '@/redux/context'

import Article from '../Article'
import { Wrapper } from './style'

const ArticleList: React.FC = () => {
  const { articleList } = useSelector()
  const { query, setQuery } = useQuery()
  console.log(query.search, query.own, query)
  return (
    <Wrapper>
      <ul className="navList">
        <li className={query.own === 'all' || !query.own ? 'active' : ''} onClick={() => setQuery({ own: 'all' })}>
          全部
        </li>
        <li className={query.own === 'mine' ? 'active' : 'item'} onClick={() => setQuery({ own: 'mine' })}>
          我的
        </li>
      </ul>
      <ul className="articleList">
        {articleList.map((item: ArticleEntity) => (
          <Article {...item} key={item.id} />
        ))}
      </ul>
    </Wrapper>
  )
}

export default ArticleList
