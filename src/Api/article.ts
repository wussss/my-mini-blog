import { CreateArticleDto } from '@/model/dtos/article.dto'
import { ArticleEntity } from '@/model/entities/article.entity'
import { IPage } from '@/model/interfaces/common.interface'

import http from './request'
import { baseUrl } from '../baseUrl'

export const getArticles = (data?: any) => {
  return http.get(baseUrl + '/article/query', data || {}).then(res => {
    return res as IPage<ArticleEntity>
  })
}

// 拿到指定 id 的用户的文章
export const getUserArticles = (data?: any) => {
  return http.get(baseUrl + '/user/' + (data.id || data) + '/articles', data || {}).then(res => {
    return res
  })
}

export const getArticle = (articleId: string) => {
  return http.get(baseUrl + '/article/' + articleId).then(res => {
    return res
  })
}

export const createArticle = (data: CreateArticleDto) => {
  return http.post(baseUrl + '/article/', data).then(res => {
    return res
  })
}

export const reeditArticle = (articleId: string, data: CreateArticleDto) => {
  return http.patch(baseUrl + '/article/' + articleId, data).then(res => {
    return res
  })
}

export const deleteArticle = (articleId: string) => {
  return http.delete(baseUrl + `/article/?id=` + articleId).then(res => {
    return res
  })
}

export const putViewCount = (articleId: string) => {
  return http.put(baseUrl + '/article/' + articleId + '/putViewCount').then(res => {
    return res
  })
}
