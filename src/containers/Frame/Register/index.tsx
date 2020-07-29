import { signUp } from '@/Api/account'
import useInputEvent from '@/lib/hooks/useInputEvent'
import React, { useCallback } from 'react'
import { message } from 'antd'
import useFlag from '@/lib/hooks/useFlag'

import { Wrapper } from './style'

interface IProps {
  onClose(e: any): void
  onSwitch(e: any): void
}

const Register: React.FC<IProps> = ({ onClose, onSwitch }) => {
  const { inputValue: username, onInputEvent: onChangeUsername } = useInputEvent('')
  const { inputValue: phoneNumber, onInputEvent: onChangeNumber } = useInputEvent('')
  const { inputValue: password, onInputEvent: onChangePassword } = useInputEvent('')

  const onRegister = useCallback(async () => {
    // 简单校验输入手机和密码后再发送请求
    if (phoneNumber.length !== 11) {
      message.warning('请输入正确的手机号')
    } else if (username.length === 0) {
      message.warning('用户名不能为空')
    } else if (password.length < 6) {
      message.warning('密码长度不能小于6位')
    } else {
      await signUp({ mobilePhoneNumber: phoneNumber, password, username }).then(data => {
        onClose(data)
        onSwitch(data)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber, password, username])
  const { flag, toggleFlag } = useFlag(false)
  const preventEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault()
    }
  }

  return (
    <Wrapper>
      <form className="login-box">
        <div className="head">
          <h1 className="title">注册</h1>
          <span className="iconfont" onClick={onClose}>
            &#xe6c9;
          </span>
        </div>
        <div className="input-panel">
          <div className="input-group">
            <div className="input-item">
              <input className="input" placeholder="请输入用户名" value={username} onChange={onChangeUsername} onKeyDown={preventEnter} />
            </div>
            <div className="input-item">
              <input className="input" placeholder="请输入手机号" value={phoneNumber} onChange={onChangeNumber} onKeyDown={preventEnter} />
            </div>
            <div className="input-item">
              <input type="password" className="input" placeholder="请输入密码（不少于 6 位）" value={password} onChange={onChangePassword} onKeyDown={preventEnter} />
              <span className="iconfont" onClick={toggleFlag}>
                {flag ? '\ue60d' : '\ue67d'}
              </span>
            </div>
          </div>
          <div className="foot">
            <button type="button" className="commit-btn" onClick={onRegister}>
              注册
            </button>
            <button
              className="switch"
              onClick={e => {
                onClose(e)
                onSwitch(e)
              }}
            >
              已有账号登录
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default Register
