import React, { useCallback, useEffect, useState, useRef } from 'react'
import '@/statics/iconfont/iconfont.css'
import { Button } from 'antd'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import { createComment, getCommentList } from '@/Api/comment'
import useFetch from '@/lib/hooks/useFetch'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useLogin, useSelector } from '@/redux/context'

import { Wrapper } from './style'

interface IProps extends ArticleEntity {}

const Comment: React.FC<IProps> = ({ create_at, content, title, html, screenshot, id: articleId, viewCount, author, user: { avatarLarge = '', id: userId } = {} }) => {
  const {
    user: { username, id: loginId, avatarLarge: loginAvatarLarge },
  } = useSelector()
  const { inputValue: comment, onInputEvent, setValue: setComment } = useInputEvent('')
  const { data: commentList1 = [], doFetch } = useFetch(() => getCommentList(articleId), [articleId])
  const onComment = useCallback(async () => {
    await createComment({
      respUser: userId,
      articleId,
      content: comment,
    })
    setComment('')
    doFetch()
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
          <textarea
            className="input"
            placeholder="说点什么吧......"
            value={comment}
            onChange={onInputEvent}
            onKeyDown={e => {
              if (e && e.keyCode === 13) {
                onComment()
              }
            }}
          />
        </div>
        <Button className="foot active" disabled={comment ? false : true} onClick={onComment}>
          <span className="iconfont">&#xe636;评论</span>
        </Button>
      </div>
      <div className="comment_info"></div>
    </Wrapper>
  )
}

export default Comment
