import http from './request'
import { baseUrl } from '../baseUrl'


// 赞某篇文章
export const addLike = (articleId: string) => {
  return http.put(baseUrl + '/like/' + articleId).then(res => {
    return res
  })
}

export const deleteLike = (articleId: string) => {
  return http.delete(baseUrl + '/like/' + articleId).then(res => {
    return res
  })
}
