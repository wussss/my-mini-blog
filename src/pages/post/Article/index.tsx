import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import { Wrapper } from './style'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useLogin, useSelector } from '@/redux/context'
interface IProps extends ArticleEntity {} //IProps的类型多于ArticleEntity

const formatDate = (milliseconds: number) => {
  const data = new Date(milliseconds)
  const year = data.getFullYear()
  const month = data.getMonth() + 1
  const day = data.getDate()
  const hour = data.getHours()
  const Minute = data.getMinutes()
  return year + '年' + month + '月' + day + '日       ' + hour + ':' + Minute
}
const Article: React.FC<IProps> = ({
  //(props:Iprops)
  author,
  content,
  title,
  html,
  screenshot = '',
  type,
  user: { avatarLarge = '', id: userId },
  id,
  create_at,
  likeCount,
  isLiked,
  isFeatured,
}) => {
  const isLogin = useLogin()
  const {
    user: { username },
  } = useSelector()
  const history = useHistory()
  const onReedit = useCallback(async () => {
    history.push('/editor/' + id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <Wrapper avatarLarge={avatarLarge} screenshot={screenshot}>
      <div className="author">
        <div className="avatar"></div>
        <div className="info">
          <div className="name">{author}</div>
          <div className="time">{formatDate(create_at)}</div>
        </div>
        {isLogin && author === username && (
          <div className="reedit" onClick={onReedit}>
            编辑
          </div>
        )}
      </div>
      <div className="article">
        <div className="cover"></div>
        <div className="title">{title}</div>
        <div className="content" dangerouslySetInnerHTML={{ __html: html || '' }}></div>
      </div>
    </Wrapper>
  )
}
export default Article
