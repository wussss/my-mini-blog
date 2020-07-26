import React from 'react'
import Profile from './Profile'
import { Wrapper } from './style'
import useNeedLogin from '@/lib/hooks/useNeedLogin'
const Settings: React.FC = props => {
  useNeedLogin()
  return (
    <Wrapper>
      <span className="profile">修改个人信息</span>
      <Profile />
    </Wrapper>
  )
}

export default Settings
