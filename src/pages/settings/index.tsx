import React, { useState } from 'react'
// import Navigation from './Navigation';
import Profile from './Profile'
import Password from './Password'
import { Wrapper } from './style'
import useNeedLogin from '@/lib/hooks/useNeedLogin'
const Settings: React.FC = props => {
  useNeedLogin()
  const [flag, setFlag] = useState('profile')
  return (
    <Wrapper>
      <ul className="navList">
        <li
          className={flag === 'profile' ? 'active' : ''}
          onClick={() => {
            setFlag('profile')
          }}
        >
          修改个人资料
        </li>
        <li
          className={flag === 'password' ? 'active' : ''}
          onClick={() => {
            setFlag('password')
          }}
        >
          修改密码
        </li>
      </ul>
      {flag === 'profile' ? <Profile /> : <Password />}
    </Wrapper>
  )
}

export default Settings
