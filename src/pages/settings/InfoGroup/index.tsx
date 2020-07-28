/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector, useDispatch } from '@/redux/context'
import { Wrapper } from './style'
import '@/statics/iconfont/iconfont.css'

import useInputEvent from '@/lib/hooks/useInputEvent'
import useEventFetch from '@/lib/hooks/useEventFetch'
import { userUpdate, getUserInfo } from '@/Api/user'

interface InfoType {
  item: {
    title: string
    input: string
    placeholder: string
  }
}
const InfoGroup: React.FC<InfoType> = ({ item: { title, input, placeholder } }) => {
  const dispatch = useDispatch()
  const { user = {} } = useSelector() //获取用户对象
  const { inputValue, onInputEvent } = useInputEvent(user[input] || '') //从store中获取之前的值
  const { onEvent: onSave } = useEventFetch(async () => {
    // 第一步：请求更新用户信息
    await userUpdate({
      [input]: inputValue,
    })
    // 第二步：拿到服务器用户信息
    const userInfo = await getUserInfo(user.id)
    // 第三步：用服务器拿到的数据覆盖store 中的数据
    dispatch({
      type: 'UPDATE_USER',
      payload: { user: { ...userInfo } },
    })
    return userInfo
  }, [inputValue])
  
  return (
    <Wrapper>
      <li className="info-item">
        <span className="iconfont title">{title}</span>
        <div className="edit-field">
          <input
            className="input"
            placeholder={placeholder}
            title={title}
            value={inputValue}
            onChange={onInputEvent}
            onKeyDown={(e: any) => {
              if (e && e.keyCode === 13) {
                onSave()
              }
            }}
          />
        </div>
        <span className="iconfont save" onClick={onSave}>
          &#xe619;
        </span>
      </li>
    </Wrapper>
  )
}

export default InfoGroup
