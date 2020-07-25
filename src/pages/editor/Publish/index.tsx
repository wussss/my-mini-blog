/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import { Wrapper } from './style'
import '@/statics/iconfont/iconfont.css'
import { useSelector } from '@/redux/context'
import { message } from 'antd'
import { createArticle, reeditArticle } from '@/Api/article'
import { useHistory } from 'react-router'

interface IProps {
  title: string
  content: {
    markdown: string
    html: string
  }
  type: string
  screenshot: string
  id: string | undefined
}

const Publish: React.FC<IProps> = ({ title, content, type, screenshot = '', id }) => {
  const [dropdown, setDropDown] = useState(false) //点击头像下拉菜单，默认不展示
  const hideDropdown = (e: any) => {
    if (!['type', 'confirm'].includes(e.target.className)) {
      setDropDown(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', hideDropdown)
    return () => document.removeEventListener('click', hideDropdown)
  }, [dropdown]) //添加事件监控，点击其它位置隐藏内容消失
  const typeList: string[] = ['前端', 'React', 'JS', 'TS', 'HTTP', 'Webpack', '猿生活', '勿删']

  const {
    user: { username },
  } = useSelector()
  const [newtype, setType] = useState(type || '')
  useEffect(() => {
    setType(type)
  }, [type]) //type改变时更新newtype
  const history = useHistory()
  const onPublish = useCallback(async () => {
    if (title === '') {
      message.warning('标题不能为空')
    } else if (newtype === '') {
      message.warning('至少选择一个标签')
    } else if (content.markdown === '') {
      message.warning('内容不能为空')
    } else {
      if (id) {
        await reeditArticle(id, {
          author: username,
          content: content.markdown,
          html: content.html,
          title: title,
          screenshot: screenshot,
          type: newtype,
          tag: [],
        })
        history.replace(`/post/${id}`) //发布成功后回到详情页
      } else {
        await createArticle({
          author: username,
          content: content.markdown,
          html: content.html,
          title: title,
          screenshot: screenshot,
          type: newtype,
          tag: [],
        })
        history.replace(`/post/${id}`) //发布成功后回到详情页
      }
    }
  }, [content, title, screenshot, newtype])
  return (
    <Wrapper>
      <span
        className="iconfont publish"
        onClick={e => {
          e.nativeEvent.stopImmediatePropagation()
          !dropdown ? setDropDown(true) : setDropDown(false)
        }}
      >
        &#xe61e; 选择文章标签<span className={newtype ? 'preview' : ''}>{newtype}</span>
      </span>
      {dropdown && (
        <div className="blog-type">
          <ul>
            {typeList.map(item => (
              <li
                className={item === newtype ? 'type new' : 'type'}
                onClick={e => {
                  e.nativeEvent.stopImmediatePropagation()
                  setType(newtype === item ? '' : item)
                }}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="confirm" onClick={onPublish}>
            确定并发布
          </button>
        </div>
      )}
    </Wrapper>
  )
}
export default Publish
