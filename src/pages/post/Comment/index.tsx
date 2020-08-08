import React, { useCallback } from 'react'
import '@/statics/iconfont/iconfont.css'
import { Button, BackTop } from 'antd'
import { useSelector } from '@/redux/context'
import { createComment, getCommentList } from '@/Api/comment'
import useFetch from '@/lib/hooks/useFetch'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { ArticleEntity } from '@/modal/entities/article.entity'
//import { formatDate } from '@/pages/home/Article'

import { Wrapper } from './style'


interface IProps extends ArticleEntity {}

const formatDate = (milliseconds: number) => {
  const data = new Date(milliseconds)
  const month = data.getMonth() + 1
  const day = data.getDate()
  const hour = data.getHours()
  const Minute = data.getMinutes()
  return month + '月' + day + '日       ' + hour + ':' + Minute
}
const Comment: React.FC<IProps> = ({ create_at, content, title, html, screenshot, id: articleId, viewCount, author, user: { avatarLarge = '', id: userId } = {} }) => {
  const {
    user: { username, avatarLarge: loginAvatarLarge },
  } = useSelector()
  const { inputValue: comment, onInputEvent, setValue: setComment } = useInputEvent('')
  const { data = [], doFetch } = useFetch(() => getCommentList(articleId), [articleId])
  const commentList: any[] = data
  const onComment = useCallback(async () => {
    await createComment({
      respUser: userId,
      articleId,
      content: comment,
    })
    setComment('')
    doFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, articleId, comment])
  return (
    <Wrapper avatarLarge={loginAvatarLarge}>
      <div className="anchor" id="comment">
        <div className="head">
          <div className="avatar"></div>
          <div className="info">
            <div className="info1">发评论</div>
            <div className="info2">{author === username ? '我' : `${username}`}</div>
          </div>
        </div>
        <div className="edit">
          <span className="iconfont">&#xe610;</span>
          <input
            className="input"
            placeholder="说点什么吧......"
            value={comment}
            onChange={onInputEvent}
            onKeyDown={e => {
              if (e && e.keyCode === 13 && comment) {
                onComment()
              }
            }}
          />
        </div>
        <Button className="foot" disabled={comment ? false : true} onClick={onComment}>
          <span className={comment ? 'iconfont' : 'iconfont disabled'}>&#xe636;评论</span>
        </Button>
      </div>
      {commentList.map(item => (
        <ul className="commentList" key={item.id}>
          <li className="item">
            <div className="first-comment">
              <div className="avatar" style={{ background: `url(${item.user.avatarLarge}) no-repeat center/cover` }}></div>
              <div className="info">
                <div className="info1">{item.user.username}</div>
                <div className="info2">{formatDate(item.update_at)}</div>
                <div className="content-info">
                  <div className="info3">{item.content}</div>
                  <div className="second-comment">xxxxxxxcxx</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      ))}
      <BackTop />
    </Wrapper>
  )
}

export default Comment
