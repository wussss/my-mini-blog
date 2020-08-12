/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from 'react'
import '@/statics/iconfont/iconfont.css'
import { Button, BackTop } from 'antd'
import { useSelector } from '@/redux/context'
import { createComment, getCommentList } from '@/Api/comment'
import useFetch from '@/lib/hooks/useFetch'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { ArticleEntity } from '@/model/entities/article.entity'

import { Wrapper } from './style'

interface TData {
  article: string
  id: string
  create_at: number
  update_at: number
  user: {
    id: string
    username: string
    avatarLarge: string
  }
  content: string
  respUser: {
    id: string
    username: string
    avatarLarge: string
  }
  topComment: [
    {
      topComment: []
      article: string
      id: string
      create_at: number
      update_at: number
      user: {
        id: string
        username: string
        avatarLarge: string
      }
      content: string
      respUser: {
        id: string
        username: string
        avatarLarge: string
      }
      respComment: string
    }
  ]
}

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
  const commentList: TData[] = data
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
  const [replyBox1, setReplyBox1] = useState('')
  const { inputValue: comment1, onInputEvent: onInputEvent1, setValue: setComment1 } = useInputEvent('')
  const onComment1 = useCallback(
    async (firstComment, respComment, respUser) => {
      await createComment({
        firstComment,
        respComment,
        respUser,
        articleId,
        content: comment1,
      })
      setComment1('')
      setReplyBox1('')
      doFetch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [userId, articleId, comment1]
  )
  const hideReplyBox1 = useCallback(
    (e: any) => {
      if (!['reply1', 'r1', 'r2', 'r3', 'r4', 'input-reply'].includes(e.target.className)) {
        setReplyBox1('')
      }
    },
    [replyBox1]
  )
  useEffect(() => {
    document.addEventListener('click', hideReplyBox1)
    return () => document.removeEventListener('click', hideReplyBox1)
  }, [])
  const [replyBox2, setReplyBox2] = useState('')
  const { inputValue: comment2, onInputEvent: onInputEvent2, setValue: setComment2 } = useInputEvent('')
  const onComment2 = useCallback(
    async (firstComment, respComment, respUser) => {
      await createComment({
        firstComment,
        respComment,
        respUser,
        articleId,
        content: comment2,
      })
      setComment2('')
      setReplyBox2('')
      doFetch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [userId, articleId, comment2]
  )
  const hideReplyBox2 = useCallback(
    (e: any) => {
      if (!['reply1', 'r1', 'r2', 'r3', 'r4', 'input-reply'].includes(e.target.className)) {
        setReplyBox2('')
      }
    },
    [replyBox2]
  )
  useEffect(() => {
    document.addEventListener('click', hideReplyBox2)
    return () => document.removeEventListener('click', hideReplyBox2)
  }, [])
  const [flag, setFlag] = useState('')
  const hideReply = useCallback(
    (e: any) => {
      if (!['resp'].includes(e.target.className)) {
        setFlag('')
      }
    },
    [flag]
  )
  useEffect(() => {
    document.addEventListener('click', hideReply)
    return () => document.removeEventListener('click', hideReply)
  }, [])
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
                  <div className="content">
                    <div className="info3">{item.content}</div>
                    <span
                      className="reply"
                      onClick={e => {
                        e.nativeEvent.stopImmediatePropagation()
                        setReplyBox1(item.id)
                      }}
                    >
                      回复
                    </span>
                  </div>
                  {replyBox1 === item.id && (
                    <div className="reply1">
                      <span className="r1">回复</span>
                      <span className="r2">@{item.user.username}: </span>
                      <span className="r3">{item.content}</span>
                      <input
                        className="input-reply"
                        placeholder="说点什么吧......"
                        value={comment1}
                        onChange={onInputEvent1}
                        onKeyDown={e => {
                          if (e && e.keyCode === 13) {
                            if (!comment1) {
                              window.confirm('评论不能为空')
                            }
                            comment1 && onComment1(item.id, item.id, item.user.id)
                          }
                        }}
                      />
                      <span
                        className="iconfont r4"
                        onClick={() => {
                          if (!comment1) {
                            window.confirm('评论不能为空')
                          }
                          comment1 && onComment1(item.id, item.id, item.user.id)
                        }}
                      >
                        &#xe636;
                      </span>
                    </div>
                  )}
                  <div className="resp" style={{ display: item.topComment.length >= 1 ? 'block' : 'none' }}>
                    <span
                      onClick={e => {
                        e.nativeEvent.stopImmediatePropagation()
                        setFlag(item.id)
                      }}
                      style={{ color: '#d1b5cc', marginLeft: '10px', fontSize: '11px', cursor: 'pointer' }}
                    >
                      共{item.topComment.length}条回复
                    </span>
                    {item.topComment.slice(0, flag === item.id ? 1000 : 3).map(item1 => (
                      <ul className="respCommentList" key={item1.id}>
                        <li className="item">
                          {/* <div className="avatar" style={{ background: `url(${item1.user.avatarLarge}) no-repeat center/cover` }}></div> */}
                          <div className="info">
                            {/* <div className="info2">{formatDate(item1.update_at)}</div> */}
                            <div className="content-info">
                              <div className="content">
                                <div>
                                  <span className="info1">{item1.user.username}: </span>
                                  {item1.respComment !== item.id && (
                                    <span className="r0">
                                      <span className="r1">回复</span>
                                      <span className="r2">@{item1.respUser.username}: </span>
                                    </span>
                                  )}
                                  <span className="r3">{item1.content}</span>
                                </div>
                                <span
                                  className="iconfont reply"
                                  onClick={e => {
                                    e.nativeEvent.stopImmediatePropagation()
                                    setReplyBox2(item1.id)
                                  }}
                                >
                                  &#xe664;
                                </span>
                              </div>
                              {replyBox2 === item1.id && (
                                <div className="reply1">
                                  <span className="r1">回复</span>
                                  <span className="r2">@{item1.user.username}: </span>
                                  <span className="r3">{item1.content}</span>
                                  <input
                                    className="input-reply"
                                    placeholder="说点什么吧......"
                                    value={comment2}
                                    onChange={onInputEvent2}
                                    onKeyDown={e => {
                                      if (e && e.keyCode === 13) {
                                        if (!comment2) {
                                          window.confirm('评论不能为空')
                                        }
                                        comment2 && onComment2(item.id, item1.id, item1.user.id)
                                      }
                                    }}
                                  />
                                  <span
                                    className="iconfont r4"
                                    onClick={() => {
                                      if (!comment2) {
                                        window.confirm('评论不能为空')
                                      }
                                      comment2 && onComment2(item.id, item1.id, item1.user.id)
                                    }}
                                  >
                                    &#xe636;
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    ))}
                  </div>
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
