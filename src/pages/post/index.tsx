import React from 'react'
import { Wrapper } from './style'
import { useParams } from 'react-router'
import Article from './Article'
import Comment from './Comment'
import ViewLikeComment from './ViewLikeComment'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { getArticle } from '@/Api/article'
import { useSelector } from '@/redux/context'
import useFetch from '@/lib/hooks/useFetch'

const Post: React.FC = () => {
  const { id = '' } = useParams() //url中对应的id
  const { articleList = [] } = useSelector() //从store中获取文章列表
  const article = articleList.find((item: any) => id === item.id) || {} //从store中根据id获取文章
  const { data = article } = useFetch(() => getArticle(id))
  const item: ArticleEntity = data

  return (
    <Wrapper>
      <div className="left">
        <ViewLikeComment {...item} />
        <Article {...item} />
        <Comment {...item} />
      </div>
    </Wrapper>
  )
}
export default Post
