import React from 'react'
import { Redirect } from 'react-router'
import { useLogin } from '@/redux/context'

interface IProps {
  children?: any
  needLogin?: boolean
}

const AuthRoute: React.FC<IProps> = ({ children, needLogin = false }) => {
  const isLogin = useLogin()
  if (needLogin && !isLogin) {
    return <Redirect to={'/'} />
  }

  return children
}

export default AuthRoute
