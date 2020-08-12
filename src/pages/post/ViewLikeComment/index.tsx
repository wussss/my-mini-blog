/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import { Wrapper } from './style'
import { ArticleEntity } from '@/model/entities/article.entity'
import { addLike, deleteLike } from '@/Api/like'

interface IProps extends ArticleEntity {}

const ViewLikeComment: React.FC<IProps> = ({ id, isLiked, likeCount, commentCount, viewCount }) => {
  const [likeFlag, setLikeFlag] = useState(isLiked) //是否点赞
  const [likeCountNew, setLikeCountNew] = useState(likeCount) //显示的点赞数
  const onLike = useCallback(
    async e => {
      e.stopPropagation()
      if (likeFlag) {
        await deleteLike(id)
        setLikeCountNew(likeCountNew - 1)
      } else {
        await addLike(id)
        setLikeCountNew(likeCountNew + 1)
      }
      setLikeFlag(!likeFlag)
    },
    [likeFlag]
  )
  return (
    <Wrapper>
      <div className="data">
        <div className="circle">
          <span className="iconfont">&#xe60d;</span>
        </div>
        <div className="circle-n" style={{ display: viewCount === 0 ? 'none' : 'flex' }}>
          <span className="viewcount">{viewCount}</span>
        </div>
      </div>
      <div className="data">
        <div className="circle like" onClick={onLike}>
          {likeFlag ? <span className="iconfont">&#xe657;</span> : <span className="iconfont">&#xe653;</span>}
        </div>
        <div className="circle-n" style={{ display: likeCountNew === 0 ? 'none' : 'flex' }}>
          <span className="viewcount">{likeCountNew}</span>
        </div>
      </div>
      <div className="data">
        <a href="#comment">
          <div className="circle">
            <span className="iconfont">&#xe664;</span>
          </div>
        </a>
        <div className="circle-n" style={{ display: commentCount === 0 ? 'none' : 'flex' }}>
          <span className="viewcount">{commentCount}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default ViewLikeComment
