import { SignInDto } from '@/model/dtos/signIn.dto'
import { SignUpDto } from '@/model/dtos/signUp.dto'

import { baseUrl } from './url'
import http from './request'

export const signUp = (data: SignUpDto) => {
  return http.post(`${baseUrl} / signUp}`, data).then(res => {
    return res
  })
}

export const signIn = (data: SignInDto) => {
  return http.post(`${baseUrl}/signIn`, data).then(res => {
    return res
  })
}
