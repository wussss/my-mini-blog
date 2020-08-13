/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useCallback, useEffect, useState } from 'react'
//memo针对一个组件是否重复渲染
// usestate(state,setState) 每次渲染按第一次运行的顺序返回state;只会渲染一次;通过setState函数改变state
import { addLike, deleteLike } from '@/Api/like'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/model/entities/article.entity'

import { Wrapper } from './style'
import { translateMarkdown } from '@/lib/utils/markdown'

// 格式化时间
export const formatDate = (time: number) => {
  const date = new Date()
  const ms = date.getTime() //时间毫秒数
  const diff = ms - time
  // 1年的毫秒数：31536000000
  //Math.floor() 返回小于或等于一个给定数字的最大整数
  if (diff >= 31536000000) {
    return Math.floor(diff / 31536000000) + '年前'
  } else if (diff >= 2592000000 && diff < 31536000000) {
    return Math.floor(diff / 2592000000) + '月前'
  } else if (diff >= 86400000 && diff < 2592000000) {
    return Math.floor(diff / 86400000) + '天前'
  } else if (diff >= 3600000 && diff < 86400000) {
    return Math.floor(diff / 3600000) + '小时前'
  } else if (diff >= 60000 && diff < 3600000) {
    return Math.floor(diff / 60000) + '分钟前'
  } else {
    return '刚刚'
  }
}

interface IProps extends ArticleEntity {} //IProps的类型多于ArticleEntity

const Article: React.FC<IProps> = ({
  //(props:Iprops)
  content,
  html,
  title,
  screenshot = '',
  type,
  user = { avatarLarge: '' },
  id,
  create_at,
  likeCount,
  isLiked = false,
}) => {
  const toPost = () => {
    window.open(`/post/${id}`, '_blank')
  } //在新的标签页打开文章详情页
  const { query } = useQuery()
  const { search = '' } = query
  // ? search:xxxx
  const [likeFlag, setLikeFlag] = useState(isLiked) //当即显示的是否点赞
  const [likeCountNew, setLikeCountNew] = useState(likeCount) //当即显示的点赞数
  const matchReg = (str: string) => {
    let reg = /<\/?.+?\/?>/g
    return str.replace(reg, '')
  }
  const onLike = useCallback(
    async e => {
      e.stopPropagation()
      if (!likeFlag) {
        await addLike(id) //需要请求后端接口的操作都是异步的
        setLikeCountNew(likeCountNew + 1)
      } else {
        await deleteLike(id)
        setLikeCountNew(likeCountNew - 1)
      }
      setLikeFlag(!likeFlag)
    }, //async 表示函数内部有异步操作，遇到await后，等待addLike/deleteLike操作完成，再执行likeCountNew=ikeCount + 1 / -1
    //
    [id, likeFlag, likeCountNew]
  ) //点赞

  return (
    <Wrapper screenshot={screenshot}>
      <li>
        <div className="content">
          <ul className="info_box">
            <li className="info_item">{user.username}</li>
            <li className="info_item">{formatDate(create_at)}</li>
            <li className="info_item">{type}</li>
          </ul>
          <div className="article" onClick={toPost} title="点击可查看详情">
            <h3
              className="title"
              dangerouslySetInnerHTML={{
                __html: !search ? title : title.replace(new RegExp(search, 'gi'), `<em> ${search}</em>`),
              }}
            ></h3>
            <div
              className="abstract"
              dangerouslySetInnerHTML={{
                __html: matchReg(html || translateMarkdown(content || '')).replace(new RegExp(search, 'gi'), `<em>${search}</em>`),
              }}
            ></div>
            <div className="photo" />
          </div>
          <li className="icon_like" onClick={onLike}>
            {likeFlag ? <span className="iconfont">&#xe657;</span> : <span className="iconfont">&#xe653;</span>}
            <span className="likeCountNew" style={{ display: likeCountNew === 0 ? 'none' : 'inline-block' }}>
              {likeCountNew}
            </span>
          </li>
        </div>
      </li>
    </Wrapper>
  )
}
export default memo(Article)
//根据props是否完全一致来决定是否渲染组件
