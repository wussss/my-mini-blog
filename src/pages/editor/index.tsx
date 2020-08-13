/* eslint-disable react-hooks/exhaustive-deps */
import '@/statics/iconfont/iconfont.css'
import '../../../node_modules/codemirror/lib/codemirror.css'
import '../../../node_modules/codemirror/lib/codemirror.js'
import '../../../node_modules/codemirror/theme/eclipse.css'
import 'codemirror/mode/markdown/markdown'

import { Input, message } from 'antd'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { useSelector } from '@/redux/context'
import { getArticle } from '@/Api/article'
import { uploadFile } from '@/Api/file'
import useNeedLogin from '@/lib/hooks/useNeedLogin'
import useInputEvent from '@/lib/hooks/useInputEvent'

import { Editor, EditorChange, ScrollInfo } from 'codemirror'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { translateMarkdown } from '@/lib/utils/markdown'

import Myavatar from '@/containers/Frame/Myavatar'
import Publish from './Publish'
import { Wrapper } from './style'

const MyEditor: React.FC = () => {
  useNeedLogin()
  const history = useHistory()
  const { id = '' } = useParams()
  const { articleList = [] } = useSelector()
  const article = articleList.find(item => id === item.id) || {}
  const [data, setData] = useState(article)
  const { inputValue: title, onInputEvent, setValue } = useInputEvent(data.title || '')
  const [content, setContent] = useState({ markdown: data.content || '', html: data.html || '' })
  useEffect(() => {
    if (id) {
      getArticle(id).then(data => {
        setData(data)
        setValue(data.title || '')
        setContent({ markdown: data.content || '', html: data.html || '' })
      })
    }
  }, [id])
  const contentRef = useRef<HTMLDivElement>(null)
  const onContentChange = useCallback(
    (editor: Editor, data: EditorChange, value: string) => {
      const html = translateMarkdown(value)
      setContent({ markdown: value, html })
      contentRef.current!.innerHTML = html //html 复制给 innerHTML  就可以动态改变 html 结构了
      //contentRef.current.  是一个 html node
      //加! 保证contentRef.current 不是 undefined，防止报错
    },
    [content]
  )
  const onEditorScroll = useCallback((editor: Editor, scrollInfo: ScrollInfo) => {
    contentRef.current!.scrollTo(0, Math.round((scrollInfo.top / scrollInfo.height) * (contentRef.current!.scrollHeight + contentRef.current!.clientHeight)))
  }, [])

  const onUpload = useCallback(async (e: any) => {
    const formData = new FormData()
    const file = e.target.files[0]
    if (file.size > 3 * Math.pow(1024, 2)) {
      return message.warning('图片文件过大，最大支持 3 MB')
    }
    formData.append('file', file)
    const { url } = await uploadFile(formData)
    setData((data: any) => ({ ...data, screenshot: url }))
  }, [])
  const confirmBack = () => {
    if (window.confirm('请确认是否返回，如确认则未发布的内容将会丢失')) {
      history.replace(`/`)
    }
  }
  return (
    <Wrapper screenshot={data.screenshot}>
      <div className="articleEdit">
        <div className="header">
          <Input className="title" placeholder="输入文章标题..." value={title} onChange={onInputEvent} />
          <div className="right-box">
            <div className="upload-img">
              <input type="file" accept="image/*" className="img-selector" title="添加封面图" onChange={onUpload} />
              <span className="iconfont img-cover">&#xe63a;上传封面图</span>
              <div className="image-preview" title="封面图预览"></div>
            </div>
            <Publish title={title} content={content} screenshot={data.screenshot} type={data.type} id={id} />
            <span className="iconfont back" onClick={confirmBack}>
              &#xe621; 回到首页
            </span>
          </div>
          <Myavatar />
        </div>
        <div className="main">
          <CodeMirror
            className="codemirror"
            value={content.markdown}
            options={{
              mode: 'markdown',
              theme: 'eclipse',
              lineNumbers: true,
              smartIndent: true,
              lineWrapping: true,
            }}
            onChange={onContentChange}
            onScroll={onEditorScroll}
          />
          <div ref={contentRef} className="preview" />
        </div>
      </div>
    </Wrapper>
  )
}

export default MyEditor
