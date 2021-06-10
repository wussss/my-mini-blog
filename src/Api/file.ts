import http from './request'
import { baseUrl } from '../baseUrl'

const file = {
  update: `/file/upload`,
}
export const uploadFile = (formData: any) => {
  return http.post(baseUrl + file.update, formData).then(res => {
    return res
  })
}
