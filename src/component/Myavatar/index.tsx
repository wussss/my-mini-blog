//点击头像退出登录
/* eslint-disable jsx-a11y/anchor-is-valid */
import '@/statics/iconfont/iconfont.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from '@/redux/store'

import init_avatar from '@/statics/girl.png'
import { Wrapper } from './style'

const Myavatar: React.FC = props => {
  const { user } = useSelector() //拿到用户头像信息
  const { avatarLarge = init_avatar } = user

  const [dropdown, setDropDown] = useState(false) //点击头像下拉菜单，默认不展示
  const hideDropDown = (e: Event) => {
    setDropDown(false)
  }
  useEffect(() => {
    document.addEventListener('click', hideDropDown)
    return () => document.removeEventListener('click', hideDropDown)
  }, []) //添加事件监控，点击其它位置隐藏内容消失

  const dispatch = useDispatch()

  const confirmLogout = () => {
    if (window.confirm('确定登出吗？')) {
      dispatch({ type: 'LOGOUT' })
    }
  }

  return (
    <Wrapper avatar={avatarLarge}>
      <div className="nav-item avatar-menu">
        <div
          className="avatar"
          onClick={e => {
            e.nativeEvent.stopImmediatePropagation()
            !dropdown ? setDropDown(true) : setDropDown(false)
          }}
        />
        <span className="username">{user.username}</span>
        {dropdown && (
          <ul className="dropdown-list">
            <li>
              <Link className="menu-item" to={'/setting'}>
                <span className="iconfont">&#xe654; 个人资料 </span>
              </Link>
            </li>
            <li className="menu-item">
              <span onClick={confirmLogout} className="iconfont">
                &#xe621; 退出登录
              </span>
            </li>
          </ul>
        )}
      </div>
    </Wrapper>
  )
}

export default Myavatar
