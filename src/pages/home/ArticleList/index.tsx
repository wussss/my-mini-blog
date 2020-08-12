/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useHistory } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import { getUserArticles } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/model/entities/article.entity'
import { useDispatch, useLogin, useSelector } from '@/redux/context'

import Article from '../Article'
import { Wrapper } from './style'

const ArticleList: React.FC = () => {
  const [pageInfo, setPageInfo] = useState({ hasNextPage: true, endCursor: 0 })

  const { setQuery, query } = useQuery()

  const isLogin = useLogin()

  const history = useHistory()

  // 未登录状态 手动输入 http://localhost:3000/?own=mine 无效
  useEffect(() => {
    const { own } = query
    if (!isLogin && own === 'mine') {
      history.replace('/')
    }
  }, [])

  const dispatch = useDispatch()
  const {
    user: { id },
  } = useSelector()

  useFetch(async () => {
    const rs = query.own === 'mine' ? await getUserArticles({ id, endCursor: 0 }) : await getArticles({ ...query, endCursor: 0 })
    const list = (rs && rs.edges) || []
    dispatch({
      type: 'CHANGE_ARTICLE_LIST',
      payload: { articleList: [...list] },
    })
    if (rs && rs.pageInfo) {
      setPageInfo(rs.pageInfo)
    }

    return list
  }, [query]) //加载第一页

  const nextPage = useCallback(async () => {
    const rs = query.own === 'mine' ? await getUserArticles({ id, endCursor: pageInfo.endCursor }) : await getArticles({ ...query, endCursor: pageInfo.endCursor })
    const list = (rs && rs.edges) || []

    if (rs.pageInfo.endCursor <= pageInfo.endCursor) {
      return []
    }

    dispatch({
      type: 'APPEND_ARTICLE_LIST',
      payload: { articleList: [...list] },
    })

    if (rs && rs.pageInfo) {
      setPageInfo(rs.pageInfo)
    }

    return list
  }, [pageInfo.endCursor, pageInfo.hasNextPage, query])

  // 用 store 的数据渲染页面
  const { articleList } = useSelector()

  return (
    <Wrapper>
      <ul className="navList">
        <li className={query.own === 'all' || !query.own ? 'active' : ''} onClick={() => setQuery({ own: 'all' })}>
          全部
        </li>

        {isLogin && (
          <li className={query.own === 'mine' ? 'active' : ''} onClick={() => setQuery({ own: 'mine' })}>
            我的
          </li>
        )}
      </ul>

      <ul>
        <InfiniteScroll
          dataLength={articleList.length}
          next={nextPage}
          hasMore={pageInfo.hasNextPage}
          loader={<h5 style={{ textAlign: 'center', color: '#b2bac2' }}>加载中...</h5>}
          endMessage={<h5 style={{ textAlign: 'center', color: '#b2bac2' }}>没有更多内容！</h5>}
          height={760}
        >
          {articleList.map((item: ArticleEntity) => (
            <Article {...item} key={item.id} />
          ))}
        </InfiniteScroll>
      </ul>
    </Wrapper>
  )
}

export default ArticleList
