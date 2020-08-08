import http from './request'
import { baseUrl } from './url'
import { CreateCommentDto } from '@/modal/dtos/comment.dto'
const comment = {
  create: `/comment`,
  query: `/comment/`,
}
export const getCommentList = (articleId: string) => {
  return http.get(baseUrl + comment.query + articleId).then(res => {
    return res
  })
}

export const createComment = (data: CreateCommentDto) => {
  return http.post(baseUrl + comment.create, data).then(res => {
    return res
  })
}
