//一篇文章包括的属性
import { CommonEntity } from './common.entity'

export class ArticleEntity extends CommonEntity {
  author!: string  //作者

  content!: string //markdown内容

  html!: string //html页面

  title!: string //标题

  screenshot!: string //封面图

  tag!: string[] //标签

  type!: string //类型

  user!: any //用户

  _id!: string 

  id!: string

  create_at!: number

  viewCount!: number

  likeCount!: number //点赞数量

  likedCount!: number //被赞数量

  commentCount!: number //评论数量

  isLiked!: boolean //是否点赞

  isFeatured!: boolean //是否属于自己
}
