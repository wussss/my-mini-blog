/* eslint-disable jsx-a11y/anchor-is-valid */
import '@/statics/iconfont/iconfont.css'
import React, { useCallback } from 'react'
//useMemo :定义某个函数逻辑是否重复执行; 如果useMemo返回的是一个函数，那么可以直接用useCallback来省略顶层的函数
//useEffect 根据依赖项来决定是调用还是不调用
//useState    定义state
import { Link, useHistory } from 'react-router-dom'

import useFlag from '@/lib/hooks/useFlag'
import useInputEvent from '@/lib/hooks/useInputEvent'
import useQuery from '@/lib/hooks/useQuery'
import { useDispatch, useLogin } from '@/redux/store'
import Login from '@/component/Login'
import Register from '../../../component/Register'
import Myavatar from '@/component/Myavatar'
import { Wrapper } from './style'

const Header: React.FC = props => {
  const { inputValue: search, setValue: setSearch, onInputEvent } = useInputEvent('') //search=''
  const history = useHistory() //监控地址栏的变化
  const { setQuery } = useQuery() //query={search:xxx,xxx:xxx}  ,setQuery 接收一个对象，改变location
  const onSearch = useCallback(() => {
    history.replace('/')
    setQuery({ search })
    setSearch('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]) //当输入框内容改变时，改变location,清空输入框

  const isLogin = useLogin() //是否登录

  const { flag: flag1, toggleFlag: toggleFlag1 } = useFlag(false) //登录弹窗是否展示
  const { flag: flag2, toggleFlag: toggleFlag2 } = useFlag(false) //注册弹窗是否展示
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <header className="header">
        <Link className="logo-link" to="/" title="小狗博客">
          <div className="logo" />
        </Link>
        <ul className="nav">
          <li className="nav-item search">
            <div>
              <input
                type="text"
                placeholder="请输入关键字搜索"
                onChange={onInputEvent} //search=e.target.value
                value={search}
                //enter键
                onKeyDown={e => {
                  if (e && e.keyCode === 13) {
                    onSearch()
                  }
                }}
              />
              <button onClick={onSearch}>
                <span className="iconfont">&#xe627;</span>
              </button>
            </div>
          </li>
          <li className="nav-item write">
            <div>
              {isLogin ? (
                <Link to="/editor">
                  <button>
                    <span className="iconfont">&#xe645;写文章</span>
                  </button>
                </Link>
              ) : (
                <button onClick={toggleFlag1}>
                  <span className="iconfont">&#xe645;写文章</span>
                </button>
              )}
            </div>
          </li>
          {isLogin ? (
            <Myavatar />
          ) : (
            <>
              <li className="nav-item register">
                <button className="write-box" onClick={toggleFlag1}>
                  <span className="iconfont write-icon">&#xe600;登录</span>
                </button>
              </li>
              <li className="nav-item login">
                <button className="write-box" onClick={toggleFlag2}>
                  <span className="iconfont write-icon">&#xe71c;注册</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </header>
      {flag1 && !isLogin && (
        <Login
          onClose={e => {
            dispatch({
              type: 'CHANGE_SHOW_LOGIN',
              payload: {
                showLogin: false,
              },
            })
            toggleFlag1(e)
          }}
          onSwitch={toggleFlag2}
        />
      )}
      {flag2 && !isLogin && <Register onClose={toggleFlag2} onSwitch={toggleFlag1} />}
    </Wrapper>
  )
}

export default Header
